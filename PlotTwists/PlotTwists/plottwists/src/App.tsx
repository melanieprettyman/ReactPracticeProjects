import React from 'react';
import './App.css';
import LandingPage from "./components/landing/Container";
import Homepage from "./components/home/Container";
import CreateStoryPage from "./components/CreateStory/Container";
import Theme from "./Theme/Theme";
import {ThemeProvider} from "@mui/material/styles";
import NewPartPage from "./components/NewPart/Container";
import {ContextProvider} from "./Store/Context";


function App() {
    return (
        <ThemeProvider theme={Theme}>
            <ContextProvider>
                <NewPartPage/>
            </ContextProvider>
        </ThemeProvider>
    );
}


export default App;
