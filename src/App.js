import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import { updateNewPostText } from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path='/profile' component={Profile} /> */}
          <Route path='/profile' render={ () => <Profile 
            profilePage={props.state.profilePage} 
            dispatch={props.dispatch} /> } />
          <Route path='/dialogs' render={ () => <Dialogs 
            dialogsPage={props.state.dialogsPage}
            addMessage={props.addMessage} 
            updateNewMessageText={props.updateNewMessageText}
            /> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/settings' render={ () => <Settings /> } />
          <Route path='/friends' render={ () => <Friends state={props.state.friendsPage} /> } />
        </div>
      </div>
    </BrowserRouter>
    );
};

export default App;
