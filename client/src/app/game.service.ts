import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GameService {
  private _socket: SocketIOClient.Socket;
  private allPlayersSource = new Subject<any>();

  playersList: any;
  id: any;

  allPlayers$ = this.allPlayersSource.asObservable();

  constructor(private _game: HttpClient) {
    this._socket = io();

    this._socket.on('greeting', function(data){
      console.log(data.msg);
    });

    this._socket.on('player_list', function(data){
      console.log(" Got our player list: ",data);
      this.allPlayersSource.next(data);
    }.bind(this));

    this._socket.on('card_taken', function(data){
      console.log(" card added to hand: ",data);
      this.allPlayersSource.next(data);
    }.bind(this));
  
  }

  addPlayer(name) {
    this._socket.emit('player_name', name);
    console.log("This is the player name selected: ",name);
    this._socket.on('yourSocketId', (socketID)=> {
      this.id = socketID;
      console.log("Socket ID is: ",this.id);
    })
  }

  grabCard(card) {
    this._socket.emit('grab_card', card);
    console.log("This is the card selected: ",card);
    
  }
  // startGame(flip){
  //   this._socket.emit('game_started',flip);

  // }
}
