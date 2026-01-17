import React, { useMemo } from 'react';
import { getIconComponent } from '../constants';
import { MapLocation, LocationType } from '../types';

interface CityMapProps {
  activeLocation: MapLocation | null;
  onSelect: (location: MapLocation) => void;
  isPanelOpen: boolean;
  locations: MapLocation[];
}

const CityMap: React.FC<CityMapProps> = ({ activeLocation, onSelect, isPanelOpen, locations }) => {
  const CITY_DATA = locations;
  // CONFIGURATION
  // We widen the viewBox to 1400 to account for the sidebar
  const viewBoxWidth = 1400;
  const viewBoxHeight = 900;
  
  // Dynamic Shift: 
  // 350 pushes it right to make room for panel. 
  // 250 centers it roughly (1400 width - ~900 map width) / 2
  const shiftX = isPanelOpen ? 350 : 250; 
  const shiftY = 50;
  const scale = 9;

  // Calculate paths once
  const paths = useMemo(() => {
    const lines: { start: MapLocation; end: MapLocation; id: string }[] = [];
    const processed = new Set<string>();

    CITY_DATA.forEach(loc => {
      loc.connections.forEach(targetId => {
        const target = CITY_DATA.find(t => t.id === targetId);
        if (target) {
          // Create a unique ID for the connection regardless of direction
          const pathId = [loc.id, target.id].sort().join('-');
          if (!processed.has(pathId)) {
            lines.push({ start: loc, end: target, id: pathId });
            processed.add(pathId);
          }
        }
      });
    });
    return lines;
  }, []);

  // Helper to render distinct shapes based on type
  const renderNodeShape = (loc: MapLocation, size: number, color: string, stroke: string, isActive: boolean) => {
    const cx = loc.x * scale;
    const cy = loc.y * scale;
    
    // Add glowing filter style for active/special nodes
    const glowStyle = isActive ? { filter: `drop-shadow(0 0 15px ${stroke})` } : {};

    switch (loc.type) {
        case LocationType.LANDMARK:
            // Hexagon for Landmarks (Stable, Heavy)
            const r = size * 1.2;
            const hexPoints = [];
            for (let i = 0; i < 6; i++) {
                const angle = (i * 60 - 30) * Math.PI / 180;
                hexPoints.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
            }
            return (
                <polygon 
                    points={hexPoints.join(' ')} 
                    fill={color} 
                    stroke={stroke} 
                    strokeWidth={isActive ? 4 : 2}
                    className="transition-all duration-300"
                    style={glowStyle}
                />
            );

        case LocationType.DANGER:
            // Triangle for Danger/Legacy (Sharp, Warning)
            const tr = size * 1.3;
            // Pointing down/up slightly distinctive
            const tPoints = [
                `${cx},${cy - tr}`, // Top
                `${cx + tr * 0.866},${cy + tr * 0.5}`, // Bottom Right
                `${cx - tr * 0.866},${cy + tr * 0.5}`  // Bottom Left
            ];
            return (
                <polygon 
                    points={tPoints.join(' ')} 
                    fill={color} 
                    stroke={stroke} 
                    strokeWidth={isActive ? 4 : 2}
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                    style={glowStyle}
                />
            );
        
        case LocationType.ROAD:
            // Diamond/Square rotated for Utilities/Roads
            const sq = size * 0.8;
            return (
                <rect 
                    x={cx - sq} y={cy - sq} 
                    width={sq * 2} height={sq * 2} 
                    transform={`rotate(45 ${cx} ${cy})`}
                    fill={color} 
                    stroke={stroke} 
                    strokeWidth={isActive ? 3 : 2}
                    className="transition-all duration-300"
                    style={glowStyle}
                />
            );

        case LocationType.DISTRICT:
        default:
            // Circle for Districts (Area, Zone)
            return (
                <circle
                    cx={cx}
                    cy={cy}
                    r={size}
                    fill={color}
                    stroke={stroke}
                    strokeWidth={isActive ? 4 : 2}
                    className="transition-all duration-300"
                    style={glowStyle}
                />
            );
    }
  };

  return (
    <div className="w-full h-full bg-slate-900 relative overflow-hidden">
      {/* Grid Background Effect */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: `radial-gradient(#334155 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
        }}
      />
      
      {/* Deep Background Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.08)_0%,rgba(15,23,42,1)_100%)]" />

      <svg 
        className="w-full h-full transition-all duration-700 ease-in-out"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <g transform={`translate(${shiftX}, ${shiftY})`} className="transition-transform duration-700 ease-in-out">
          
          {/* Connection Lines */}
          {paths.map((path) => {
            const isActive = activeLocation && (path.start.id === activeLocation.id || path.end.id === activeLocation.id);
            const isDangerConnection = path.start.type === LocationType.DANGER || path.end.type === LocationType.DANGER;
            
            return (
              <line
                key={path.id}
                x1={path.start.x * scale}
                y1={path.start.y * scale}
                x2={path.end.x * scale}
                y2={path.end.y * scale}
                stroke={isActive ? '#10b981' : (isDangerConnection ? '#475569' : '#334155')}
                strokeWidth={isActive ? 3 : 2}
                strokeDasharray={isDangerConnection ? "6,4" : "none"}
                className="transition-all duration-500 ease-in-out opacity-60"
              />
            );
          })}

          {/* Location Nodes */}
          {CITY_DATA.map((loc) => {
            const isActive = activeLocation?.id === loc.id;
            const isDanger = loc.type === LocationType.DANGER;
            
            // Color Logic
            let fillColor = '#0f172a'; // Dark background
            let strokeColor = '#64748b'; // Default slate
            let iconColor = '#94a3b8'; // Light slate

            if (isActive) {
                if (isDanger) {
                    fillColor = '#4c0519'; // deep rose
                    strokeColor = '#f43f5e'; // bright rose
                    iconColor = '#fca5a5';
                } else {
                    fillColor = '#064e3b'; // deep emerald
                    strokeColor = '#34d399'; // bright emerald
                    iconColor = '#a7f3d0';
                }
            } else {
                 if (isDanger) {
                    strokeColor = '#be123c'; // mute rose
                    iconColor = '#fda4af';
                 } else if (loc.type === LocationType.LANDMARK) {
                    strokeColor = '#3b82f6'; // blueish for landmarks
                    iconColor = '#93c5fd';
                 } else if (loc.type === LocationType.ROAD) {
                     strokeColor = '#a8a29e';
                 }
            }

            const size = loc.type === LocationType.DISTRICT ? 45 : (loc.type === LocationType.LANDMARK ? 35 : 28);

            return (
              <g 
                key={loc.id} 
                className="cursor-pointer group"
                onClick={() => onSelect(loc)}
              >
                {/* Ping Animation for Active Node */}
                {isActive && (
                    <circle
                        cx={loc.x * scale}
                        cy={loc.y * scale}
                        r={size * 1.5}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth="1"
                        className="animate-ping opacity-50"
                    />
                )}

                {/* Main Shape */}
                {renderNodeShape(loc, size, fillColor, strokeColor, isActive)}

                {/* Icon Rendering via ForeignObject */}
                <foreignObject 
                    x={(loc.x * scale) - (size/2)} 
                    y={(loc.y * scale) - (size/2)} 
                    width={size} 
                    height={size}
                    className="pointer-events-none"
                    style={{ overflow: 'visible' }}
                >
                    <div 
                        className="flex justify-center items-center w-full h-full transition-colors duration-300"
                        style={{ color: iconColor }}
                    >
                        {getIconComponent(loc.icon)}
                    </div>
                </foreignObject>

                {/* Floating Label (Visible on Hover or Active) */}
                <foreignObject
                    x={(loc.x * scale) - 100} 
                    y={(loc.y * scale) + size + 10}
                    width={200}
                    height={40}
                    className={`transition-all duration-300 pointer-events-none ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}
                >
                    <div className="flex justify-center w-full">
                        <span className={`bg-slate-950/90 text-[10px] font-mono font-bold px-3 py-1.5 rounded border shadow-xl whitespace-nowrap ${isActive ? 'border-emerald-500/50 text-emerald-300' : 'border-slate-700 text-slate-300'}`}>
                            {loc.title}
                        </span>
                    </div>
                </foreignObject>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default CityMap;