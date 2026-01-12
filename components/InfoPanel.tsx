import React from 'react';
import { MapLocation } from '../types';
import { getIconComponent } from '../constants';
import { ChevronLeft, ChevronRight, Map as MapIcon } from 'lucide-react';

interface InfoPanelProps {
  location: MapLocation | null;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  isVisible: boolean;
  onToggle: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ 
    location, 
    onNext, 
    onPrev, 
    hasNext, 
    hasPrev, 
    isVisible, 
    onToggle 
}) => {

  // Collapsed State
  if (!isVisible) {
    return (
        <button 
            onClick={onToggle}
            className="absolute top-4 left-4 z-20 p-3 bg-slate-900/90 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-500 rounded-lg text-slate-300 hover:text-white shadow-xl transition-all duration-300 group"
            title="Show Panel"
        >
            <MapIcon size={24} className="group-hover:scale-110 transition-transform" />
        </button>
    );
  }

  // Expanded State - Intro View
  if (!location) {
    return (
      <div className="absolute top-4 left-4 z-10 w-80 md:w-96 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-6 rounded-xl shadow-2xl text-slate-300 animate-in fade-in slide-in-from-left-4 duration-300">
        <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold text-white font-mono">Mentale Karte: ERP Core</h1>
            <button 
                onClick={onToggle}
                className="p-1 hover:bg-slate-800 rounded-md transition-colors text-slate-500 hover:text-white"
            >
                <ChevronLeft size={20} />
            </button>
        </div>
        
        <p className="text-sm leading-relaxed mb-4">
          Vergiss die offiziellen Architektur-Diagramme im Wiki. Das hier ist die Realität.
        </p>
        <p className="text-sm leading-relaxed mb-6">
          Wenn ich die Augen schließe, sehe ich den Code nicht als Dateien, sondern als Orte. Manche sind hell und sicher, andere dunkel und gefährlich. Das hier ist meine Karte nach 5 Jahren "git blame" und unzähligen Hotfixes um 3 Uhr nachts.
        </p>
        <div className="space-y-3 mb-6 bg-slate-950/50 p-4 rounded-lg border border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                <span className="font-semibold">Der Westen (Legacy):</span>
                <span>Code, den wir fürchten.</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="font-semibold">Der Osten (Mindset):</span>
                <span>Wie wir überleben.</span>
            </div>
        </div>
        
        <div className="mt-6 flex justify-center">
            <button 
                onClick={onNext}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
                Start Onboarding
            </button>
        </div>
      </div>
    );
  }

  // Expanded State - Detail View
  return (
    <div className="absolute top-4 left-4 bottom-4 md:bottom-auto md:max-h-[90vh] z-10 w-[calc(100%-2rem)] md:w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700 flex flex-col rounded-xl shadow-2xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-left-4">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-800 bg-slate-950/50">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${location.type === 'DANGER' ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                    {getIconComponent(location.icon)}
                </div>
                <h2 className="text-xl font-bold text-white font-mono">{location.title}</h2>
            </div>
            <button 
                onClick={onToggle}
                className="p-1 hover:bg-slate-800 rounded-md transition-colors text-slate-500 hover:text-white"
            >
                <ChevronLeft size={20} />
            </button>
        </div>
        <p className={`text-sm font-medium ${location.type === 'DANGER' ? 'text-rose-400' : 'text-emerald-400'}`}>
            {location.type === 'DANGER' ? 'CRITICAL ZONE' : location.type}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
        <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
          {location.fullText}
        </p>
      </div>

      {/* Footer Navigation */}
      <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex justify-between items-center">
        <button 
          onClick={onPrev}
          disabled={!hasPrev}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            hasPrev 
              ? 'text-slate-300 hover:bg-slate-800 hover:text-white' 
              : 'text-slate-600 cursor-not-allowed'
          }`}
        >
          Zurück
        </button>
        
        <button 
          onClick={onNext}
          disabled={!hasNext}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            hasNext 
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg' 
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default InfoPanel;