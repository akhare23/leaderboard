
var database;

var gameState = 0,playerCount;

var form, game, player;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.readState();
    game.start();
}

function draw(){
    
}
