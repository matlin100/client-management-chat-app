// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import ChatBox from './components/Chat/ChatBox';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Route */}
        <Route path="/:userId" element={<ChatBox />} /> {/* Use element prop to specify the component */}
      </Routes>
    </Router>
  );
}

export default App;