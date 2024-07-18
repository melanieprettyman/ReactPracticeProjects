import React from 'react';
import './App.css';
import LandingPage from "./components/landing/Container";
import Homepage from "./components/home/Container";
import CreateStoryPage from "./components/CreateStory/Container";
import Theme from "./Theme/Theme";
import {ThemeProvider} from "@mui/material/styles";
import NewPartPage from "./components/NewPart/Container";
import {ContextProvider} from "./Store/Context";
import PlayStory from "./components/playStory/PlayStory";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Preview from "./components/playStory/Preview";
import CollectionPage from "./components/collectionPage/CollectionPage";


function App() {
    return (
        <ThemeProvider theme={Theme}>
            <ContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/create-story" element={<CreateStoryPage/>}/>
                        <Route path="/add-new-part" element={<NewPartPage/>}/>
                        <Route path="/preview-new-part" element={<Preview/>}/>
                        <Route path="/collection/:genre" element={<CollectionPage/>}/>
                        {/* Add other routes here */}
                    </Routes>
                </Router>
            </ContextProvider>
        </ThemeProvider>
    );
}


export default App;
