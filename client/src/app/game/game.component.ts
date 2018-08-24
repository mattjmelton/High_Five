import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  player = "";
  allPlayers = [];
  socketID = '';
  @Output() flipSwitch = new EventEmitter();

  constructor(private _game: GameService,
              private _router: Router) {
    _game.allPlayers$.subscribe(players => {
      console.log(" inside the allplayers subscription ", players)
      this.allPlayers = players;
      for (const i in this.allPlayers){
        console.log(this.allPlayers[i].name);
        if(this.allPlayers[i].name == this.player){
          this.socketID = this.allPlayers[i]['socketID'];
        }
      }
    })
  }

  ngOnInit() {
  }

  joinPlayer(player){
    this.player = player;
    console.log("This is the player selected: ",this.player);
    this._game.addPlayer(this.player);
  }
  triggerEvent() {
    this.flipSwitch.emit();
    // ng this._game.startGame(this.flipSwitch);
  }
}
