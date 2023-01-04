import { Game } from "./game";
import { Player } from "../player/player";
import { Role } from "../roles/role";

export class GamePlayer {
    constructor (
    public id: number,
    public player: Player,
    public game: Game,
    public role: Role, 
    public alignment: String,
    public died: Boolean,
    public won: Boolean
    ) {}
}