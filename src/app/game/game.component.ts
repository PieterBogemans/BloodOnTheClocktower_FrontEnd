import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClockTowerData } from '../config/data';
import { Game } from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  formData = {"username": "user", "password": "password"};

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*',
    'Authorization': 'Basic ' + btoa('user:password')
  });

  requestOptions = { 
    headers: this.headers     
  };

  games:any;
  selectedGame?: Game;
  gameplayers: any = [];


  constructor(private http: HttpClient, private data: ClockTowerData, private router: Router) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.http.get('/api/game', this.requestOptions).subscribe(data => {
      this.games = data;
    });
  }

  onSelect(game: Game) {
    this.selectedGame = game;
    this.data.gamePlayers = game.players;
    this.data.game = game;
    this.router.navigate(["/game-details"]);
  }

}
