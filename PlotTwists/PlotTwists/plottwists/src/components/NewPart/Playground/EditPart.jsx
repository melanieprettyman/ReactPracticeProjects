import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    useEdgesState,
    addEdge,
    MiniMap, useReactFlow, ReactFlowProvider, useNodesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import './Styles/text-updater-node.css';
import DecisionNode from "./Decision/DecisionNode";
import Node from "./Scene/Node"
import {Box, Button, IconButton, Stack, Typography} from "@mui/material";
import sceneBtn from './Styles/addScene.png'
import decisionBtn from './Styles/addDecision.png'
import {useAppContext} from "../../../Store/Context";

const fakeTreeData = "{\"nodes\":[{\"id\":\"node-1\",\"position\":{\"x\":-108.0900750625521,\"y\":-451.0425354462052},\"type\":\"node\",\"data\":{\"id\":\"node-1\",\"label\":\"Scene 1\",\"title\":\"1\",\"description\":\"<p>1</p>\",\"imageUrl\":{},\"fileName\":\"placeholder.png\"},\"measured\":{\"width\":735,\"height\":640},\"selected\":false,\"dragging\":false},{\"id\":\"node-2\",\"type\":\"decisionNode\",\"position\":{\"x\":-108.0900750625521,\"y\":348.9574645537948},\"data\":{\"id\":\"node-2\",\"label\":\"Decision 2\",\"description\":\"2\"},\"measured\":{\"width\":337,\"height\":240},\"selected\":false},{\"id\":\"node-3\",\"type\":\"decisionNode\",\"position\":{\"x\":290.909090909091,\"y\":356.630525437865},\"data\":{\"id\":\"node-3\",\"label\":\"Decision 3\",\"description\":\"3\"},\"measured\":{\"width\":337,\"height\":240},\"selected\":false,\"dragging\":false},{\"id\":\"node-4\",\"type\":\"node\",\"position\":{\"x\":-286.905754795663,\"y\":745.954962468724},\"data\":{\"id\":\"node-4\",\"label\":\"Scene 2\",\"title\":\"2\",\"description\":\"<p>ndnfcndjdkdjk</p>\",\"imageUrl\":{},\"fileName\":\"placeholder.png\"},\"measured\":{\"width\":735,\"height\":640},\"selected\":false,\"dragging\":false}],\"edges\":[{\"source\":\"node-1\",\"sourceHandle\":\"a\",\"target\":\"node-2\",\"id\":\"xy-edge__node-1a-node-2\"},{\"source\":\"node-1\",\"sourceHandle\":\"a\",\"target\":\"node-3\",\"id\":\"xy-edge__node-1a-node-3\"},{\"source\":\"node-2\",\"sourceHandle\":\"a\",\"target\":\"node-4\",\"id\":\"xy-edge__node-2a-node-4\"}],\"viewport\":{\"x\":739.1046875372529,\"y\":-162.17499222345654,\"zoom\":0.749375}}"
const initialNodes = [
    {
        id: 'node-1',
        position: {x: 0, y: 0},
        type: 'node',
        data: {
            id: 'node-1',
            label: `Scene ${1}`,
            title: '',
            description: '',
            imageUrl: '',
            fileName: '',
        }
    },
];

const nodeTypes = {
    decisionNode: DecisionNode,
    node: Node,
};

