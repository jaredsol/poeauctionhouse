export interface AuctionSearch {
  league: string;
  type: string;
  base: string;
  search: string;
  damage: {
    min: number;
    max: number;
  };
  offense: {
    dps: {
      min: number;
      max: number;
    };
    pdps: {
      min: number;
      max: number;
    };
    edps: {
      min: number;
      max: number;
    };
    aps: {
      min: number;
      max: number;
    };
    crit: {
      min: number;
      max: number;
    };
  };
  defense: {
    armor: {
      min: number;
      max: number;
    };
    evasion: {
      min: number;
      max: number;
    };
    shield: {
      min: number;
      max: number;
    };
    block: {
      min: number;
      max: number;
    };
  };
  // SOCKETS
  // LINKS
  requirements: {
    level: {
      min: number;
      max: number;
    };
    strength: {
      min: number;
      max: number;
    };
    dexterity: {
      min: number;
      max: number;
    };
    intelligence: {
      min: number;
      max: number;
    };
  };
  // MODS
  state: {
    rarity: string;
    identified: string;
    corrupted: string;
    crafted: string;
    enchanted: string;
    // ALT ART
  };
  posting: {
    onlineonly: boolean;
    buyout: string;
    // BUYOUT PRICE
    // SELLER
    // THREAD
  };
}
