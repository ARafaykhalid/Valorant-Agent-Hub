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
      "EQUIP a bramble of liquid metal. FIRE to send the metal erupting from you as a torrent of metal thorns, JAMMING enemy primary weapons after a brief windup.",
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
  {
    AgentNameN: "ISO",
    AgentTypeN: "DUELIST",
    AgentName: () => (
      <>
        IS<b>O</b>
      </>
    ),
    AgentType: () => (
      <>
        DU<b>E</b>LIST
      </>
    ),
    AgentDescription:
      "Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.",
    AgentKickLine: "Enough training, it's time.",
    AgentAboutImg: "/Iso/img/about.jpg",
    AgentCard: "/Iso/img/card.jpg",
    Ab1: () => <>KILL CONTRACT</>,
    Ab1Vid: "/Iso/videos/AbVid1.mp4",
    Ab1Desc:
      "EQUIP an interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.",
    Ab2: () => <>CONTINGENCY</>,
    Ab2Vid: "/Iso/videos/AbVid2.mp4",
    Ab2Desc:
      "EQUIP to assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets.",
    Ab3: () => <>DOUBLE TAP</>,
    Ab3Vid: "/Iso/videos/AbVid3.mp4",
    Ab3Desc:
      "START a focus timer. Once completed, enter a flow state during which downed enemies you kill or damage generate an energy orb. Shooting this orb grants you a shield which absorbs one instance of damage from any source.",
    Ab4: () => <>UNDERCUT</>,
    Ab4Vid: "/Iso/videos/AbVid4.mp4",
    Ab4Desc:
      "EQUIP a molecular bolt. Fire to throw it forward, applying a brief FRAGILE to all players it touches. The bolt can pass through solid objects, including walls.",
    Trailer: "8OgcHAv6Jvk",
    ColorBG: "!bg-[#383f4c] text-white",
    ColorBD: "!border-[#383f4c]",
  },
  {
    AgentNameN: "GEKKO",
    AgentTypeN: "INITIATOR",
    AgentName: () => (
      <>
        GE<b>KK</b>O
      </>
    ),
    AgentType: () => (
      <>
        INITI<b>A</b>TOR
      </>
    ),
    AgentDescription:
      "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
    AgentKickLine: "Wachale guey, my crew is coming through.",
    AgentAboutImg: "/Gekko/img/about.jpg",
    AgentCard: "/Gekko/img/card.jpg",
    Ab1: () => <>THRASH</>,
    Ab1Vid: "/Gekko/videos/AbVid1.mp4",
    Ab1Desc:
      "EQUIP Thrash FIRE to link with Thrash's mind and steer her through enemy territory ACTIVATE to lunge forward and explode, detaining any enemies in a small radius. When Thrash expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once.",
    Ab2: () => <>MOSH PIT</>,
    Ab2Vid: "/Gekko/videos/AbVid2.mp4",
    Ab2Desc:
      "EQUIP Mosh FIRE to throw Mosh like a grenade ALT FIRE to throw underhand. Upon landing Mosh duplicates across a large area then after a short delay explodes.",
    Ab3: () => <>DIZZY</>,
    Ab3Vid: "/Gekko/videos/AbVid3.mp4",
    Ab3Desc:
      "EQUIP Dizzy FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are blinded. When Dizzy expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown.",
    Ab4: () => <>WINGMAN</>,
    Ab4Vid: "/Gekko/videos/AbVid4.mp4",
    Ab4Desc:
      "EQUIP Wingman FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown.",
    Trailer: "iYFh_XAXSPk",
    ColorBG: "!bg-[#22c55e] text-white",
    ColorBD: "!border-[#22c55e]",
  },
];