function EditPart() {
    const {nodesInfo, publish, updateNode, setNodesInfo} = useAppContext();
    const [sceneCount, setSceneCount] = useState(1);
    const [decCount, setDecCount] = useState(1);
    const [rfInstance, setRfInstance] = useState(null);


    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const reactFlowInstance = useReactFlow();
    const { setViewport } = useReactFlow();




    const saveFlow = useCallback(() => {
        if (rfInstance) {
            const flow = rfInstance.toObject();
            console.log(JSON.stringify(flow));
        }
    }, [rfInstance]);

    const buildDecisionTree = useCallback(() => {
        const nodesById = reactFlowInstance.getNodes().reduce((acc, node) => {
            acc[node.id] = {...node.data, children: []};
            return acc;
        }, {});

        reactFlowInstance.getEdges().forEach(edge => {
            if (nodesById[edge.source] && nodesById[edge.target]) {
                nodesById[edge.source].children.push(nodesById[edge.target]);
            }
        });

        // Assuming 'node-1' is the root node
        const rootNode = nodesById['node-1'];
        return rootNode;
    }, [reactFlowInstance]);

    const handlePublish = useCallback(async () => { // Make the callback function async
        try {
            saveFlow();

            const decisionTree = buildDecisionTree();
            updateTreeWithNodeInfo(decisionTree, nodesInfo); // Update the tree with detailed node data
            console.log('Updated Decision Tree:', decisionTree);
        } catch (error) {
            console.error('Error publishing:', error);
        }
    }, [buildDecisionTree, nodesInfo, saveFlow]); // Include saveFlow in the dependency array if it uses external states or props


    if (publish) {
        handlePublish();

    };

    const onConnect = useCallback((connection) => {
        const sourceNode = nodes.find(node => node.id === connection.source);
        const targetNode = nodes.find(node => node.id === connection.target);

        // Ensure nodes can only connect node->decision or decision->node
        if (!sourceNode || !targetNode || (sourceNode.type === targetNode.type)) {
            console.error('Invalid connection attempt: Nodes of the same type or incorrect sequence');
            return; // Do not add edge if invalid
        }

        // Check to ensure correct connection flow: node->decision or decision->node
        if ((sourceNode.type === 'node' && targetNode.type !== 'decisionNode') ||
            (sourceNode.type === 'decisionNode' && targetNode.type !== 'node')) {
            console.error('Invalid connection attempt: Connections must alternate between node and decision');
            return;
        }

        setEdges((eds) => addEdge(connection, eds));
    }, [nodes, setEdges]);

    const handleAddScene = useCallback(() => {
        const newSceneCount = sceneCount + 1;  // Increment scene count first
        setSceneCount(newSceneCount);

        setNodes(prevNodes => {
            const lastNode = prevNodes[prevNodes.length - 1];
            const nodeId = `node-${prevNodes.length + 1}`;

            const newNode = {
                id: nodeId,
                type: 'node',
                position: {
                    x: lastNode.position.x,
                    y: lastNode.position.y + 400
                },
                data: {
                    id: nodeId,
                    label: `Scene ${newSceneCount}`,
                    title: '',
                    description: '',
                    imageUrl: '',
                    fileName: '',
                }
            };

            updateNode(nodeId, newNode.data);  // Update context with new node data
            reactFlowInstance.addNodes(newNode);

            return [...prevNodes, newNode];  // Return new nodes array with the newly added node
        });
    }, [sceneCount, reactFlowInstance, updateNode]);

    const handleAddDecision = () => {
        const newDecCount = decCount + 1;  // Increment decision count first
        setDecCount(newDecCount);

        setNodes(prevNodes => {
            const lastNode = prevNodes[prevNodes.length - 1];  // Access the latest node directly in the update function
            const nodeId = `node-${prevNodes.length + 1}`;
            const offset = lastNode.type === 'node' ? 800 : 400;

            const newNode = {
                id: nodeId,
                type: 'decisionNode',
                position: {
                    x: lastNode.position.x,
                    y: lastNode.position.y + offset  // Adjust y position to be below the last node
                },
                data: {
                    id: nodeId,
                    label: `Decision ${newDecCount}`,
                    description: '',
                }
            };

            updateNode(nodeId, newNode.data);  // Update context with new node data
            reactFlowInstance.addNodes(newNode);

            return [...prevNodes, newNode];  // Return new nodes array with the newly added node
        });
    };


    const onNodesDelete = useCallback((deletedNodes) => {
        const deleteRecursively = (nodeId) => {
            const children = edges.filter((edge) => edge.source === nodeId).map((edge) => edge.target);

            children.forEach((childId) => {
                deleteRecursively(childId);
                setNodes((nds) => nds.filter((n) => n.id !== childId));
            });

            setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
            setNodes((nds) => nds.filter((n) => n.id !== nodeId));
        };

        deletedNodes.forEach((node) => {
            deleteRecursively(node.id);
        });
    }, [edges, setNodes, setEdges]);


    const updateTreeWithNodeInfo = (node, nodesInfo) => {
        if (!node) return;

        const nodeDetails = nodesInfo[node.id];

        if (nodeDetails) {
            node.title = nodeDetails.title || node.title;
            node.description = nodeDetails.description || node.description;
            node.imageUrl = nodeDetails.imageUrl || node.imageUrl;
            node.fileName = nodeDetails.fileName || node.fileName;
        }

        if (node.children) {
            node.children.forEach(child => updateTreeWithNodeInfo(child, nodesInfo));
        }
    };

const restore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(fakeTreeData);
        console.log('flow: ', flow);
        const newNodesInfo = flow.nodes.reduce((acc, node) => {
            acc[node.id] = {
                id: node.id,
                type: node.type, // Adjust according to your data structure
                title: node.data.title,
                description: node.data.description,
                imageUrl: node.data.imageUrl,
                fileName: node.data.fileName
            };
            return acc;
        }, {});

        // Update the entire nodes info in context
        setNodesInfo(newNodesInfo);

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);


    return (
        <Box sx={{display: 'flex', width: '100vw', height: '100vh', m: 0, p: 0}}>
            <Box sx={{width: 100, backgroundColor: '#f0f0f0', height: 240, borderRadius: 4, p: 2, m: 0}}>
                <IconButton onClick={handleAddScene} size="large">
                    <Stack>
                        <img src={sceneBtn} alt="Add Scene" style={{maxWidth: '100%', maxHeight: '100%'}}/>
                        <Typography sx={{fontSize: 12}}>Add Scene</Typography>
                    </Stack>
                </IconButton>
                <IconButton onClick={handleAddDecision} size="large">
                    <Stack>
                        <img src={decisionBtn} alt="Add decision" style={{maxWidth: '100%', maxHeight: '100%'}}/>
                        <Typography sx={{fontSize: 12}}>Add Decision</Typography>
                    </Stack>
                </IconButton>
                <Button onClick={restore}>hi</Button>
            </Box>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodesDelete={onNodesDelete}
                nodeTypes={nodeTypes}
                onConnect={onConnect}
                panOnScroll
                selectionOnDrag
                fitView
                fitViewOptions={{
                    padding: 1.5
                }}
                onInit={setRfInstance}
            >
                <MiniMap/>
                <Background/>
                <Controls/>
            </ReactFlow>
        </Box>
    );
}

export default () => (
    <ReactFlowProvider>
        <EditPart/>
    </ReactFlowProvider>
);