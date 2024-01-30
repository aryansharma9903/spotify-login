import React, { useEffect } from 'react';
import './App.css';
import Login from './login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("i have a token", token);
  }, []);

  return (
    <div className="app">

    <Login />
    </div>
  );
}

export default App;
