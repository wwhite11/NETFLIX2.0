import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <div className="app">
     <Router>
        <Routes>
          <Route path="/gang"  element={<HomeScreen />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
