import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Edit3, 
  RefreshCcw,
  Clock,
  Calendar,
  Grid
} from 'lucide-react';

/**
 * Design System: Modern Fintech Ledger
 * Spending Summary & Preview Component
 */

interface Transaction {
  id: number;
  description: string;
  category: string;
  amount: number;
  status: 'verified' | 'pending';
}

const SpendingSummary: React.FC = () => {
  const transactions: Transaction[] = [
    { id: 1, description: 'Organic Coffee Beans - 1kg', category: 'GROCERIES', amount: 32.50, status: 'verified' },
    { id: 2, description: 'Ergonomic Office Chair', category: 'EQUIPMENT', amount: 849.00, status: 'verified' },
    { id: 3, description: 'Cloud Subscription - Yearly', category: 'SOFTWARE', amount: 120.00, status: 'verified' },
  ];

  const sheetPreview = [
    { id: 1, ts: '2023-10-24 14:32', merchant: 'Starbucks 042', amount: 32.50, vat: 0.08, cat: 'CAT_GROC_01', acc: 'ACC_CORP_MAIN' },
    { id: 2, ts: '2023-10-24 14:35', merchant: 'Herman Miller Inc.', amount: 849.00, vat: 0.15, cat: 'CAT_EQUIP_05', acc: 'ACC_CORP_MAIN' },
    { id: 3, ts: '2023-10-24 14:40', merchant: 'AWS Cloud Srv', amount: 120.00, vat: 0.00, cat: 'CAT_SOFT_12', acc: 'ACC_CORP_MAIN' },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9ff] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Summary Header */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-[#1a73e8] rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2 block">Grand Total</span>
              <div className="text-6xl font-bold mb-8">$1,248.65</div>
              <div className="flex space-x-12">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1 block">Date</span>
                  <div className="text-xl font-medium">Oct 24, 2023</div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1 block">Time</span>
                  <div className="text-xl font-medium">14:32 PM</div>
                </div>
              </div>
            </div>
            {/* Background flourish */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </div>

          <div className="w-full lg:w-[400px] bg-[#f1f4fa] border border-[#d7dae0] rounded-3xl p-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-[#9370db] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-200">
              <RefreshCcw className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Ready to Sync</h2>
            <p className="text-[#44474e]">42 entries validated and categorized for your main ledger.</p>
          </div>
        </div>

        {/* Items Table */}
        <div>
          <div className="flex justify-between items-end mb-6 px-2">
            <h2 className="text-2xl font-bold">Items Bought</h2>
            <button className="text-[#1a73e8] text-sm font-bold flex items-center space-x-2 hover:underline">
              <Edit3 className="w-4 h-4" />
              <span>Edit Data</span>
            </button>
          </div>
          
          <div className="bg-white border border-[#d7dae0] rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-[#d7dae0]">
                <tr>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#44474e]">Description</th>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#44474e]">Category</th>
                  <th className="px-8 py-4 text-right text-[10px] font-bold uppercase tracking-widest text-[#44474e]">Amount</th>
                  <th className="px-8 py-4 text-center text-[10px] font-bold uppercase tracking-widest text-[#44474e]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d7dae0]">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-[#f8f9fa] transition-colors">
                    <td className="px-8 py-5 font-medium">{t.description}</td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                        t.category === 'GROCERIES' ? 'bg-green-100 text-green-700' :
                        t.category === 'EQUIPMENT' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {t.category}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-bold">${t.amount.toFixed(2)}</td>
                    <td className="px-8 py-5 text-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Google Sheets Preview Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 px-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <Grid className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Google Sheets Row Preview</h2>
          </div>

          <div className="bg-[#f1f4fa] border border-[#d7dae0] rounded-xl overflow-hidden">
            <div className="bg-[#e2e8f0] px-4 py-2 flex items-center space-x-2 border-b border-[#cbd5e1]">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c940]"></div>
              </div>
              <span className="text-[10px] font-medium text-[#64748b] ml-4">Sheet1 • Last synced 2m ago</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-[#475569] border-b border-[#cbd5e1]">
                    <th className="px-4 py-3 border-r border-[#cbd5e1] font-bold">#</th>
                    <th className="px-4 py-3 border-r border-[#cbd5e1] font-bold uppercase tracking-tighter">Timestamp</th>
                    <th className="px-4 py-3 border-r border-[#cbd5e1] font-bold uppercase tracking-tighter">Merchant</th>
                    <th className="px-4 py-3 border-r border-[#cbd5e1] font-bold uppercase tracking-tighter">Amount_USD</th>
                    <th className="px-4 py-3 border-r border-[#cbd5e1] font-bold uppercase tracking-tighter">VAT_Rate</th>
                    <th className="px-4 py-3 border-r border-[#cbd5e1] font-bold uppercase tracking-tighter">Category_ID</th>
                    <th className="px-4 py-3 font-bold uppercase tracking-tighter">Account_Ref</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {sheetPreview.map((row) => (
                    <tr key={row.id} className="border-b border-[#f1f4fa]">
                      <td className="px-4 py-3 border-r border-[#f1f4fa] bg-[#f8fafc] text-center text-[#94a3b8]">{row.id}</td>
                      <td className="px-4 py-3 border-r border-[#f1f4fa]">{row.ts}</td>
                      <td className="px-4 py-3 border-r border-[#f1f4fa]">{row.merchant}</td>
                      <td className="px-4 py-3 border-r border-[#f1f4fa] text-right font-mono">{row.amount.toFixed(2)}</td>
                      <td className="px-4 py-3 border-r border-[#f1f4fa] text-right font-mono">{row.vat.toFixed(2)}</td>
                      <td className="px-4 py-3 border-r border-[#f1f4fa]">{row.cat}</td>
                      <td className="px-4 py-3">{row.acc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center space-x-4 pt-8">
          <button className="bg-[#0b57d0] text-white px-10 py-4 rounded-full font-bold flex items-center space-x-3 hover:bg-[#0842a0] transition-all transform active:scale-95 shadow-lg shadow-blue-100">
            <RefreshCcw className="w-5 h-5" />
            <span>Confirm & Sync to Sheet</span>
          </button>
          <button className="px-10 py-4 border border-[#44474e] text-[#44474e] rounded-full font-bold hover:bg-[#f1f4fa] transition-all">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpendingSummary;
