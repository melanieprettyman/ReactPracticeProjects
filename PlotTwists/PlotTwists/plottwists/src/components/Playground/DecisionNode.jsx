import {Handle, Position} from '@xyflow/react';
import {Paper, Stack, TextField, Typography} from "@mui/material";
import React from "react";


function DecisionNode() {

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
