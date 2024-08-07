import {Handle, Position} from '@xyflow/react';
import {Paper, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useAppContext} from "../../../../Store/Context";


function DecisionNode({id}) {

     const { nodesInfo, updateNode } = useAppContext();
    const node = nodesInfo[id] || { type: 'decision', description: ''};

    const [description, setDescription] = useState(node.description);

    useEffect(() => {
        // Prepare the updated node data based on type
        const updatedData = {description};
        updateNode(id, updatedData);
    }, [description]);


    return (
        <div className="decision-node">
            <Handle
                type="target"
                position={Position.Top}
                style={{ width: '15px', height: '15px', background: '#555' }}
            />
            <div>
                <Paper
                    variant="outlined"
                    sx={{width: 300, height: 200, borderRadius: 3, borderWidth: 3, padding: 2}}
                >
                    <Stack spacing={1}>
                        <Typography variant='h5'>Decision:</Typography>
                        <div className="nodrag">
                            <TextField
                                id="decision-box"
                                variant="outlined"
                                multiline
                                rows={4}
                                placeholder="Enter decision here"
                                fullWidth
                                sx={{fontSize:18}}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </Stack>

                </Paper>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={{ width: '15px', height: '15px', background: '#555' }}
            />
        </div>
    );
}

export default DecisionNode;
