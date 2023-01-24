import { Timestamp } from "rxjs";
import { GamePlayer } from "./game-player";
import { Player } from "../player/player";
import { Script } from "../script-selection/script";

export class Game {
    constructor (
        public storyTeller: Player,
        public winningAlignment: String,
        public players: GamePlayer[],
        public script: Script,
        public date?: Date,
        public id?: number
    
    ) {}
}