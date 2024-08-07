import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    applyNodeChanges,
    useEdgesState,
    addEdge,
    MiniMap,
    applyEdgeChanges, useReactFlow, ReactFlowProvider, getIncomers, getOutgoers, getConnectedEdges, useNodesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import './Styles/text-updater-node.css';
import DecisionNode from "./Decision/DecisionNode";
import Node from "./Scene/Node"
import {Box, IconButton, Stack, Typography} from "@mui/material";
import sceneBtn from './Styles/addScene.png'
import decisionBtn from './Styles/addDecision.png'
import {useAppContext} from "../../../Store/Context";


const initialNodes = [
    {
        id: 'node-1',
        position: {x: 570, y: 50},
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

function Flow() {
    const {nodesInfo, publish, updateNode} = useAppContext();
    const [sceneCount, setSceneCount] = useState(1);
    const [decCount, setDecCount] = useState(1);


    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const reactFlowInstance = useReactFlow();

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
        setSceneCount(prevState => prevState + 1);
        const nodeId = `node-${nodes.length + 1}`;
        const newNode = {
            id: nodeId,
            type: 'node',
            position: {x: -600, y: 0},
            data: {
                id: nodeId,
                label: `Scene ${sceneCount + 1}`,
                title: '',
                description: '',
                imageUrl: '',
                fileName: '',
            }
        };
        updateNode(nodeId, newNode.data); // Update context with new node data
        reactFlowInstance.addNodes(newNode);
    }, [nodes.length, reactFlowInstance, updateNode]);

    const handleAddDecision = useCallback(() => {
        setDecCount(prevState => prevState + 1);
        const nodeId = `node-${nodes.length + 1}`;
        const newNode = {
            id: nodeId,
            type: 'decisionNode', // Custom node type
            position: {x: -600, y: 700},
            data: {
                id: nodeId,
                label: `Decision ${decCount}`,
                description: '',
            }
        };
        updateNode(nodeId, newNode.data); // Update context with new node data
        reactFlowInstance.addNodes(newNode);
    }, [nodes.length, reactFlowInstance, updateNode, sceneCount]);

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

    const handlePublish = useCallback(() => {
        const decisionTree = buildDecisionTree();

        updateTreeWithNodeInfo(decisionTree, nodesInfo); // Update the tree with detailed node data
        console.log('Updated Decision Tree:', decisionTree);

    }, [buildDecisionTree, nodesInfo]);

    if (publish) {
        handlePublish();
    }
    ;


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
                    padding: 2,
                }}
            >
                <MiniMap zoomable pannable/>
                <Background/>
                <Controls/>
            </ReactFlow>
        </Box>
    );
}

export default () => (
    <ReactFlowProvider>
        <Flow/>
    </ReactFlowProvider>
);

/**
 * Updated Decision Tree:
 * {
 *     "id": "node-1",
 *     "label": "Scene 1",
 *     "title": "1",
 *     "description": "<p>1</p>",
 *     "imageUrl": {},
 *     "fileName": "Screenshot 2024-07-11 at 2.58.47 PM.png",
 *     "children": [
 *         {
 *             "id": "node-2",
 *             "label": "Decision 1",
 *             "description": "a",
 *             "children": []
 *         },
 *         {
 *             "id": "node-3",
 *             "label": "Decision 2",
 *             "description": "b",
 *             "children": [
 *                 {
 *                     "id": "node-4",
 *                     "label": "Scene 2",
 *                     "title": "2",
 *                     "description": "<p>2</p>",
 *                     "imageUrl": "",
 *                     "fileName": "",
 *                     "children": [
 *                         {
 *                             "id": "node-5",
 *                             "label": "Decision 3",
 *                             "description": "2a",
 *                             "children": [
 *                                 {
 *                                     "id": "node-7",
 *                                     "label": "Scene 3",
 *                                     "title": "3",
 *                                     "description": "<p>3</p>",
 *                                     "imageUrl": "",
 *                                     "fileName": "",
 *                                     "children": []
 *                                 }
 *                             ]
 *                         },
 *                         {
 *                             "id": "node-6",
 *                             "label": "Decision 4",
 *                             "description": "2b",
 *                             "children": []
 *                         }
 *                     ]
 *                 }
 *             ]
 *         }
 *     ]
 * }
 *
 */