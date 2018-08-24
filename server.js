const express = require("express");
const app = express();

const server = app.listen(8000, function(){
    console.log("listening on port 8000");
});
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/client/dist/client"));

class Player {
    constructor(name, socketID){
        this.name = name;
        this.socketID = socketID;
        this.hand = hand;
        this.card = card;
    }
}

let allPlayers = [];

io.on('connection', function(socket){
    // var thisPlayer;
    console.log("user connected");

    socket.on('disconnect', function(){
        console.log('user disconnected');
    })
    //upon new connection player will receive greeting
    socket.emit('greeting', {msg:'Welcome to HighFive. Select a character from the list.'});
    
    //listen for player_name event and then broadcast to all clients the player_listed event
    socket.on('player_name', function(name){
        // thisPlayer = name;
        // console.log("In the player name event ",thisPlayer);
        socket.emit('yourSocketId',socket.id);
        let newPlayer = new Player(name, socket.id, hand=0, card=0);
        allPlayers.push(newPlayer);
        io.emit('player_list', allPlayers);
        console.log(allPlayers);
    });
    // socket.on('game_started',flip);
    //     io.emit('start_game',flip);
    // listen for the grab_card event and then broadcast to all clients the card_taken event
    socket.on('grab_card', function(data){
        this.card = data;
        allPlayers.hand += 1;
        allPlayers.card = this.card;
        socket.emit('card_taken',allPlayers);
    });
    // //listen for winner_is event and then broadcast to all clients the game_over event
    // socket.on('winner_is', function(data){
    //     playerID = data;
    //     io.emit('game_over', {playerID});
    // });

})
