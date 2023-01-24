import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Script } from './script';
import { ClockTowerData } from '../config/data';
import ScriptService from './script.service';


@Component({
  selector: 'app-script-selection',
  templateUrl: './script-selection.component.html',
  styleUrls: ['./script-selection.component.scss']
})
export class ScriptSelectionComponent implements OnInit {

  scripts:any;
  @Output() selectedScript = new EventEmitter<Script>;

  constructor(private data: ClockTowerData, service: ScriptService) {}

  ngOnInit(): void {
    this.getScripts();
  }

  onSelect(script: Script) {
    this.selectedScript.emit(script);
  }

  getScripts() {
    this.data.http.get('/api/script', this.data.requestOptions).subscribe(data => {
      this.scripts = data;
    });
    console.log(this.scripts);
  }

}
