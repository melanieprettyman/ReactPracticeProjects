import { Handle, Position } from '@xyflow/react';
import Scene from "../NewPart/Scene/Container";

function TextUpdaterNode({ data }) {

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
      />
      <div className="nodrag">
        <Scene/>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
      />
    </div>
  );
}

export default TextUpdaterNode;
