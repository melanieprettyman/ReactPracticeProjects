import React, {useCallback, useMemo, useState} from 'react';
import {ReactFlow, Controls, Background, applyNodeChanges} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import SceneNode from './SceneNode';
import './text-updater-node.css';


const initialNodes = [
    {id: 'node-1', position: {x: 0, y: 0}, type: 'textUpdater'},
    {id: 'node-2-1', position: {x: 700, y: 700}, type: 'textUpdater'},
    {id: 'node-2-2', position: {x: -700, y: 700}, type: 'textUpdater'},
    {id: 'node-2-3', position: {x: -2100, y: 700}, type: 'textUpdater'},
    {id: 'node-2-4', position: {x: 2100, y: 700}, type: 'textUpdater'},
];
const initialEdges = [
    {
        id: 'e1-1',
        source: 'node-1',
        target: 'node-2-1',
        type: 'step'
    },
    {
        id: 'e1-2',
        source: 'node-1',
        target: 'node-2-2',
        type: 'step'
    },
    {
        id: 'e1-3',
        source: 'node-1',
        target: 'node-2-3',
        type: 'step'
    },
    {
        id: 'e1-4',
        source: 'node-1',
        target: 'node-2-4',
        type: 'step'
    },
];

export default function Flow() {
    const nodeTypes = useMemo(() => ({
        textUpdater: SceneNode
    }), []);
    const [nodes, setNodes] = useState(initialNodes);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );


    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                onNodesChange={onNodesChange}
                nodeTypes={nodeTypes}
                fitView
                zoomOnScroll={true}
                zoomOnDoubleClick={true}
                minZoom={0.2}
                maxZoom={4}
            >
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
    );
}