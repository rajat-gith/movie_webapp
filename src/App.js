import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
