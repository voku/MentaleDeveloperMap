import React, { useState, useCallback, useEffect } from 'react';
import CityMap from './components/CityMap';
import InfoPanel from './components/InfoPanel';
import { MapLocation } from './types';
import { Language, getTranslatedLocationData } from './translations';

function App() {
  // Initialize language from localStorage or default to German
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('mentalemap-language');
    return (saved === 'en' || saved === 'de') ? saved : 'de';
  });
  
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  
  // Get translated location data based on current language
  const CITY_DATA = getTranslatedLocationData(language);
  
  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('mentalemap-language', language);
  }, [language]);
  
  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  }, []);

  const activeLocation = activeLocationId 
    ? CITY_DATA.find(l => l.id === activeLocationId) || null 
    : null;

  const handleSelect = useCallback((location: MapLocation) => {
    setActiveLocationId(location.id);
    // Optional: Open panel when a location is clicked if it was closed
    setIsPanelOpen(true);
  }, []);

  const handleNext = useCallback(() => {
    if (!activeLocationId) {
        setActiveLocationId(CITY_DATA[0].id);
        return;
    }
    const currentIndex = CITY_DATA.findIndex(l => l.id === activeLocationId);
    if (currentIndex < CITY_DATA.length - 1) {
      setActiveLocationId(CITY_DATA[currentIndex + 1].id);
    }
  }, [activeLocationId]);

  const handlePrev = useCallback(() => {
    if (!activeLocationId) return;
    const currentIndex = CITY_DATA.findIndex(l => l.id === activeLocationId);
    if (currentIndex > 0) {
      setActiveLocationId(CITY_DATA[currentIndex - 1].id);
    }
  }, [activeLocationId]);

  // Determine navigation state
  const currentIndex = activeLocationId ? CITY_DATA.findIndex(l => l.id === activeLocationId) : -1;
  const hasNext = currentIndex < CITY_DATA.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <div className="w-screen h-screen bg-slate-950 flex overflow-hidden">
      {/* Interactive Map Area */}
      <div className="flex-1 relative">
        <CityMap 
          activeLocation={activeLocation} 
          onSelect={handleSelect} 
          isPanelOpen={isPanelOpen}
          locations={CITY_DATA}
        />
        
        {/* Info Panel Overlay */}
        <InfoPanel 
            location={activeLocation}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={hasNext}
            hasPrev={hasPrev}
            isVisible={isPanelOpen}
            onToggle={() => setIsPanelOpen(!isPanelOpen)}
            language={language}
            onLanguageToggle={toggleLanguage}
        />
      </div>
    </div>
  );
}

export default App;