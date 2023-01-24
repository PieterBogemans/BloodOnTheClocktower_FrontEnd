import { Component, Injectable } from "@angular/core";
import { ClockTowerData } from "../config/data";
import { Script } from "./script";

@Injectable({
    providedIn: 'root',
  })
export default class ScriptService  {

    constructor(private data: ClockTowerData) {
    }
    
    ngOnInit(): void {
      this.getScripts();
    }

    getScripts() {
        this.data.http.get('/api/script', this.data.requestOptions).subscribe(data => {
            this.data.scripts = data as Script[];
        });
    }
}