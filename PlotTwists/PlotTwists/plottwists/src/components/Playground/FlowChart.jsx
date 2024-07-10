import React, {useCallback, useMemo, useState} from 'react';
import {ReactFlow, Controls, Background, applyNodeChanges} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import TextUpdaterNode from './TextUpdaterNode';
import './text-updater-node.css';


const initialNodes = [
    {id: '1', position: {x: 0, y: 0}, data: {label: 'hi'}},
    {id: '2', position: {x: 100, y: 100}, data: {label: 'world'}},
    {id: 'node-1', position: {x: 200, y: 200}, data: {value: 123}, type: 'textUpdater'}
];
const initialEdges = [{id: 'e1-2', source: '1', target: '2', type: 'step'}, {
    id: 'e2-1',
    source: '2',
    target: 'node-1',
    type: 'step'
}];

export default function Flow() {
    const nodeTypes = useMemo(() => ({
        textUpdater: TextUpdaterNode
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
            >
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
    );
}