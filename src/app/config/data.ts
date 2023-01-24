import { Injectable } from '@angular/core';
import { GamePlayer } from '../game/game-player';
import { Game } from '../game/game';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Script } from '../script-selection/script';
import { Player } from '../player/player';
import { Role } from '../roles/roles';

@Injectable()
export class ClockTowerData {

    public gamePlayers?: GamePlayer[];
    public game?: Game; 
    public scripts?: Script[];
    public players?: Player[];
    public roles?: Role[];
    public selectedPlayer?: Player;
    public selectedRole?: Role;
    public selectedScript?: Script;

    public headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Basic ' + btoa('user:password')
      });
    
    public requestOptions = { headers: this.headers };

    public constructor(public http: HttpClient) { 
    }

    public removePlayer(player: Player) {
      let index = this.players?.indexOf(player);
      if (index !== -1 && index !== undefined) {
          this.players?.splice(index as number, 1);
      }
    }

}