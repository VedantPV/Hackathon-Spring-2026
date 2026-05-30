import React from 'react';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  ChevronRight, 
  Lock,
  ArrowRight,
  Sparkles
} from 'lucide-react';

/**
 * Design System: Modern Fintech Ledger
 * Component: Sheet Access Modal (Overlay)
 */

interface SheetAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewSheet: () => void;
}

const SheetAccessModal: React.FC<SheetAccessModalProps> = ({ 
  isOpen = true, 
  onClose, 
  onViewSheet 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1a1c1e]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Content Section */}
        <div className="p-10 text-center flex flex-col items-center">
          
          {/* Animated Icon Container */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-[#c2e7ff] rounded-[24px] flex items-center justify-center relative z-10 animate-pulse">
              <FileSpreadsheet className="w-10 h-10 text-[#001d35]" />
            </div>
            {/* Background elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shadow-sm z-20">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="absolute inset-0 bg-[#c2e7ff] rounded-[24px] blur-xl opacity-50 scale-125"></div>
          </div>

          <h2 className="text-4xl font-extrabold text-[#1a1c1e] mb-4">Sync Complete!</h2>
          <p className="text-lg text-[#44474e] leading-relaxed max-w-sm mb-10">
            Would you like to open your Google Sheet to view the live data?
          </p>

          <div className="w-full space-y-4">
            <button 
              onClick={onViewSheet}
              className="w-full py-4 px-8 bg-[#0b57d0] text-white rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-[#0842a0] transition-all transform active:scale-[0.98] shadow-lg shadow-blue-200"
            >
              <span>View Sheet</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={onClose}
              className="w-full py-4 px-8 border-2 border-[#d7dae0] text-[#44474e] rounded-2xl font-bold text-lg hover:bg-[#f1f4fa] transition-all"
            >
              Maybe Later
            </button>
          </div>
        </div>

        {/* Security Footer */}
        <div className="bg-[#f1f4fa] py-4 px-8 border-t border-[#d7dae0] flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-[#44474e]">
          <Lock className="w-3 h-3" />
          <span>Encrypted connection active</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Example Usage Wrapper 
 * (Demonstrates the modal over the existing Budget Comparison View context)
 */
const ModalPreviewWrapper: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Content (Blurred representation of the app) */}
      <div className="blur-md pointer-events-none p-12">
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="h-12 w-48 bg-gray-200 rounded-full mb-12"></div>
            <div className="h-64 bg-gray-100 rounded-3xl"></div>
            <div className="grid grid-cols-3 gap-6">
                <div className="h-32 bg-gray-100 rounded-2xl"></div>
                <div className="h-32 bg-gray-100 rounded-2xl"></div>
                <div className="h-32 bg-gray-100 rounded-2xl"></div>
            </div>
        </div>
      </div>
      
      {/* The Modal */}
      <SheetAccessModal 
        isOpen={true} 
        onClose={() => {}} 
        onViewSheet={() => {}} 
      />
    </div>
  );
};

export default SheetAccessModal;
