
var database;
var car1, car2, car3, car4, cars;
var gameState = 0,playerCount;

var form, game, player;
var allPlayers;

function setup(){
    createCanvas(displayWidth-30,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.readState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.writeState(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }

}
