import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  switch: boolean = false;
  switch2: boolean = false;
  cardOne: any;
  cardTwo: any;
  cardTaken: any;

  constructor(private _playgame: GameService) { }

  ngOnInit() {
    this.cardOne = {left: this.cardPositionX(), top: this.cardPositionY(), val: this.cardVal()};
    this.cardTwo = {left: this.cardPositionX(), top: this.cardPositionY(), val: this.cardVal()};
  }

  
  cardPositionY() {
    return Math.floor(Math.random() * (408 - 10 + 1)) + 10;
  }
  cardPositionX() {
    return Math.floor(Math.random() * (636 - 10 + 1)) + 10;
  }

  cardVal() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  }

  takeCard(val){
    this.cardTaken = val;
    console.log("this is the card that was taken", this.cardTaken);
    this._playgame.grabCard(this.cardTaken);
  }
// INCLUSIVE
// getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
}
