import React from 'react';
import './App.css';
import LandingPage from "./components/LandingPage/Container";
import Homepage from "./components/Home/Container";
import CreateStoryPage from "./components/CreateStory/Container";
import Theme from "./Theme/Theme";
import {ThemeProvider} from "@mui/material/styles";
import NewPartPage from "./components/NewPart/Container";
import {ContextProvider} from "./Store/Context";
import PlayStory from "./components/PlayStory/PlayStory";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Preview from "./components/PlayStory/Preview";
import CollectionPage from "./components/CollectionPage/CollectionPage";
import StoryDescription from "./components/StoryDescription/StoryDescription";
import Profile from "./components/Profile/Profile";
import MyStories from "./components/MyStories/MyStories";
import EditStoryDetails from "./components/EditStoryDetailsPage/EditStoryDetails";
import Library from "./components/Library/Library";
import MyProfile from "./components/Profile/MyProfile";
import Settings from "./components/Settings/Settings";
import Notifications from "./components/Notifications/Notifications";


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
                        <Route path="/details" element={<StoryDescription/>}/>
                        <Route path="/story" element={<PlayStory/>}/>
                        <Route path="/user" element={<MyProfile/>}/>
                        <Route path="/myworks" element={<MyStories/>}/>
                        <Route path="/myworks/editstorydetails" element={<EditStoryDetails/>}/>
                        <Route path="/library" element={<Library/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/notifications" element={<Notifications/>}/>
                    </Routes>
                </Router>
            </ContextProvider>
        </ThemeProvider>
    );
}


export default App;
