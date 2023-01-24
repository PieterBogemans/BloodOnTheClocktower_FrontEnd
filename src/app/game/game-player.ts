import { Game } from "./game";
import { Player } from "../player/player";
import { Role } from "../roles/roles";

export class GamePlayer {
    constructor (
        public player: Player,
        public role: Role, 
        public game?: Game,
        public alignment?: String,
        public died?: Boolean,
        public won?: Boolean,
        public id?: number
    ) {}
}