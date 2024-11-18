import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SelfCareEssentials from './components/SelfCareEssentials';
import CarePaths from './components/CarePaths';
import Tools from './components/Tools';
import Inspiration from './components/Inspiration';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SelfCareEssentials />
      <CarePaths />
      <Tools />
      <Inspiration />
    </div>
  );
}

export default App;