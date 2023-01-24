import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from './player';
import { GamePlayer } from '../game/game-player';
import PlayerService from './player.service';
import { ClockTowerData } from '../config/data';

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

  selectedPlayer?: Player;

  constructor(private http: HttpClient,
              private service: PlayerService,
              private data: ClockTowerData) {
    this.http = http;
  }

  ngOnInit(): void {
    this.service.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    this.data.selectedPlayer = player;
    this.service.getGamePlayers();
  }

  get players() {
    return this.data.players;
  }

  get gameplayers() {
    return this.data.gamePlayers;
  }

}
