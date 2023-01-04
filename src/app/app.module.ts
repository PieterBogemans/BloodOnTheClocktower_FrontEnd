import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { HttpClientModule } from '@angular/common/http';
import { ClocktowerHeaderComponent } from './clocktower-header/clocktower-header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PlayerComponent } from './player/player.component';
import { WinrateComponent } from './winrate/winrate.component';
import { GameComponent } from './game/game.component';
import { ScriptSelectionComponent } from './script-selection/script-selection.component';
import { AddplayerComponent } from './player/addplayer/addplayer.component';
import { GameDetailsComponent } from './game/game-details/game-details.component';
import { ClockTowerData } from './config/data';

const appRoutes: Routes = [
  {path: '', component: RolesComponent },
  {path: 'roles', component: RolesComponent },
  {path: 'players', component: PlayerComponent },
  {path: 'addplayer', component: AddplayerComponent },
  {path: 'games', component: GameComponent },
  {path: 'game-details', component: GameDetailsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    ClocktowerHeaderComponent,
    PlayerComponent,
    WinrateComponent,
    GameComponent,
    ScriptSelectionComponent,
    AddplayerComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ClockTowerData ],
  bootstrap: [AppComponent]
})
export class AppModule { }
