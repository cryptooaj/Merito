import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Architecture } from './components/Architecture';
import { CodeDocs } from './components/CodeDocs';
import { ValueRoadmap } from './components/ValueRoadmap';
import { ViewState } from './types';

function App() {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Home setView={setView} />;
      case ViewState.ARCHITECTURE:
        return <Architecture />;
      case ViewState.CODE_DOCS:
        return <CodeDocs />;
      case ViewState.VALUE_ROADMAP:
        return <ValueRoadmap />;
      default:
        return <Home setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-midnight-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Navigation currentView={currentView} setView={setView} />
      <main className="pt-16">
        {renderView()}
      </main>
      
      <footer className="border-t border-white/5 bg-midnight-950 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between">
          <div className="mt-8 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 Merito Compact DApp Proposal. Built for the Midnight Ecosystem.
            </p>
          </div>
          <div className="flex justify-center space-x-6 md:order-2">
             <span className="text-gray-500 text-xs">Project Catalyst</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;