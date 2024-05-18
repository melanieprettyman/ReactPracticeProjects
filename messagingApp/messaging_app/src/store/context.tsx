// Import statements
import React, { createContext, ReactNode, useState } from 'react';

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
  messages: Message[]; // This should be an array of Message objects
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
} | undefined>(undefined);

// Provider component
export const AppStateProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [appState, setAppState] = useState<AppState>('login');
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredRoom, setEnteredRoom] = useState('');
  const [messages, setMessages] = useState<Message[]>([]); // Correctly initializing as an array

  return (
    <Context.Provider value={{
      appState, setAppState,
      enteredUserName, setEnteredUserName,
      enteredRoom, setEnteredRoom,
      messages, setMessages
    }}>
      {children}
    </Context.Provider>
  );
};

