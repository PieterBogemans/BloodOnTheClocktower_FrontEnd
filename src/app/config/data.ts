import { Injectable } from '@angular/core';
import { GamePlayer } from '../game/game-player';
import { Game } from '../game/game';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClockTowerData {

    public gamePlayers?: GamePlayer[];
    public game?: Game; 
    public headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Basic ' + btoa('user:password')
      });
    
    public requestOptions = { headers: this.headers };

    public constructor(public http: HttpClient) { 
    }

}