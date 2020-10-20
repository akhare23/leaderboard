var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ballPositionRef = database.ref("ball/position");
    ballPositionRef.on("value",readPosition, showError);
}

function draw(){
    background("white");

    if(position!==undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    }
}

function writePosition(a,b){
    var ballPositionRef = database.ref("ball/position");
    ballPositionRef.set({
        x:ball.x + a,
        y:ball.y + b
    }
    );
}
function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
    console.log(position);
}
function showError(){
    console.log("error");
}
