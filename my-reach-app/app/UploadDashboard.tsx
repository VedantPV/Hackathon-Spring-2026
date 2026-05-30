"use client";
import React, { useRef } from 'react';
import { 
  Upload, 
  Camera, 
  Link2, 
  Bell, 
  User, 
  FileText, 
  Image as ImageIcon, 
  CheckCircle,
  Info
} from 'lucide-react';

import axios from "axios"
import { useState } from 'react';
/**
 * Design System: Modern Fintech Ledger
 * Primary Color: #1a73e8
 * Background: #f7f9ff
 */




const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#f7f9ff] font-['Hanken_Grotesk',sans-serif] text-[#1a1c1e]">
    {/* Navigation */}
    <nav className="sticky top-0 z-50 w-full h-16 bg-white border-b border-[#d7dae0] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <div className="text-2xl font-bold text-[#1a73e8]">FinTrack Pro</div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-[#1a73e8] border-b-2 border-[#1a73e8] pb-1 font-bold">Upload</a>
          <a href="#" className="text-[#44474e] font-medium hover:text-[#1a73e8] transition-colors">Summary</a>
          <a href="#" className="text-[#44474e] font-medium hover:text-[#1a73e8] transition-colors">Budget</a>
          <a href="#" className="text-[#44474e] font-medium hover:text-[#1a73e8] transition-colors">Sheets</a>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-[#44474e] cursor-pointer" />
          <User className="w-6 h-6 text-[#44474e] cursor-pointer" />
        </div>
      </div>
    </nav>
    <main className="max-w-7xl mx-auto px-6 py-8">
      {children}
    </main>
    {/* Footer */}
    <footer className="mt-auto w-full py-6 bg-[#f1f4fa] border-t border-[#d7dae0]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#44474e] uppercase tracking-wider">
        <p>© 2026 FinTrack Pro. All data synced to Google Sheets.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Help Center</a>
        </div>
      </div>
    </footer>
  </div>
);

const UploadDashboard: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileButton = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event : React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0){
            console.log("File is: ", files);
        }
        console.log("Now processing file");
        
        var sheetData = await axios.post("http://localhost:9001/upload-sheet", {file: files});
        
        //Process the file in the backend and update the frontend with necessary info.

    };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Upload Transactions</h1>
        <p className="text-[#44474e]">Import your financial data and let AI do the heavy lifting.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Upload Zone */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border-2 border-dashed border-[#d7dae0] rounded-2xl p-12 flex flex-col items-center justify-center text-center transition-all hover:border-[#1a73e8] hover:bg-[#f1f4fa]">
            <div className="w-16 h-16 bg-[#d3e3fd] rounded-full flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-[#0b57d0]" />
            </div>
            <h2 className="text-xl font-bold mb-2">Drag and drop statement files</h2>
            <p className="text-[#44474e] max-w-sm mb-8">
              Supported formats: CSV, Excel (.xlsx), or PDF. Maximum file size 10MB per upload.
            </p>
            <input
            type='file'
            ref={fileInputRef}
            onChange={handleFileChange}
            className='hidden'>
            </input>
            <button onClick={handleFileButton} className="bg-[#0b57d0] text-white px-8 py-3 rounded-lg font-bold flex items-center space-x-2 hover:bg-[#0842a0] transition-colors">
              <Link2 className="w-4 h-4 transform rotate-45" />
              <span>Select Files</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-[#d7dae0] shadow-sm">
              <div className="w-10 h-10 bg-[#c2e7ff] rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-[#001d35]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Upload Receipt Photo</h3>
              <p className="text-[#44474e] text-sm mb-6">
                Capture or upload images of your physical receipts for instant AI OCR processing.
              </p>
              <button className="w-full py-2.5 border border-[#1a73e8] text-[#1a73e8] rounded-lg font-bold hover:bg-[#f1f4fa] transition-colors">
                Capture Receipt
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#d7dae0] shadow-sm">
              <div className="w-10 h-10 bg-[#f8f9fa] border border-[#d7dae0] rounded-lg flex items-center justify-center mb-4">
                <Link2 className="w-6 h-6 text-[#1f1f1f]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Bank Sync</h3>
              <p className="text-[#44474e] text-sm mb-6">
                Securely connect your bank account for real-time transaction updates and tagging.
              </p>
              <button className="w-full py-2.5 border border-[#1a73e8] text-[#1a73e8] rounded-lg font-bold hover:bg-[#f1f4fa] transition-colors">
                Link Account
              </button>
              <input accept=".csv,.xlsx,.xls,.pdf" id="file-input" type="file"></input>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-[#d7dae0] shadow-sm">
            <h3 className="text-lg font-bold mb-6">How it works</h3>
            <div className="space-y-8">
              {[
                { step: 1, title: 'Drag & Drop', desc: 'Simply upload your bank statements or receipt images into the secure zone.' },
                { step: 2, title: 'AI Processing', desc: 'Our AI categorizes your spending, detects tax-deductible items, and formats everything.' },
                { step: 3, title: 'Sync to Sheets', desc: 'Review the data and sync it directly to your "FinTrack Master" Google Sheet.' }
              ].map((item) => (
                <div key={item.step} className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0b57d0] text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-[#44474e] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-[#f1f4fa] rounded-xl border border-[#d3e3fd] flex items-start space-x-3 text-xs text-[#0b57d0]">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-1">Secure Environment</span>
                Your data is encrypted with 256-bit SSL protocols and stored locally until you approve the cloud sync.
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d7dae0] shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#44474e] mb-4">Recent Uploads</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-[#0b57d0]" />
                  <div>
                    <p className="text-sm font-bold">Chase_Stmt_Oct.csv</p>
                    <p className="text-xs text-[#44474e]">Uploaded 2h ago</p>
                  </div>
                </div>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ImageIcon className="w-5 h-5 text-[#0b57d0]" />
                  <div>
                    <p className="text-sm font-bold">Receipt_Lunch.jpg</p>
                    <p className="text-xs text-[#44474e]">Uploaded 4h ago</p>
                  </div>
                </div>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Feature Banner */}
      <div className="mt-12 p-8 rounded-3xl bg-[#d3e3fd] relative overflow-hidden flex items-center">
        <div className="relative z-10 max-w-xl">
          <span className="bg-[#0b57d0] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            New Feature
          </span>
          <h2 className="text-4xl font-bold mb-4">Intelligent Tax Extraction</h2>
          <p className="text-[#44474e] mb-8 leading-relaxed">
            Our new OCR engine automatically flags business expenses that are eligible for tax write-offs, 
            saving you an average of $2,400 per year.
          </p>
          <button className="bg-[#0b57d0] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0842a0] transition-colors shadow-md">
            Learn more
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 backdrop-blur-sm pointer-events-none" 
             style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}></div>
      </div>
    </Layout>
  );
};

export default UploadDashboard;
