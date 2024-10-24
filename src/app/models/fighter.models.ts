export interface Fighter {
  name: string;
  key: string;

}

export interface Move {
  name: string;
  motions?: string[];
  buttons?: string[];
  type: MoveType;

}

export interface FrameData {
  contact: {
    blockStun: number;
    hitStun: number;

  };
  damage: {
    base: number;
    scaling: string;
  };
  execute: {
    active: number;
    recovery: number;
    startup: number;
    total: number;
  };
  onHit: number;
  onPc: number;
}

export type MoveType = "normal" | "commandNormal" | "throw" | "commandThrow" | "special" | "gauge" | "super";
export type MoveProperty =
  "install" |
  "kdHard" |
  "kdSoft" |
  "projectile" |
  "projectileInvuln" |
  "resourceGain" |
  "stanceEnter" |
  "stanceRequired";
