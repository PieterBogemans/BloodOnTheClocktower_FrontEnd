import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import { Chart, CategoryScale, LinearScale, BarElement, PieController, ArcElement, Tooltip } from 'chart.js';
import { D } from 'chart.js/dist/chunks/helpers.core';
import { GamePlayer } from '../game/game-player';


@Component({
  selector: 'app-winrate',
  templateUrl: './winrate.component.html',
  styleUrls: ['./winrate.component.scss']
})

export class WinrateComponent implements OnInit {

  chart: Chart;
  winrate: number = 0;
  data: number[] = [0, 0];
  dataAvailable = false;
  total: number = 0;
  @Input()
  gamePlayers?: GamePlayer[] = [];
  
  constructor() { 
    this.chart = this.createChart(false);
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    let won = 0;
    this.total = 0;
    this.data = [0, 0]
    if (this.gamePlayers !== undefined) {
      for (var gamePlayer of this.gamePlayers) {
        if (gamePlayer.won) {
          won++;
          this.data[0]++;
        } else {
          this.data[1]++;
        }
        this.total++;
      }
      this.dataAvailable = this.total != 0;
      this.winrate = Math.round(won / this.total * 10000) / 100;
      this.chart = this.createChart(true);
    }
  }

  createChart(destroy: Boolean): Chart {
    Chart.register(PieController, CategoryScale, LinearScale, ArcElement, Tooltip);
    if (destroy) { this.chart.destroy(); }
    this.chart = new Chart("MyChart", {
      type: 'pie', 
      data: {
        labels: ['Win', 'Losses'], 
          datasets: [
          {
            data: this.data,
            backgroundColor: ['rgba(133,255,133)', 'rgba(250,91,61)']
          }
        ]
      },
      options: {
        aspectRatio:1
      }
    });
    return this.chart;
  }

}
