import './App.css';
import Navbar from './components/Navbar';
import AddImages from './pages/AddImages';
import AddVideos from './pages/AddVideos';
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home';
import Images from './pages/Images';
import Videos from './pages/Videos';
import Logout from './pages/Logout';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UserReducer';

export const UserContext = createContext()
const Routing = () => {
  return (
    <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/images">
          <Images/>
        </Route>
        <Route exact path="/videos">
          <Videos/>
        </Route>
        <Route exact path="/admin">
          <AdminLogin/>
        </Route>
        <Route exact path="/addImages">
          <AddImages/>
        </Route>
        <Route exact path="/addVideos">
          <AddVideos/>
        </Route>
        <Route exact path="/logout">
          <Logout/>
        </Route>
      </Switch>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

 

  return (
    
    <div className="app">
      <UserContext.Provider value={{state, dispatch}}>
      <Router>
      <Navbar />
        <Routing/>
        </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
