import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from './player';
import { GamePlayer } from '../game/game-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  formData = {"username": "user", "password": "password"};

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*',
    'Authorization': 'Basic ' + btoa('user:password')
  });

  requestOptions = { 
    headers: this.headers     
  };

  players:any;
  selectedPlayer?: Player;
  gameplayers: any = [];

  constructor(private http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    this.getGamePlayers();
    
  }

  getPlayers() {
    this.http.get('/api/player', this.requestOptions).subscribe(data => {
      this.players = data;
      if (this.players.length != 0) this.onSelect(this.players[0]);
    });
  }

  getGamePlayers() {
    this.http.post<Object>('/api/player/gameplayers', this.selectedPlayer, this.requestOptions).subscribe(data => {
      this.gameplayers = data;
    });
    console.log(this.gameplayers);
  }

}
