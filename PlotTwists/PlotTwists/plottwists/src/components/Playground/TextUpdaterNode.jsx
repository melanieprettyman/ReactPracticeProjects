import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import Scene from "../NewPart/Scene/Container";

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
      />
      <div>
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
