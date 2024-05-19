import React, { useContext, useState } from "react";
import { Context } from "../store/context";

const Login: React.FunctionComponent<{}> = () => {
    const [userNameValid, setUserNameValid] = useState(true);
    const [roomNameValid, setRoomNameValid] = useState(true);

    const context = useContext(Context);
    if (!context) {
        // Handle the case where context is undefined
        return <div>Context not available</div>;
    }

    const {
      appState,
      setAppState,
      enteredUserName,
      setEnteredUserName,
      enteredRoom,
      setEnteredRoom,
      socket  // Now correctly included
    } = context;

    function isValid(userInput: string): boolean {
        return userInput.trim().length > 0;
    }

    function handleJoinRoom() {
        const isUserNameValid = isValid(enteredUserName);
        const isRoomNameValid = isValid(enteredRoom);
        setUserNameValid(isUserNameValid);
        setRoomNameValid(isRoomNameValid);

        if (isUserNameValid && isRoomNameValid) {
            socket && socket.emit('join_room', { username: enteredUserName, room: enteredRoom });
            setAppState('room');
        } else {
            alert('Please enter valid values for both your name and the room name.');
        }
    }

    return (
        <div className="appContainer">
            <div className="title">MeloConvo</div>
            <input
                type="text"
                className={`inputField ${!userNameValid ? "invalid" : ""}`}
                placeholder="Enter name"
                value={enteredUserName}
                onChange={(event) => setEnteredUserName(event.target.value)}
            />
            <input
                type="text"
                className={`inputField ${!roomNameValid ? "invalid" : ""}`}
                placeholder="Enter room name"
                value={enteredRoom}
                onChange={(event) => setEnteredRoom(event.target.value)}
            />
            <button className="button" onClick={handleJoinRoom}>
                JOIN
            </button>
        </div>
    );
};

export default Login;
