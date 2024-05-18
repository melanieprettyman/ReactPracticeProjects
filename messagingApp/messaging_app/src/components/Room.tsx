import {useContext, useState} from "react";
import {Context, Message} from "../store/context";


const Room: React.FunctionComponent<{}> = () => {
    const context = useContext(Context);
    const [newMessage, setNewMessage] = useState<string>('');

    const sendButtonDisabled = !newMessage;

    function sendMessage() {
        const newMsg: Message = {
            username: context?.enteredUserName,
            content: newMessage,
            room: context?.enteredRoom
        }
        context?.setMessages((prevMessages)=>[...prevMessages, newMsg]);
        setNewMessage('');
    }

    return (
        <>
            <div className="header">Room: {context?.enteredRoom}</div>
                <div className="messagesContainer">
                    <div className="messageList">
                        {context?.messages.map((message, index)=>(
                            <p key={index}>
                                <span className='bold'>{message.username}:</span> {message.content}
                            </p>
                        ))}
                    </div>
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