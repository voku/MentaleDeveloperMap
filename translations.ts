import { MapLocation, LocationType } from './types';

export type Language = 'de' | 'en';

export interface Translations {
  // InfoPanel Intro
  introTitle: string;
  introDescription1: string;
  introDescription2: string;
  legendWest: string;
  legendWestDesc: string;
  legendEast: string;
  legendEastDesc: string;
  startButton: string;
  contributeText: string;
  
  // InfoPanel Detail
  criticalZone: string;
  prevButton: string;
  nextButton: string;
  showPanel: string;
  
  // Location Data
  locations: {
    [key: string]: {
      title: string;
      description: string;
      fullText: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    introTitle: 'Mentale Karte: ERP Core',
    introDescription1: 'Vergiss die offiziellen Architektur-Diagramme im Wiki. Das hier ist die Realität.',
    introDescription2: 'Nach einiger Zeit fängt der Kopf an, Lücken selbst zu schließen. Nicht im Sinne von "ich erfinde was" wie ein LLM, sondern eher so wie eine mentale Stadtkarte: Ich kenne nicht jede Straße, aber ich weiß, in welchem Viertel ich gerade bin und welche Abkürzungen es gibt.',
    legendWest: 'Der Westen (Legacy):',
    legendWestDesc: 'Code, den wir fürchten.',
    legendEast: 'Der Osten (Mindset):',
    legendEastDesc: 'Wie wir überleben.',
    startButton: 'Start Onboarding',
    contributeText: 'Contribute on GitHub',
    criticalZone: 'KRITISCHE ZONE',
    prevButton: 'Zurück',
    nextButton: 'Weiter',
    showPanel: 'Panel anzeigen',
    locations: {
      'api-gateway': {
        title: 'Integrations-Bahnhof (Gateway)',
        description: 'Der wilde Eingang im Westen.',
        fullText: `Hier prallt die Außenwelt auf unser System. CSVs von 1998, REST-Calls von mobilen Apps und SOAP-Requests von Partnern. 
    
Als Senior weißt du: Hier stehen die Wachposten. Wenn du hier nicht validierst, hast du den Müll später in der Datenbank. Es ist laut, chaotisch, aber essenziell.`,
      },
      'frontend-facade': {
        title: 'Die Frontend-Fassade',
        description: 'Schöner Schein über alten Steinen.',
        fullText: `Die moderne UI-Schicht. React, Tailwind, alles glänzt.
    
Aber wir wissen: Der "Bestellen"-Button feuert keine moderne API, sondern triggert eine Kette von Events im Monolithen, die bis in die 90er zurückreichen. Es ist die Touristen-Zone: Sicher für Besucher, aber man sieht nicht, was im Maschinenraum passiert.`,
      },
      'core-monolith': {
        title: 'Der Core Monolith',
        description: 'Die industrielle Innenstadt.',
        fullText: `Das massive Zentrum der Stadt. Tausende Klassen. Eng gekoppelt.
    
Hier gelten keine modernen Microservice-Regeln. Das ist Schwermetall. Wer hier refactort, muss die Statik des ganzen Gebäudes kennen. Meine mentale Karte dieses Bereichs ist voller Warnschilder und Trampelpfade, die nicht in der Doku stehen.`,
      },
      'billing-module': {
        title: 'Billing Minenfeld',
        description: 'Hochsicherheits-Zone.',
        fullText: `Das Finanz-Modul. Hier werden Fehler nicht verziehen.
    
Wenn ich hier arbeite, schaltet mein Gehirn in einen anderen Modus: Langsam, methodisch, paranoid. Keine Experimente. "Never change a running system" ist hier kein Witz, sondern Gesetz.`,
      },
      'legacy-basement': {
        title: 'Legacy Katakomben',
        description: 'Vergessene Tunnel und alte Geister.',
        fullText: `Tief unter dem Monolithen. Code, den niemand mehr versteht, aber der irgendwie wichtig ist.
    
Variablennamen wie \`tmp_fix_2015\`. Hier unten orientiere ich mich rein archäologisch. Ich versuche nicht zu verstehen, "warum" etwas so ist, sondern nur, wie ich es nicht einstürzen lasse.`,
      },
      'db-layer': {
        title: 'Das Daten-Archiv',
        description: 'Die unantastbare Wahrheit.',
        fullText: `Die Datenbank ist das Fundament der Stadt. Tabellen mit 100 Spalten.
    
Wir ändern das Schema nur mit zitternden Händen. Meine mentale Karte verbindet oft UI-Fehler direkt mit fehlenden Indizes hier unten, ohne den Code dazwischen überhaupt anzusehen.`,
      },
      'utils-shack': {
        title: 'Die Utility Hütte',
        description: 'Die Brücke zwischen Ordnung und Chaos.',
        fullText: `Ein Sammelsurium nützlicher Werkzeuge (\`GlobalHelpers.ts\`).
    
Hier bedienen sich sowohl der ordentliche Frontend-Code als auch die wilden Gedankenexperimente. Es ist ein Ort des Pragmatismus.`,
      },
      'mental-map-plaza': {
        title: 'Platz der Orientierung',
        description: 'Der Aussichtspunkt des Seniors.',
        fullText: `Hier steht der Senior Developer. Von hier aus überblicke ich das Chaos.
    
Ich navigiere nicht mehr mit "If-Else", sondern nach Gefühl und Erfahrung. Ich weiß, dass der Weg vom Frontend zum Core steinig ist. Dieser Ort verbindet die reale Code-Struktur mit meinem intuitiven Wissen.`,
      },
      'city-vibe': {
        title: 'Intuitions-Viertel',
        description: 'Navigation ohne Navi.',
        fullText: `Das Gefühl für den Code. Wie das Laufen durch eine bekannte Stadt.
    
Ich kenne nicht jede Zeile Code (jede Gasse), aber ich weiß, in welchem Viertel ich bin. Ich "rieche" förmlich, wo der Bug sein könnte, bevor ich den Debugger starte.`,
      },
      'start-logic': {
        title: 'Logik-Schranke (Junior Gate)',
        description: 'Der Eingang für Neulinge.',
        fullText: `Ganz unten rechts kommen wir alle mal an. Das strikte logische Denken.
    
"Wenn A, dann B". Als Junior ist das der einzige Weg. Man klammert sich an den Debugger. Der Weg von hier zum "Platz der Orientierung" dauert Jahre.`,
      },
      'cached-knowledge': {
        title: 'Bibliothek der Erfahrung',
        description: 'Gespeicherte Narben und Lösungen.',
        fullText: `Hier lagern die Erinnerungen an vergangene Schlachten.
    
"Weißt du noch, der Deadlock von 2021?" Dieses Wissen hilft mir, Muster im Chaos zu erkennen. Es füttert meine Intuition und mein internes LLM.`,
      },
      'llm-brain': {
        title: 'Das LLM-Gehirn',
        description: 'Explorative Autovervollständigung.',
        fullText: `Mein Gehirn arbeitet wie ein LLM. Es füllt die Lücken zwischen den bekannten Fakten.
    
Ich sehe eine Funktion und "rate", was sie tut, basierend auf dem Namen und dem Kontext. Meistens liege ich richtig. Aber ich muss aufpassen, nicht zu halluzinieren.`,
      },
      'reality-check': {
        title: 'Realitäts-Anker',
        description: 'Der Check gegen die Halluzination.',
        fullText: `Der Kontrollmechanismus.
    
Bin ich mir sicher, oder rate ich nur? Hier überprüfe ich meine mentale Karte gegen den echten Code (\`git blame\`, Tests). Wichtig, um nicht arrogant zu werden.`,
      },
    },
  },
  en: {
    introTitle: 'Mental Map: ERP Core',
    introDescription1: 'Forget the official architecture diagrams in the wiki. This is reality.',
    introDescription2: 'After some time, your brain starts to fill in the gaps. Not in the sense of "making things up" like an LLM, but more like a mental city map: I don\'t know every street, but I know which neighborhood I\'m in and what shortcuts exist.',
    legendWest: 'The West (Legacy):',
    legendWestDesc: 'Code we fear.',
    legendEast: 'The East (Mindset):',
    legendEastDesc: 'How we survive.',
    startButton: 'Start Onboarding',
    contributeText: 'Contribute on GitHub',
    criticalZone: 'CRITICAL ZONE',
    prevButton: 'Previous',
    nextButton: 'Next',
    showPanel: 'Show Panel',
    locations: {
      'api-gateway': {
        title: 'Integration Station (Gateway)',
        description: 'The wild entrance in the west.',
        fullText: `Here the outside world crashes into our system. CSVs from 1998, REST calls from mobile apps, and SOAP requests from partners.
    
As a senior you know: This is where the guards stand. If you don't validate here, you'll have garbage in the database later. It's loud, chaotic, but essential.`,
      },
      'frontend-facade': {
        title: 'The Frontend Facade',
        description: 'Beautiful appearance over old stones.',
        fullText: `The modern UI layer. React, Tailwind, everything shines.
    
But we know: The "Order" button doesn't fire a modern API, but triggers a chain of events in the monolith that reaches back to the 90s. It's the tourist zone: Safe for visitors, but you don't see what's happening in the engine room.`,
      },
      'core-monolith': {
        title: 'The Core Monolith',
        description: 'The industrial downtown.',
        fullText: `The massive center of the city. Thousands of classes. Tightly coupled.
    
Modern microservice rules don't apply here. This is heavy metal. Anyone refactoring here must know the statics of the entire building. My mental map of this area is full of warning signs and trails that aren't in the docs.`,
      },
      'billing-module': {
        title: 'Billing Minefield',
        description: 'High-security zone.',
        fullText: `The finance module. Mistakes are not forgiven here.
    
When I work here, my brain switches to a different mode: Slow, methodical, paranoid. No experiments. "Never change a running system" isn't a joke here, it's law.`,
      },
      'legacy-basement': {
        title: 'Legacy Catacombs',
        description: 'Forgotten tunnels and old ghosts.',
        fullText: `Deep beneath the monolith. Code nobody understands anymore, but somehow it's important.
    
Variable names like \`tmp_fix_2015\`. Down here I navigate purely archaeologically. I don't try to understand "why" something is the way it is, just how not to make it collapse.`,
      },
      'db-layer': {
        title: 'The Data Archive',
        description: 'The untouchable truth.',
        fullText: `The database is the foundation of the city. Tables with 100 columns.
    
We only change the schema with trembling hands. My mental map often connects UI errors directly to missing indexes down here, without even looking at the code in between.`,
      },
      'utils-shack': {
        title: 'The Utility Shack',
        description: 'The bridge between order and chaos.',
        fullText: `A collection of useful tools (\`GlobalHelpers.ts\`).
    
Both the orderly frontend code and wild thought experiments use this. It's a place of pragmatism.`,
      },
      'mental-map-plaza': {
        title: 'Orientation Plaza',
        description: 'The senior\'s viewpoint.',
        fullText: `Here stands the senior developer. From here I oversee the chaos.
    
I no longer navigate with "If-Else", but by feeling and experience. I know the path from frontend to core is rocky. This place connects the real code structure with my intuitive knowledge.`,
      },
      'city-vibe': {
        title: 'Intuition District',
        description: 'Navigation without GPS.',
        fullText: `The feeling for the code. Like walking through a familiar city.
    
I don't know every line of code (every alley), but I know which neighborhood I'm in. I literally "smell" where the bug might be before I start the debugger.`,
      },
      'start-logic': {
        title: 'Logic Gate (Junior Gate)',
        description: 'The entrance for newcomers.',
        fullText: `We all arrive at the bottom right eventually. Strict logical thinking.
    
"If A, then B". As a junior, this is the only way. You cling to the debugger. The journey from here to the "Orientation Plaza" takes years.`,
      },
      'cached-knowledge': {
        title: 'Library of Experience',
        description: 'Stored scars and solutions.',
        fullText: `Here lie the memories of past battles.
    
"Remember the deadlock of 2021?" This knowledge helps me recognize patterns in chaos. It feeds my intuition and my internal LLM.`,
      },
      'llm-brain': {
        title: 'The LLM Brain',
        description: 'Exploratory autocomplete.',
        fullText: `My brain works like an LLM. It fills in the gaps between known facts.
    
I see a function and "guess" what it does, based on the name and context. Usually I'm right. But I have to be careful not to hallucinate.`,
      },
      'reality-check': {
        title: 'Reality Anchor',
        description: 'The check against hallucination.',
        fullText: `The control mechanism.
    
Am I sure, or am I just guessing? Here I check my mental map against the real code (\`git blame\`, tests). Important to not become arrogant.`,
      },
    },
  },
};

// Helper function to get translated location data
export const getTranslatedLocationData = (language: Language): MapLocation[] => {
  const t = translations[language];
  
  return [
    {
      id: 'api-gateway',
      title: t.locations['api-gateway'].title,
      description: t.locations['api-gateway'].description,
      fullText: t.locations['api-gateway'].fullText,
      x: 10,
      y: 30,
      type: LocationType.DISTRICT,
      connections: ['core-monolith', 'frontend-facade'],
      icon: 'plug'
    },
    {
      id: 'frontend-facade',
      title: t.locations['frontend-facade'].title,
      description: t.locations['frontend-facade'].description,
      fullText: t.locations['frontend-facade'].fullText,
      x: 30,
      y: 15,
      type: LocationType.DISTRICT,
      connections: ['api-gateway', 'utils-shack'],
      icon: 'layers'
    },
    {
      id: 'core-monolith',
      title: t.locations['core-monolith'].title,
      description: t.locations['core-monolith'].description,
      fullText: t.locations['core-monolith'].fullText,
      x: 40,
      y: 50,
      type: LocationType.LANDMARK,
      connections: ['db-layer', 'legacy-basement', 'billing-module', 'mental-map-plaza'],
      icon: 'server'
    },
    {
      id: 'billing-module',
      title: t.locations['billing-module'].title,
      description: t.locations['billing-module'].description,
      fullText: t.locations['billing-module'].fullText,
      x: 15,
      y: 60,
      type: LocationType.DANGER,
      connections: ['core-monolith'],
      icon: 'money'
    },
    {
      id: 'legacy-basement',
      title: t.locations['legacy-basement'].title,
      description: t.locations['legacy-basement'].description,
      fullText: t.locations['legacy-basement'].fullText,
      x: 30,
      y: 80,
      type: LocationType.DANGER,
      connections: ['core-monolith', 'db-layer'],
      icon: 'ghost'
    },
    {
      id: 'db-layer',
      title: t.locations['db-layer'].title,
      description: t.locations['db-layer'].description,
      fullText: t.locations['db-layer'].fullText,
      x: 50,
      y: 90,
      type: LocationType.LANDMARK,
      connections: ['core-monolith'],
      icon: 'database'
    },
    {
      id: 'utils-shack',
      title: t.locations['utils-shack'].title,
      description: t.locations['utils-shack'].description,
      fullText: t.locations['utils-shack'].fullText,
      x: 60,
      y: 25,
      type: LocationType.ROAD,
      connections: ['frontend-facade', 'mental-map-plaza'],
      icon: 'wand'
    },
    {
      id: 'mental-map-plaza',
      title: t.locations['mental-map-plaza'].title,
      description: t.locations['mental-map-plaza'].description,
      fullText: t.locations['mental-map-plaza'].fullText,
      x: 70,
      y: 50,
      type: LocationType.LANDMARK,
      connections: ['core-monolith', 'city-vibe', 'cached-knowledge', 'utils-shack'],
      icon: 'network'
    },
    {
      id: 'city-vibe',
      title: t.locations['city-vibe'].title,
      description: t.locations['city-vibe'].description,
      fullText: t.locations['city-vibe'].fullText,
      x: 75,
      y: 75,
      type: LocationType.DISTRICT,
      connections: ['mental-map-plaza', 'start-logic'],
      icon: 'footprints'
    },
    {
      id: 'start-logic',
      title: t.locations['start-logic'].title,
      description: t.locations['start-logic'].description,
      fullText: t.locations['start-logic'].fullText,
      x: 90,
      y: 90,
      type: LocationType.ROAD,
      connections: ['city-vibe'],
      icon: 'git-merge'
    },
    {
      id: 'cached-knowledge',
      title: t.locations['cached-knowledge'].title,
      description: t.locations['cached-knowledge'].description,
      fullText: t.locations['cached-knowledge'].fullText,
      x: 90,
      y: 50,
      type: LocationType.LANDMARK,
      connections: ['mental-map-plaza', 'llm-brain'],
      icon: 'milestone'
    },
    {
      id: 'llm-brain',
      title: t.locations['llm-brain'].title,
      description: t.locations['llm-brain'].description,
      fullText: t.locations['llm-brain'].fullText,
      x: 85,
      y: 20,
      type: LocationType.DISTRICT,
      connections: ['cached-knowledge', 'reality-check'],
      icon: 'brain'
    },
    {
      id: 'reality-check',
      title: t.locations['reality-check'].title,
      description: t.locations['reality-check'].description,
      fullText: t.locations['reality-check'].fullText,
      x: 95,
      y: 10,
      type: LocationType.LANDMARK,
      connections: ['llm-brain'],
      icon: 'eye'
    }
  ];
};
