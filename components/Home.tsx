import React from 'react';
import { ArrowRight, Lock, Scale, AlertTriangle, Layers, ShieldCheck } from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
           <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40 text-center px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
             Private, Merit-Based DAO Governance on Midnight
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Sybil-resistant, expertise-weighted voting leveraging Verifiable Credentials and Zero-Knowledge Proofs for uncompromised privacy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setView(ViewState.CODE_DOCS)}
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2 transition-all"
            >
              View the Code & SDK <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => setView(ViewState.ARCHITECTURE)}
              className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors"
            >
              Learn the Architecture <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-500" />
              The Governance Crisis
            </h2>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Plutocracy by Design:</strong> Standard token-weighted voting favors whales over experts, centralizing control in the hands of the wealthy rather than the meritocratic.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Sybil Vulnerability:</strong> Without privacy-preserving identity, systems are forced to choose between invasive KYC or rampant bot attacks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>The Privacy Paradox:</strong> Voters hesitate to participate in sensitive governance decisions when their votes and identity are permanently linked on a public ledger.</span>
              </li>
            </ul>
          </div>
          <div className="bg-midnight-800/50 p-8 rounded-2xl border border-white/5">
             <div className="space-y-4">
                <div className="h-2 bg-red-500/20 rounded w-3/4"></div>
                <div className="h-2 bg-red-500/20 rounded w-full"></div>
                <div className="h-2 bg-red-500/20 rounded w-5/6"></div>
                <div className="flex justify-center py-8">
                  <div className="text-center text-gray-500 text-sm">Legacy Public Ledger Voting</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Why Midnight */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-midnight-900/40 py-20 rounded-3xl border border-indigo-500/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Midnight is Mandatory
          </h2>
          <p className="mt-4 text-gray-400">
            Standard EVM or UTXO chains cannot solve this problem. Merito requires Midnight's unique architecture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Lock className="w-8 h-8 text-indigo-400" />,
              title: "Private State",
              desc: "Allows storage of Verifiable Credentials (VCs) and Identity DIDs without revealing the underlying data to the public chain."
            },
            {
              icon: <Layers className="w-8 h-8 text-indigo-400" />,
              title: "Hybrid Model",
              desc: "Seamlessly blends private voter checks with public vote tallying, ensuring auditability without compromising secrecy."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
              title: "ZK-Native",
              desc: "Compact language is built for ZKPs. We prove the voter has 'Expertise > Threshold' without revealing who they are."
            },
            {
              icon: <Scale className="w-8 h-8 text-indigo-400" />,
              title: "Regulatory Ready",
              desc: "Enables selective disclosure for compliance while maintaining user privacy by default."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-midnight-950 p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};