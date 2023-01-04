import { Timestamp } from "rxjs";
import { GamePlayer } from "./game-player";
import { Player } from "../player/player";
import { Script } from "../script-selection/script";

export class Game {
    constructor (
    public id: number,
    public storyTeller: Player,
    public date: Date,
    public winningAlignment: String,
    public players: GamePlayer[],
    public script: Script
    
    ) {}
}