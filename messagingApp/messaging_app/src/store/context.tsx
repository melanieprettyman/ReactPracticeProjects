// Import statements
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import { io, Socket } from 'socket.io-client';

// Define the type for the state
export type AppState = 'login' | 'room';

export type Message = {
    username?: string;
    content?: string;
    room?: string;
}

// Create the context
export const Context = createContext<{
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  enteredUserName: string;
  setEnteredUserName: React.Dispatch<React.SetStateAction<string>>;
  enteredRoom: string;
  setEnteredRoom: React.Dispatch<React.SetStateAction<string>>;
  messages: Message[];
  addMessage: (newMessage: Message) => void; // Correct type
  sendMessage: (messageType: string, content: any) => void; // Correct type
  socket: Socket | null; // Include socket in the context
  setSocket: React.Dispatch<React.SetStateAction<Socket | null>>;
} | undefined>(undefined);

// Provider component
export const AppStateProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [appState, setAppState] = useState<AppState>('login');
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredRoom, setEnteredRoom] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  //Store socket to send messages to the server
  const [socket, setSocket] = useState<Socket | null>(null);

  const addMessage = (newMessage: Message)=>{
      setMessages((prevMessages)=>[...prevMessages, newMessage]);
  }

  const sendMessage = (messageType:string, content: any) => {
    if (socket) {
        socket.emit(messageType, content);
    }
};

  // Effect to manage the socket connection
  useEffect(() => {
    if (!socket) {
            // this sets up a socket connection to the server
      console.log("connect to server");
      const socket = io("http://localhost:3000");
      setSocket(socket);

      // Listen for connect_error event
      socket.on("connect_error", (error) => {
         setSocket(null);
      });

      // Listen for the server saying you or someone else joined the room
      socket.on("join-confirmation", (message: Message) => {
         console.log("join-confirmation", message);
         setMessages([message]); // set the join confirmation message as the first
         setAppState("room");
      });

      // Listen for new messages from the server
      socket.on("new-message", (message: Message) => {
         console.log("recieved new message", message);
         addMessage(message);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, []);


  return (
    <Context.Provider value={{
      appState, setAppState,
      enteredUserName, setEnteredUserName,
      enteredRoom, setEnteredRoom,
      messages, addMessage,
      sendMessage,
      socket, setSocket, // Provide socket state through context
    }}>
      {children}
    </Context.Provider>
  );
};
