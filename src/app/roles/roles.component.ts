import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from './role';
import { Script } from '../script-selection/script';
import { ClockTowerData } from '../config/data';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Role[] = [];
  selectedRole?: Role;
  gameplayers: any = [];
  isScriptSelected: Boolean = false;
  selectedScript$?: Script;

  constructor(private data: ClockTowerData, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onSelect(role: Role): void {
    this.selectedRole = role;
    console.log(role);
    this.getGamePlayers();
  }

  getRoles() {
    this.data.http.get('/api/role', this.data.requestOptions).subscribe(data => {
      this.roles = data as Role[];
      if (this.roles.length != 0) this.onSelect(this.roles[0]);
    });
  }

  getGamePlayers() {
    this.data.http.post<Object>('/api/role/gameplayers', this.selectedRole, this.data.requestOptions).subscribe(data => {
      this.gameplayers = data;
    });
  }

  
  getRolesForScript() {
    this.data.http.post<Object>('/api/role/script', this.selectedScript$, this.data.requestOptions).subscribe(data => {
      this.roles = data as Role[];
      if (this.roles.length != 0) this.onSelect(this.roles[0]);
    });
  }

  onScriptSelected(script: Script) {
    this.isScriptSelected = true;
    this.selectedScript$ = script;
    this.getRolesForScript();
    this.changeDetectorRefs.detectChanges();
  }

  chooseDifferentScript() {
    this.isScriptSelected = false;
  }

}
