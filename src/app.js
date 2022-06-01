import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Selection from './components/selection';
import Room from './components/room';
import GameEvolution from './components/game/gameEvolution';
import GameGravity from './components/game/gameGravity';

function fallBack() {
  return <div>URL not found</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/room/:game/:partyId" element={<Room />} />
        <Route path="/game_evolution" element={<GameEvolution />} />
        <Route path="/game_gravity" element={<GameGravity />} />
        <Route path="*" element={fallBack()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
