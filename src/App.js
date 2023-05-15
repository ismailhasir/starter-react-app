import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Cockpit from './screens/Cockpit/Cockpit';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Routes>
            <Route path="/cockpit" element={<Cockpit />} />
            {/* Add other routes here... */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
