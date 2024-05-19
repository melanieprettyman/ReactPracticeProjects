import React, { useContext } from "react";
import { Box } from '@mui/material';
import {Context, Message} from "../store/context";

const ChatBubble: React.FunctionComponent<{ message: Message }> = ({ message }) => {
    const context = useContext(Context);
    if (!context) {
        return <div>Error: Context not found</div>; // Handling case where context is undefined
    }

    const { enteredUserName } = context;

    return (
        <Box
            sx={{
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                maxWidth: '35%',
                color: message.username === enteredUserName ? 'white' : 'black',
                bgcolor: message.username === enteredUserName ? '#8f4af1' : '#f18bc1',
                alignSelf: message.username === enteredUserName ? 'flex-end' : 'flex-start',
            }}
        >
            <strong>{message.username}</strong>: {message.content}
        </Box>
    );
};

export default ChatBubble;
