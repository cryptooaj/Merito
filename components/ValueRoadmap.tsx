import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Check, DollarSign, Calendar } from 'lucide-react';
import { BudgetItem } from '../types';

const data: BudgetItem[] = [
  { name: 'Milestone 1', value: 3000, description: 'Research & SDK' },
  { name: 'Milestone 2', value: 3000, description: 'Compact Contract' },
  { name: 'Milestone 3', value: 3000, description: 'UI & Integration' },
];

const COLORS = ['#6366f1', '#818cf8', '#a5b4fc'];

export const ValueRoadmap: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">
      
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          High ROI Justification: $9,000 USDM for Foundational Governance
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          A highly efficient investment for foundational governance infrastructure.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Value Props */}
        <div className="space-y-8">
           <h3 className="text-2xl font-bold text-white">Why this is a strategic buy for Midnight</h3>
           <ul className="space-y-6">
             {[
               "Funds a 3-month, full-time commitment from 2 senior engineers.",
               "Produces a foundational, reusable asset (SDK + Contract) that solves a global Web3 problem.",
               "Directly showcases Midnight's unique value proposition (Private State) to the wider dev community.",
               "Cost-effective delivery at industry-standard rates for specialized ZK development."
             ].map((item, idx) => (
               <li key={idx} className="flex gap-4">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                   <DollarSign size={16} className="text-green-400" />
                 </div>
                 <p className="text-gray-300 text-lg">{item}</p>
               </li>
             ))}
           </ul>
        </div>

        {/* Right: Chart */}
        <div className="bg-midnight-900 rounded-2xl p-8 border border-white/5 flex flex-col items-center">
          <h3 className="text-xl font-bold text-white mb-4">Budget Allocation</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center w-full">
            {data.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full mb-2" style={{ backgroundColor: COLORS[idx] }}></div>
                <span className="text-xs text-gray-400">{item.name}</span>
                <span className="text-sm font-bold text-white">${item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Breakdown */}
      <div className="relative border-l-2 border-indigo-900 pl-8 space-y-12 ml-4 lg:ml-0">
         {[
           {
             name: "Milestone 1",
             cost: "$3,000 USDM (33.33%)",
             desc: "Deliverable: TypeScript SDK Setup & ZK Circuit Definition. Local proof generation logic complete."
           },
           {
             name: "Milestone 2",
             cost: "$3,000 USDM (33.33%)",
             desc: "Deliverable: Compact Contract Implementation. On-chain verification logic and weighting engine deployed to Testnet."
           },
           {
             name: "Milestone 3",
             cost: "$3,000 USDM (33.33%)",
             desc: "Deliverable: Final Integration & Open Source Release. Full UI PoC connected to SDK, end-to-end documentation."
           }
         ].map((ms, idx) => (
           <div key={idx} className="relative">
             <div className="absolute -left-[41px] bg-midnight-950 border-4 border-indigo-600 w-6 h-6 rounded-full"></div>
             <h4 className="text-xl font-bold text-white flex items-center gap-3">
               {ms.name} 
               <span className="text-sm font-normal text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded border border-indigo-400/20">{ms.cost}</span>
             </h4>
             <p className="mt-2 text-gray-400 text-lg">{ms.desc}</p>
           </div>
         ))}
      </div>

      <div className="bg-indigo-900/20 rounded-xl p-8 border border-indigo-500/30 text-center mt-12">
        <p className="text-xl text-indigo-200 font-semibold italic">
          "We are committed to verifiable delivery. Every line of code funded by this proposal will be open-sourced to accelerate the Midnight ecosystem."
        </p>
      </div>

    </div>
  );
};