import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Bell, 
  User, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Utensils,
  Home,
  Car,
  CloudLightning,
  ShoppingCart,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  RefreshCcw,
  Sparkles,
  Calculator
} from 'lucide-react';

/**
 * Design System: Modern Fintech Ledger
 * Screen: Budget Comparison View
 */

const Layout: React.FC<{ children: React.ReactNode; activeTab: string }> = ({ children, activeTab }) => (
  <div className="min-h-screen bg-[#f7f9ff] font-['Hanken_Grotesk',sans-serif] text-[#1a1c1e]">
    <nav className="sticky top-0 z-50 w-full h-16 bg-white border-b border-[#d7dae0] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <div className="text-2xl font-bold text-[#1a73e8]">FinTrack Pro</div>
        <div className="flex items-center space-x-8">
          {['Upload', 'Summary', 'Budget', 'Sheets'].map((tab) => (
            <a 
              key={tab} 
              href="#" 
              className={`pb-1 font-bold transition-colors ${
                activeTab === tab 
                  ? 'text-[#1a73e8] border-b-2 border-[#1a73e8]' 
                  : 'text-[#44474e] font-medium hover:text-[#1a73e8]'
              }`}
            >
              {tab}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative group hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#44474e]" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="pl-10 pr-4 py-2 bg-[#f1f4fa] border-none rounded-full text-sm focus:ring-2 focus:ring-[#1a73e8] w-64 transition-all"
            />
          </div>
          <Bell className="w-5 h-5 text-[#44474e] cursor-pointer" />
          <User className="w-6 h-6 text-[#44474e] cursor-pointer" />
        </div>
      </div>
    </nav>
    <main className="max-w-7xl mx-auto px-6 py-8">
      {children}
    </main>
    <footer className="mt-auto w-full py-6 bg-[#f1f4fa] border-t border-[#d7dae0]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#44474e] font-bold uppercase tracking-widest">
        <p>© 2024 FinTrack Pro. All data synced to Google Sheets.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Help Center</a>
        </div>
      </div>
    </footer>
  </div>
);

const BudgetComparisonView: React.FC = () => {
  const categories = [
    { name: 'Food & Dining', spent: 1240, budget: 1500, icon: <Utensils className="w-4 h-4" />, color: 'bg-blue-600' },
    { name: 'Housing', spent: 2100, budget: 2100, icon: <Home className="w-4 h-4" />, color: 'bg-indigo-600' },
    { name: 'Transport', spent: 450, budget: 800, icon: <Car className="w-4 h-4" />, color: 'bg-green-600' },
  ];

  const transactions = [
    { date: 'Oct 24, 2024', desc: 'Whole Foods Market', sub: 'Groceries & Household', cat: 'FOOD', status: 'Verified', amount: -124.50, icon: <ShoppingCart className="w-5 h-5 text-blue-600" /> },
    { date: 'Oct 23, 2024', desc: 'Pacific Gas & Electric', sub: 'Utilities', cat: 'HOME', status: 'Verified', amount: -89.20, icon: <CloudLightning className="w-5 h-5 text-purple-600" /> },
    { date: 'Oct 22, 2024', desc: 'Apple Store Online', sub: 'Electronics', cat: 'TECH', status: 'Pending', amount: -1199.00, icon: <Smartphone className="w-5 h-5 text-red-600" />, alert: true },
  ];

  return (
    <Layout activeTab="Budget">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Monthly Budget Progress Card */}
        <div className="lg:col-span-2 bg-white border border-[#d7dae0] rounded-3xl p-8 relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Monthly Budget Progress</h2>
              <p className="text-[#44474e]">Visualization of your spending against the current month's limits.</p>
            </div>
            <div className="w-16 h-16 bg-[#f1f4fa] rounded-2xl flex items-center justify-center">
              <Calculator className="w-8 h-8 text-[#d7dae0]" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#44474e]">Current Spending</span>
              <div className="text-5xl font-extrabold">$4,280.50</div>
            </div>
            <div className="text-right space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#44474e]">Monthly Budget</span>
              <div className="text-5xl font-extrabold text-[#9370db]">$6,000.00</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-4 bg-[#f1f4fa] rounded-full mb-8 overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-[#9370db] rounded-full" style={{ width: '71.3%' }}></div>
            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-white z-10">71.3%</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#f1f4fa]">
            {[
              { label: 'Remaining', val: '$1,719.50', color: 'text-green-600' },
              { label: 'Days Left', val: '9 Days', color: 'text-black' },
              { label: 'Avg. Per Day', val: '$142.68', color: 'text-black' }
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#44474e] block mb-1">{stat.label}</span>
                <div className={`text-xl font-bold ${stat.color}`}>{stat.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories Sidebar */}
        <div className="bg-white border border-[#d7dae0] rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Top Categories</h3>
          <div className="space-y-6 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="text-[#1a73e8]">{cat.icon}</div>
                    <span className="font-bold">{cat.name}</span>
                  </div>
                  <span className="font-bold text-[#44474e]">${cat.spent.toLocaleString()}</span>
                </div>
                <div className="w-full h-1.5 bg-[#f1f4fa] rounded-full overflow-hidden">
                  <div className={`h-full ${cat.color}`} style={{ width: `${(cat.spent / cat.budget) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 border border-[#d7dae0] rounded-xl font-bold hover:bg-[#f1f4fa] transition-colors">
            View All Categories
          </button>
        </div>
      </div>

      {/* Transactions Table Section */}
      <div className="bg-white border border-[#d7dae0] rounded-3xl overflow-hidden shadow-sm">
        <div className="p-8 border-b border-[#f1f4fa] flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-1">Recent Transactions</h3>
            <p className="text-sm text-[#44474e]">Live sync from Google Sheets (Last update: 2 mins ago)</p>
          </div>
          <button className="bg-[#1a73e8] text-white px-6 py-2.5 rounded-xl font-bold flex items-center space-x-2 hover:bg-[#0842a0] transition-all">
            <RefreshCcw className="w-4 h-4" />
            <span>Sync Sheet</span>
          </button>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold uppercase tracking-widest text-[#44474e] border-b border-[#f1f4fa]">
              <th className="px-8 py-4">Date</th>
              <th className="px-8 py-4">Description</th>
              <th className="px-8 py-4">Category</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f4fa]">
            {transactions.map((tx, i) => (
              <tr key={i} className="hover:bg-[#f8f9fa] transition-colors group">
                <td className="px-8 py-5 text-sm font-medium">{tx.date}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#f1f4fa] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      {tx.icon}
                    </div>
                    <div>
                      <div className="font-bold">{tx.desc}</div>
                      <div className="text-xs text-[#44474e]">{tx.sub}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-[10px] font-bold px-3 py-1 bg-[#f1f4fa] rounded-full text-[#44474e]">
                    {tx.cat}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center space-x-2">
                    {tx.status === 'Verified' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <RefreshCcw className="w-4 h-4 text-[#44474e] animate-spin-slow" />
                    )}
                    <span className={`text-sm font-bold ${tx.status === 'Verified' ? 'text-green-700' : 'italic text-[#44474e]'}`}>
                      {tx.status}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-5 text-right font-bold text-sm">
                  {tx.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 bg-[#f1f4fa]/50 flex justify-between items-center">
           <div className="flex items-center space-x-4">
             <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
               <Sparkles className="w-5 h-5 text-green-600" />
             </div>
             <div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-[#44474e]">Budget Remaining</div>
               <div className="text-lg font-bold text-green-700">$1,719.50</div>
             </div>
           </div>
           <div className="flex space-x-2">
             <button className="p-2 border border-[#d7dae0] rounded-lg hover:bg-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
             <button className="p-2 border border-[#d7dae0] rounded-lg hover:bg-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
           </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#0b57d0] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
        <Plus className="w-8 h-8" />
      </button>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gradient-to-br from-[#9370db] to-[#7b68ee] p-1 rounded-3xl shadow-lg">
          <div className="bg-white/10 backdrop-blur-md rounded-[22px] p-8 h-full flex items-center space-x-6">
            <div className="w-20 h-20 bg-black/20 rounded-2xl overflow-hidden flex-shrink-0">
               {/* Placeholder for calc icon or graphic */}
               <div className="w-full h-full flex items-center justify-center text-white/50"><Calculator className="w-10 h-10" /></div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Smart Saving Tip</h4>
              <p className="text-white/80">Based on your trend, you can save $400 more this month by reducing 'Dining Out' for the next 7 days.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#d7dae0] rounded-3xl p-8 flex items-center space-x-6 shadow-sm">
          <div className="w-16 h-16 bg-[#f1f4fa] rounded-2xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-8 h-8 text-[#1a73e8]" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Auto-Categorization</h4>
            <p className="text-[#44474e]">Our AI improved category accuracy by 12% this month after syncing with your Google Sheets history.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetComparisonView;
