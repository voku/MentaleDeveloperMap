export enum LocationType {
  DISTRICT = 'DISTRICT',
  LANDMARK = 'LANDMARK',
  ROAD = 'ROAD',
  DANGER = 'DANGER'
}

export interface MapLocation {
  id: string;
  title: string;
  description: string;
  fullText: string;
  x: number; // 0-100 coordinate system
  y: number; // 0-100 coordinate system
  type: LocationType;
  connections: string[]; // IDs of connected locations
  icon?: string;
}

export interface MapData {
  locations: MapLocation[];
}