import React, { useEffect, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
} from 'reactflow';
import SceneNode from './SceneNode';
import {useDecisionContext} from "../Store/Context";

const nodeTypes = {
  sceneNode: SceneNode, // Custom node
};

const DecisionTreeFlow: React.FC = () => {
   const { decisionNumber, setDecisionNumber } = useDecisionContext();

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const newNodes = [
      { id: '1', type: 'sceneNode', position: { x: 250, y: 25 }, data: { label: 'Main Scene' } },
      ...Array.from({ length: 5 }, (_, idx) => ({
        id: `decision-${idx + 2}`,
        type: 'sceneNode',
        position: { x: 100 * (idx + 1), y: 100 * (idx + 1) + 50 },
        data: { label: `Decision ${idx + 1}` }
      }))
    ];
    const newEdges = newNodes.slice(1).map(node => ({
      id: `e1-${node.id}`,
      source: '1',
      target: node.id,
      animated: true,
    }));

    // @ts-ignore
    setNodes(newNodes);
    // @ts-ignore
    setEdges(newEdges);
  }, [decisionNumber]);

  return (
    <ReactFlowProvider>
      <div style={{ height: 5000 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default DecisionTreeFlow;
