import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClockTowerData } from 'src/app/config/data';
import { GamePlayer } from 'src/app/game/game-player';
import { Game } from '../game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  gamePlayers?: GamePlayer[];
  game: Game; 

  constructor(private data: ClockTowerData, private router: Router) { 
    this.gamePlayers = data.gamePlayers;
    this.game = data.game!; 
  }

  ngOnInit(): void {
    if (this.game == null || this.gamePlayers == null) this.router.navigate(["/games"])

  }

}
