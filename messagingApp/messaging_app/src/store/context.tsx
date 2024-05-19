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
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
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

   // Effect to manage the socket connection
  useEffect(() => {
    if (!socket) {
      // Initialize the socket connection
      const newSocket = io('http://localhost:3000'); // Replace with your actual server URL
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();  // Clean up the socket when the component unmounts
      };
    }
  }, [socket]);  // Dependencies array includes socket to re-run effect if socket changes

  return (
    <Context.Provider value={{
      appState, setAppState,
      enteredUserName, setEnteredUserName,
      enteredRoom, setEnteredRoom,
      messages, setMessages,
      socket, setSocket, // Provide socket state through context
    }}>
      {children}
    </Context.Provider>
  );
};
