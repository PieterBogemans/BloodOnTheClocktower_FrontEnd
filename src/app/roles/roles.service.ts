import { Component, Injectable } from "@angular/core";
import { ClockTowerData } from "../config/data";
import { GamePlayer } from "../game/game-player";
import { Role } from "./roles";

@Injectable({
    providedIn: 'root',
  })
export default class RoleService  {

  constructor(private data: ClockTowerData) {
  }

  getGamePlayers() {
    this.data.http.post<Object>('/api/role/gameplayers', this.data.selectedRole, this.data.requestOptions).subscribe(data => {
      this.data.gamePlayers = data as GamePlayer[];
    });
  }

  
  getRolesForScript() {
    this.data.http.post<Object>('/api/role/script', this.data.selectedScript, this.data.requestOptions).subscribe(data => {
      this.data.roles = data as Role[];
    });
  }

  getRoles() {
    this.data.http.get('/api/role', this.data.requestOptions).subscribe(data => {
      this.data.roles = data as Role[];
    });
  }
}