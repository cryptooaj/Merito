import React from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { ViewState, NavItem } from '../types';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { id: ViewState.HOME, label: 'Overview' },
  { id: ViewState.ARCHITECTURE, label: 'Architecture' },
  { id: ViewState.CODE_DOCS, label: 'Code & SDK' },
  { id: ViewState.VALUE_ROADMAP, label: 'Value & Roadmap' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-midnight-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView(ViewState.HOME)}>
            <div className="flex-shrink-0 text-midnight-accent">
              <ShieldCheck size={32} />
            </div>
            <div className="hidden md:block">
              <div className="ml-3 flex items-baseline space-x-1">
                <span className="text-xl font-bold tracking-tight text-white">MERITO</span>
                <span className="text-xs text-indigo-300 uppercase tracking-widest border border-indigo-500/50 px-1 rounded">Compact</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentView === item.id
                      ? 'text-midnight-accent bg-midnight-800'
                      : 'text-gray-300 hover:text-white hover:bg-midnight-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-midnight-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-midnight-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-midnight-950 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.id
                    ? 'text-midnight-accent bg-midnight-800'
                    : 'text-gray-300 hover:text-white hover:bg-midnight-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};