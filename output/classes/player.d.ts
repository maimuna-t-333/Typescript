import type { isPlayer } from "../interfaces/isPlayer.js";
export declare class player implements isPlayer {
    name: string;
    age: number;
    readonly country: string;
    constructor(name: string, age: number, country: string);
    getAge(): number;
    play(): void;
}
//# sourceMappingURL=player.d.ts.map