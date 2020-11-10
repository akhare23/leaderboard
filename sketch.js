
var database;
var car1, car2, car3, car4, cars;
var gameState = 0,playerCount;
var car1Image, car2Image, car3Image, car4Image;
var track, ground;

var form, game, player;
var allPlayers;

function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
    track = loadImage("images/track.jpg");
}
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
    if(gameState===2){
        game.end();
    }
}
