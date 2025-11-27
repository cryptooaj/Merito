import React from 'react';
import { Folder, File, Terminal, Code, Cpu } from 'lucide-react';

export const CodeDocs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Developer Hub & Deliverables
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          We are delivering a production-ready, open-source foundation for private governance.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Repo Structure */}
        <div className="bg-midnight-900 rounded-xl border border-white/10 p-6 overflow-hidden">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Folder className="text-indigo-400" /> Repository Structure
          </h3>
          <div className="font-mono text-sm space-y-3 text-gray-300">
            <div className="flex items-center gap-2"><Folder size={16} className="text-blue-400"/> merito-core/</div>
            <div className="pl-6 flex items-center gap-2"><Folder size={16} className="text-yellow-400"/> compact/</div>
            <div className="pl-12 flex items-center gap-2"><File size={16} className="text-gray-500"/> MeritoWeightingEngine.compact</div>
            <div className="pl-12 flex items-center gap-2"><File size={16} className="text-gray-500"/> GovernanceState.compact</div>
            <div className="pl-6 flex items-center gap-2"><Folder size={16} className="text-blue-400"/> sdk-ts/</div>
            <div className="pl-12 flex items-center gap-2"><File size={16} className="text-indigo-300"/> prover-client.ts</div>
            <div className="pl-12 flex items-center gap-2"><File size={16} className="text-indigo-300"/> circuit-types.ts</div>
            <div className="pl-6 flex items-center gap-2"><Folder size={16} className="text-green-400"/> ui-poc/</div>
            <div className="pl-12 flex items-center gap-2"><File size={16} className="text-gray-500"/> VoteDashboard.tsx</div>
            <div className="pl-6 flex items-center gap-2"><File size={16} className="text-red-400"/> tests/</div>
            <div className="pl-12 flex items-center gap-2"><File size={16} className="text-gray-500"/> integration.test.ts</div>
          </div>
        </div>

        {/* SDK Features */}
        <div className="space-y-8">
          <div className="bg-midnight-800 p-6 rounded-xl border border-indigo-500/20">
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <Terminal className="text-indigo-400" /> TypeScript SDK Utility
             </h3>
             <p className="text-gray-400 mb-4">
               The SDK lowers the barrier to entry for Midnight developers. It abstracts the complexity of ZK circuit compilation and proof generation into simple async function calls.
             </p>
             <code className="block bg-black/50 p-3 rounded text-xs text-indigo-300 font-mono">
               await merito.generateProof(credential, voteChoice);
             </code>
          </div>

          <div className="bg-midnight-800 p-6 rounded-xl border border-indigo-500/20">
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <Cpu className="text-indigo-400" /> Verification & Testing
             </h3>
             <p className="text-gray-400">
               We include a comprehensive test suite. This ensures the Compact contract correctly rejects invalid proofs (e.g., double voting, invalid VCs) and accepts valid ones, verified via automated CI/CD pipelines.
             </p>
          </div>
        </div>
      </div>

      {/* Extension Points */}
      <div className="bg-midnight-950/50 rounded-2xl p-8 border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Code className="text-indigo-500" /> Extension Points
        </h3>
        <p className="text-gray-400 mb-6">Designed for reuse. Developers can fork our codebase to:</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-midnight-900 rounded-lg">
             <div className="font-bold text-white mb-2">Modify Logic</div>
             <p className="text-sm text-gray-500">Alter the Meritocratic Formula to weight votes based on token holding duration rather than credentials.</p>
          </div>
          <div className="p-4 bg-midnight-900 rounded-lg">
             <div className="font-bold text-white mb-2">Identity Swaps</div>
             <p className="text-sm text-gray-500">Substitute the DID identity scheme to support different credential issuers or ID standards.</p>
          </div>
          <div className="p-4 bg-midnight-900 rounded-lg">
             <div className="font-bold text-white mb-2">Private Whitelisting</div>
             <p className="text-sm text-gray-500">Reuse the ZK circuit to create private access-gated communities (whitelists) instead of voting.</p>
          </div>
        </div>
      </div>
    </div>
  );
};