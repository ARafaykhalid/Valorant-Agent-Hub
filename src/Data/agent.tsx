type agent = {
  AgentName: () => React.ReactNode;
  AgentType: () => React.ReactNode;
  AgentDescription: string;
  AgentKickLine: string;
  AgentAboutImg: string;
  Ab1: () => React.ReactNode;
  Ab1Vid: string;
  Ab1Desc: string;
  Ab2: () => React.ReactNode;
  Ab2Vid: string;
  Ab2Desc: string;
  Ab3: () => React.ReactNode;
  Ab3Vid: string;
  Ab3Desc: string;
  Ab4: () => React.ReactNode;
  Ab4Vid: string;
  Ab4Desc: string;
  Trailer: string;
  AgentNameN: string;
  AgentTypeN: string;
  AgentCard: string;
  ColorBG: string;
  ColorBD: string;
};

export const Agents: agent[] = [
  {
    AgentNameN: "TEJO",
    AgentTypeN: "INITIATOR",
    AgentName: () => (
      <>
        TE<b>J</b>O
      </>
    ),
    AgentType: () => (
      <>
        INITI<b>A</b>TOR
      </>
    ),
    AgentDescription:
      "A veteran intelligence consultant from Colombia, Tejo's ballistic guidance system pressures the enemy to relinquish their ground - or their lives. His targeted strikes keep opponents off balance and under his heel.",
    AgentKickLine: "New Weapon Same War!",
    AgentAboutImg: "/Tejo/img/about.jpg",
    AgentCard: "/Tejo/img/card.jpg",
    Ab1: () => <>Stealth Drone</>,
    Ab1Vid: "/Tejo/videos/AbVid1.mp4",
    Ab1Desc:
      "EQUIP a stealth drone. FIRE to throw the drone forward, assuming direct control of its movement. FIRE again to trigger a pulse that Suppresses and Reveals enemies hit.",
    Ab2: () => <>Special Delivery</>,
    Ab2Vid: "/Tejo/videos/AbVid2.mp4",
    Ab2Desc:
      "EQUIP a sticky grenade. FIRE to launch. The grenade sticks to the first surface it hits and explodes, Concussing any targets caught in the blast. ALT FIRE to launch the grenade with a single bounce instead.",
    Ab3: () => <>Guided Salvo</>,
    Ab3Vid: "/Tejo/videos/AbVid3.mp4",
    Ab3Desc:
      "EQUIP an AR targeting system. FIRE to select up to two target locations on the map. ALT FIRE to launch missiles that autonomously navigate to target locations, detonating on arrival.",
    Ab4: () => <>Armageddon</>,
    Ab4Vid: "/Tejo/videos/AbVid4.mp4",
    Ab4Desc:
      "EQUIP a tactical strike targeting map. FIRE to select the origin point of the strike. FIRE again to set the end point and launch the attack, unleashing a wave of explosions along the strike path. ALT FIRE during map targeting to cancel the origin point.",
    Trailer: "dRuRID5JoQY",
    ColorBG: "!bg-[#FBE7A1] text-black",
    ColorBD: "!border-[#FBE7A1]",
  },
  {
    AgentNameN: "VYSE",
    AgentTypeN: "SENTINEL",
    AgentName: () => (
      <>
        V<b>Y</b>SE
      </>
    ),
    AgentType: () => (
      <>
        SENTI<b>N</b>EL
      </>
    ),
    AgentDescription:
      "Metallic mastermind Vyse unleashes liquid metal to isolate, trap, and disarm her enemies. Through cunning and manipulation, she forces all who oppose her to fear the battlefield itself.",
    AgentKickLine: "All paths ends with me.",
    AgentAboutImg: "/Vyse/img/about.jpg",
    AgentCard: "/Vyse/img/card.jpg",
    Ab1: () => <>Steel Garden</>,
    Ab1Vid: "/Vyse/videos/AbVid1.mp4",
    Ab1Desc:
      "EEQUIP a bramble of liquid metal. FIRE to send the metal erupting from you as a torrent of metal thorns, JAMMING enemy primary weapons after a brief windup.",
    Ab2: () => <>Razorvine</>,
    Ab2Vid: "/Vyse/videos/AbVid2.mp4",
    Ab2Desc:
      "EQUIP a nest of liquid metal. FIRE to launch. Upon landing, the nest becomes invisible. When ACTIVATED, it sprawls out into a large razorvine nest which slows and damages all players who move through it.",
    Ab3: () => <>Shear</>,
    Ab3Vid: "/Vyse/videos/AbVid3.mp4",
    Ab3Desc:
      "EQUIP filaments of liquid metal. FIRE to place a hidden wall trap. When an enemy crosses, an indestructible wall bursts from the ground behind them. The wall lasts for a brief time before dissipating.",
    Ab4: () => <>Arc Rose</>,
    Ab4Vid: "/Vyse/videos/AbVid4.mp4",
    Ab4Desc:
      "EQUIP an Arc Rose. Target a surface and FIRE to place a stealthed Arc Rose, or ALT FIRE to place the Arc Rose through it. REUSE to blind all players looking at it. This ability can be picked up to be REDEPLOYED.",
    Trailer: "btpWg1gDXIE",
    ColorBG: "!bg-[#6153b7] text-white",
    ColorBD: "!border-[#6153b7]",
  },
];
