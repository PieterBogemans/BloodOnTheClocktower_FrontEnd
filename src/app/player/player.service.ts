import { Component, Injectable } from "@angular/core";
import { ClockTowerData } from "../config/data";
import { GamePlayer } from "../game/game-player";
import { Player } from "./player";

@Injectable({
    providedIn: 'root',
  })
export default class PlayerService  {

  constructor(private data: ClockTowerData) {
  }

  getPlayers() {
      this.data.http.get('/api/player', this.data.requestOptions).subscribe(data => {
          this.data.players = data as Player[];
      });
  }

  getGamePlayers() {
    this.data.http.post<Object>('/api/player/gameplayers', this.data.selectedPlayer, this.data.requestOptions).subscribe(data => {
      this.data.gamePlayers = data as GamePlayer[];
    });
  }
}