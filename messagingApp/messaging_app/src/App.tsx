import React, {useContext, useState} from 'react';
import './App.css';
import Login from "./components/Login";
import Room from "./components/Room";
import {Context, AppStateProvider} from "./store/context";

const App: React.FC = () => {

  return (
    <div className="App">
      <AppStateProvider>
        <Content />
      </AppStateProvider>
    </div>
  );
}

export default App;

const Content: React.FC = () => {
  const appStateCtx = useContext(Context);  // Use useContext inside a child component of AppStateProvider

  return (
    <>
      {appStateCtx?.appState === 'login' ? <Login /> : <Room />}
    </>
  );
};

