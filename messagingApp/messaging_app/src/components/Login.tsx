import React, {useContext, useState} from "react";
import { Context } from "../store/context";

const Login: React.FunctionComponent<{}> = () => {
    const [userNameValid, setUserNameValid] = useState(true);
    const [roomNameValid, setRoomNameValid] = useState(true);

   const context = useContext(Context);
    if (!context) {
        // Handle the case where context is undefined
        // This could be displaying an error, or a loading spinner, etc.
        return <div>Context not available</div>;
    }

    const {
      setAppState,
      enteredUserName,
      setEnteredUserName,
      enteredRoom,
      setEnteredRoom
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
                onChange={(event) => {
                    setEnteredUserName(event.target.value);
                    if (!userNameValid) setUserNameValid(true);
                }}
            />
            <input
                type="text"
                className={`inputField ${!roomNameValid ? "invalid" : ""}`}
                placeholder="Enter room name"
                value={enteredRoom}
                onChange={(event) => {
                    setEnteredRoom(event.target.value);
                    if (!roomNameValid) setRoomNameValid(true);
                }}
            />
            <button className="button" onClick={handleJoinRoom}>
                JOIN
            </button>
        </div>
    );
};

export default Login;
