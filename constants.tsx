import { LocationType, MapLocation } from './types';
import { 
  Server, 
  Database, 
  Banknote, 
  Ghost, 
  Plug, 
  Layers, 
  Wand2, 
  AlertTriangle, 
  GitMerge, 
  Footprints, 
  Milestone, 
  Brain, 
  Eye, 
  Network
} from 'lucide-react';
import React from 'react';

export const CITY_DATA: MapLocation[] = [
  // --- THE REALITY (ERP SYSTEM) ---
  {
    id: 'api-gateway',
    title: 'Integrations-Bahnhof (Gateway)',
    description: 'Der wilde Eingang im Westen.',
    fullText: `Hier prallt die Außenwelt auf unser System. CSVs von 1998, REST-Calls von mobilen Apps und SOAP-Requests von Partnern. 
    
    Als Senior weißt du: Hier stehen die Wachposten. Wenn du hier nicht validierst, hast du den Müll später in der Datenbank. Es ist laut, chaotisch, aber essenziell.`,
    x: 10,
    y: 30,
    type: LocationType.DISTRICT,
    connections: ['core-monolith', 'frontend-facade'],
    icon: 'plug'
  },
  {
    id: 'frontend-facade',
    title: 'Die Frontend-Fassade',
    description: 'Schöner Schein über alten Steinen.',
    fullText: `Die moderne UI-Schicht. React, Tailwind, alles glänzt.
    
    Aber wir wissen: Der "Bestellen"-Button feuert keine moderne API, sondern triggert eine Kette von Events im Monolithen, die bis in die 90er zurückreichen. Es ist die Touristen-Zone: Sicher für Besucher, aber man sieht nicht, was im Maschinenraum passiert.`,
    x: 30,
    y: 15,
    type: LocationType.DISTRICT,
    connections: ['api-gateway', 'utils-shack'],
    icon: 'layers'
  },
  {
    id: 'core-monolith',
    title: 'Der Core Monolith',
    description: 'Die industrielle Innenstadt.',
    fullText: `Das massive Zentrum der Stadt. Tausende Klassen. Eng gekoppelt.
    
    Hier gelten keine modernen Microservice-Regeln. Das ist Schwermetall. Wer hier refactort, muss die Statik des ganzen Gebäudes kennen. Meine mentale Karte dieses Bereichs ist voller Warnschilder und Trampelpfade, die nicht in der Doku stehen.`,
    x: 40,
    y: 50,
    type: LocationType.LANDMARK,
    connections: ['db-layer', 'legacy-basement', 'billing-module', 'mental-map-plaza'],
    icon: 'server'
  },
  {
    id: 'billing-module',
    title: 'Billing Minenfeld',
    description: 'Hochsicherheits-Zone.',
    fullText: `Das Finanz-Modul. Hier werden Fehler nicht verziehen.
    
    Wenn ich hier arbeite, schaltet mein Gehirn in einen anderen Modus: Langsam, methodisch, paranoid. Keine Experimente. "Never change a running system" ist hier kein Witz, sondern Gesetz.`,
    x: 15,
    y: 60,
    type: LocationType.DANGER,
    connections: ['core-monolith'],
    icon: 'money'
  },
  {
    id: 'legacy-basement',
    title: 'Legacy Katakomben',
    description: 'Vergessene Tunnel und alte Geister.',
    fullText: `Tief unter dem Monolithen. Code, den niemand mehr versteht, aber der irgendwie wichtig ist.
    
    Variablennamen wie \`tmp_fix_2015\`. Hier unten orientiere ich mich rein archäologisch. Ich versuche nicht zu verstehen, "warum" etwas so ist, sondern nur, wie ich es nicht einstürzen lasse.`,
    x: 30,
    y: 80,
    type: LocationType.DANGER,
    connections: ['core-monolith', 'db-layer'],
    icon: 'ghost'
  },
  {
    id: 'db-layer',
    title: 'Das Daten-Archiv',
    description: 'Die unantastbare Wahrheit.',
    fullText: `Die Datenbank ist das Fundament der Stadt. Tabellen mit 100 Spalten.
    
    Wir ändern das Schema nur mit zitternden Händen. Meine mentale Karte verbindet oft UI-Fehler direkt mit fehlenden Indizes hier unten, ohne den Code dazwischen überhaupt anzusehen.`,
    x: 50,
    y: 90,
    type: LocationType.LANDMARK,
    connections: ['core-monolith'],
    icon: 'database'
  },

  // --- THE BRIDGE (UTILITIES) ---
  {
    id: 'utils-shack',
    title: 'Die Utility Hütte',
    description: 'Die Brücke zwischen Ordnung und Chaos.',
    fullText: `Ein Sammelsurium nützlicher Werkzeuge (\`GlobalHelpers.ts\`).
    
    Hier bedienen sich sowohl der ordentliche Frontend-Code als auch die wilden Gedankenexperimente. Es ist ein Ort des Pragmatismus.`,
    x: 60,
    y: 25,
    type: LocationType.ROAD,
    connections: ['frontend-facade', 'mental-map-plaza'],
    icon: 'wand'
  },

  // --- THE MIND (MENTAL MODEL) ---
  {
    id: 'mental-map-plaza',
    title: 'Platz der Orientierung',
    description: 'Der Aussichtspunkt des Seniors.',
    fullText: `Hier steht der Senior Developer. Von hier aus überblicke ich das Chaos.
    
    Ich navigiere nicht mehr mit "If-Else", sondern nach Gefühl und Erfahrung. Ich weiß, dass der Weg vom Frontend zum Core steinig ist. Dieser Ort verbindet die reale Code-Struktur mit meinem intuitiven Wissen.`,
    x: 70,
    y: 50,
    type: LocationType.LANDMARK,
    connections: ['core-monolith', 'city-vibe', 'cached-knowledge', 'utils-shack'],
    icon: 'network'
  },
  {
    id: 'city-vibe',
    title: 'Intuitions-Viertel',
    description: 'Navigation ohne Navi.',
    fullText: `Das Gefühl für den Code. Wie das Laufen durch eine bekannte Stadt.
    
    Ich kenne nicht jede Zeile Code (jede Gasse), aber ich weiß, in welchem Viertel ich bin. Ich "rieche" förmlich, wo der Bug sein könnte, bevor ich den Debugger starte.`,
    x: 75,
    y: 75,
    type: LocationType.DISTRICT,
    connections: ['mental-map-plaza', 'start-logic'],
    icon: 'footprints'
  },
  {
    id: 'start-logic',
    title: 'Logik-Schranke (Junior Gate)',
    description: 'Der Eingang für Neulinge.',
    fullText: `Ganz unten rechts kommen wir alle mal an. Das strikte logische Denken.
    
    "Wenn A, dann B". Als Junior ist das der einzige Weg. Man klammert sich an den Debugger. Der Weg von hier zum "Platz der Orientierung" dauert Jahre.`,
    x: 90,
    y: 90,
    type: LocationType.ROAD,
    connections: ['city-vibe'],
    icon: 'git-merge'
  },
  {
    id: 'cached-knowledge',
    title: 'Bibliothek der Erfahrung',
    description: 'Gespeicherte Narben und Lösungen.',
    fullText: `Hier lagern die Erinnerungen an vergangene Schlachten.
    
    "Weißt du noch, der Deadlock von 2021?" Dieses Wissen hilft mir, Muster im Chaos zu erkennen. Es füttert meine Intuition und mein internes LLM.`,
    x: 90,
    y: 50,
    type: LocationType.LANDMARK,
    connections: ['mental-map-plaza', 'llm-brain'],
    icon: 'milestone'
  },
  {
    id: 'llm-brain',
    title: 'Das LLM-Gehirn',
    description: 'Explorative Autovervollständigung.',
    fullText: `Mein Gehirn arbeitet wie ein LLM. Es füllt die Lücken zwischen den bekannten Fakten.
    
    Ich sehe eine Funktion und "rate", was sie tut, basierend auf dem Namen und dem Kontext. Meistens liege ich richtig. Aber ich muss aufpassen, nicht zu halluzinieren.`,
    x: 85,
    y: 20,
    type: LocationType.DISTRICT,
    connections: ['cached-knowledge', 'reality-check'],
    icon: 'brain'
  },
  {
    id: 'reality-check',
    title: 'Realitäts-Anker',
    description: 'Der Check gegen die Halluzination.',
    fullText: `Der Kontrollmechanismus.
    
    Bin ich mir sicher, oder rate ich nur? Hier überprüfe ich meine mentale Karte gegen den echten Code (\`git blame\`, Tests). Wichtig, um nicht arrogant zu werden.`,
    x: 95,
    y: 10,
    type: LocationType.LANDMARK,
    connections: ['llm-brain'],
    icon: 'eye'
  }
];

export const getIconComponent = (iconName: string | undefined) => {
  switch (iconName) {
    case 'server': return <Server size={20} />;
    case 'ghost': return <Ghost size={20} />;
    case 'money': return <Banknote size={20} />;
    case 'plug': return <Plug size={20} />;
    case 'layers': return <Layers size={20} />;
    case 'wand': return <Wand2 size={20} />;
    case 'database': return <Database size={20} />;
    case 'git-merge': return <GitMerge size={20} />;
    case 'footprints': return <Footprints size={20} />;
    case 'milestone': return <Milestone size={20} />;
    case 'brain': return <Brain size={20} />;
    case 'eye': return <Eye size={20} />;
    case 'network': return <Network size={20} />;
    
    default: return <AlertTriangle size={20} />;
  }
};