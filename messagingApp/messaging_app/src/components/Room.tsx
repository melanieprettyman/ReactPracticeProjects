import {useContext, useEffect, useRef, useState} from "react";
import {Context, Message} from "../store/context";
import { List, ListItem } from '@mui/material';
import ChatBubble from "./ChatBubble";


const Room: React.FunctionComponent<{}> = () => {
    const context = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const sendButtonDisabled = !newMessage;

    // Effect to scroll to the bottom on message update
     useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [context?.messages]);

    function sendMessage() {
        const newMsg: Message = {
            username: context?.enteredUserName,
            content: newMessage,
            room: context?.enteredRoom
        }
        context?.addMessage(newMsg);
        context?.sendMessage("new-message", newMsg)
        setNewMessage('');
    }
    return (
        <>
            <div className="header">Room: {context?.enteredRoom}</div>
                <div className="messagesContainer">
                    <List sx={{maxHeight: 795, overflow: 'auto'}}>
                        {context?.messages.map((message, index) => (
                            <ListItem key={index} >
                                <ChatBubble message={message}/>
                            </ListItem>
                        ))}
                        <div ref={messagesEndRef}/>
                    </List>
                </div>
            <div className="inputArea">
                <input
                    type="text"
                    className="msgInputField"
                    placeholder="Write a message"
                    value={newMessage}
                    onChange={(event) => {
                    setNewMessage(event.target.value);
                }}
                />
                <button className="sendButton" onClick={sendMessage} disabled={sendButtonDisabled}></button>
                <button className="leaveButton" onClick={() => context?.setAppState('login')}>Leave</button>
            </div>
        </>
    );
};

export default Room;