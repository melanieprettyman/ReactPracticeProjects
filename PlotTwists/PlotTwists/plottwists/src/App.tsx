import React from 'react';
import './App.css';
import LandingPage from "./components/landing/Container";
import Homepage from "./components/home/Container";
import CreateStoryPage from "./components/CreateStory/Container";
import Theme from "./Theme/Theme";
import {ThemeProvider} from "@mui/material/styles";
import NewPartPage from "./components/NewPart/Container";


function App() {
    return (
        <ThemeProvider theme={Theme}>
            <NewPartPage/>
        </ThemeProvider>
    );
}

export default App;
