import React, {useCallback, useMemo, useState} from 'react';
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

import './text-updater-node.css';
import DecisionNode from "./DecisionNode";
import Node from "./Node"
import {Button} from "@mui/material";


const initialNodes = [
    {id: 'node-1', position: {x: 0, y: 0}, type: 'node'},
];

const nodeTypes = {
    decisionNode: DecisionNode,
    node: Node,
};

function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const reactFlowInstance = useReactFlow();

    const onConnect = useCallback((connection) => {
        const sourceNode = nodes.find(node => node.id === connection.source);
        const targetNode = nodes.find(node => node.id === connection.target);

        // Prevent connecting nodes of the same type or incorrect sequence
        if (sourceNode.type === targetNode.type || (sourceNode.type === 'decisionNode' && targetNode.type === 'node')) {
            console.error('Invalid connection attempt');
            return; // Return without adding the edge
        }

        setEdges((eds) => addEdge(connection, eds));
    }, [nodes]);

    const handleAddScene = useCallback(() => {
        const newNode = {
            id: `node-${nodes.length + 1}`,
            type: 'node', // Custom node type
            position: {x: 700, y: 700},
            data: {label: `Scene ${nodes.length + 1}`}
        };
        reactFlowInstance.addNodes(newNode);
    }, [nodes.length, reactFlowInstance]);

    const handleAddDecision = useCallback(() => {
        const newNode = {
            id: `node-${nodes.length + 1}`,
            type: 'decisionNode', // Custom node type
            position: {x: 300, y: 200},
            data: {label: `Scene ${nodes.length + 1}`}
        };
        reactFlowInstance.addNodes(newNode);
    }, [nodes.length, reactFlowInstance]);

    const onNodesDelete = useCallback(
        (deleted) => {
            setEdges(
                deleted.reduce((acc, node) => {
                    const incomers = getIncomers(node, nodes, edges);
                    const outgoers = getOutgoers(node, nodes, edges);
                    const connectedEdges = getConnectedEdges([node], edges);

                    const remainingEdges = acc.filter(
                        (edge) => !connectedEdges.includes(edge),
                    );

                    const createdEdges = incomers.flatMap(({id: source}) =>
                        outgoers.map(({id: target}) => ({
                            id: `${source}->${target}`,
                            source,
                            target,
                        })),
                    );

                    return [...remainingEdges, ...createdEdges];
                }, edges),
            );
        },
        [nodes, edges],
    );


    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <Button onClick={handleAddScene}>
                Add Scene
            </Button>
            <Button onClick={handleAddDecision}>
                Add Decision
            </Button>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodesDelete={onNodesDelete}
                nodeTypes={nodeTypes}
                fitView
                zoomOnScroll={true}
                zoomOnDoubleClick={true}
                minZoom={0.2}
                maxZoom={4}
                fitViewOptions={{padding: 2}}
                onConnect={onConnect}
            >
                <MiniMap zoomable pannable/>
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
    );
}

export default () => (
    <ReactFlowProvider>
        <Flow/>
    </ReactFlowProvider>
);

