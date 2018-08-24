import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  switch: Boolean;
  constructor(private _game: GameService){}

  ngOnInit(){
    this.switch = true;
  }
  flipSwitch(){
    this.switch = false;
  }
}
