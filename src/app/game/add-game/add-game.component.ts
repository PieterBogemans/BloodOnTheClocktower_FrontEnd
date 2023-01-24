import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ClockTowerData } from 'src/app/config/data';
import { Player } from 'src/app/player/player';
import PlayerService from 'src/app/player/player.service';
import { Role } from 'src/app/roles/roles';
import RoleService from 'src/app/roles/roles.service';
import { Script } from 'src/app/script-selection/script';
import ScriptService from 'src/app/script-selection/script.service';
import { Game } from '../game';
import { GamePlayer } from '../game-player';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  game: Game = {
    storyTeller: { name: "" },
    winningAlignment: "",
    players: [],
    script: { name: "", roles: [] }
  };

  get scripts() { return this.data.scripts; }
  get roles() { return this.data.roles; }
  get gamePlayers() { return this.data.gamePlayers; }
  get players() { return this.data.players; }

  gamePlayer: GamePlayer = { player: {}, role: { name: "" }};
  isScriptSelected: Boolean = false;
  hasGamePlayers: Boolean = false;

  constructor(private http: HttpClient,
              private router: Router,
              private scriptService: ScriptService, 
              private roleService: RoleService,
              private playerService: PlayerService,
              private data: ClockTowerData) {}

  ngOnInit(): void {
    this.playerService.getPlayers();
    this.scriptService.getScripts();
    this.data.gamePlayers = [];
  }

  scriptOnChange() {
    this.isScriptSelected = this.game.script.name !== "";
    this.data.selectedScript = this.game.script;
    this.roleService.getRolesForScript(); 
  }

  winningAlignmentOnChange() {
    this.setWinningAlignment();
  }

  addPlayer() {
    this.gamePlayer.won = this.gamePlayer.alignment === this.game.winningAlignment;
    this.game.players.push(this.gamePlayer);
    this.data.removePlayer(this.gamePlayer.player);
    this.gamePlayer = { player: {}, role: { name: "" }};
    if (this.game.players.length !== 0) this.hasGamePlayers = true;
    console.log(this.game);
  }

  onSubmit() {
    console.log(this.game);
    this.http.post<Object>('/api/game', this.game, this.data.requestOptions).subscribe(); 
    this.router.navigate(['/game']);
  }

  removePlayer(player: GamePlayer) {
    let index = this.game.players?.indexOf(player);
    if (index !== -1 && index !== undefined) {
      this.game.players?.splice(index as number, 1);
      this.data.players?.push(player.player);
    }
    if (this.game.players.length <= 0) this.hasGamePlayers = false;
  }

  setWinningAlignment() {
    for (let player of this.game.players) {
      console.log(player.alignment);
      console.log(this.game.winningAlignment);
        player.won = player.alignment == this.game.winningAlignment;
    } 
}
}
