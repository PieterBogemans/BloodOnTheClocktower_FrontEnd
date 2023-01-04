import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.scss']
})
export class AddplayerComponent implements OnInit {

  model: Player = {};
  submitted = false;

  formData = {"username": "user", "password": "password"};

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*',
    'Authorization': 'Basic ' + btoa('user:password')
  });

  requestOptions = { 
    headers: this.headers     
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    console.log(this.model.name); 
    this.submitPlayer();
  }

  submitPlayer() {
    this.http.post<Object>('/api/player', this.model, this.requestOptions).subscribe();
    this.router.navigate(['/players']);
  }
}
