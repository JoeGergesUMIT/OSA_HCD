import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sleep from './pages/Sleep';
import Knowledge from './pages/Knowledge';
import Recommendations from './pages/Recommendations';
import Chat from './pages/Chat';
import Teleconsultation from './pages/Teleconsultation';
import { RecordingProvider } from './context/RecordingContext';

function App() {
  return (
    <RecordingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sleep" element={<Sleep />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="teleconsultation" element={<Teleconsultation />} />
            <Route path="chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecordingProvider>
  );
}

export default App;