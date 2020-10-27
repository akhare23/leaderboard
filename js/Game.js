class Game{
    constructor(){

    }
    readState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    writeState(state){
        database.ref("/").update({
            gameState:state,
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        stroke("blue");
        fill("blue");
        text("Game Starting",100,100);
        Player.getPlayerInfo();

        if(allPlayers!== undefined){
            var yPosition = 100;
            for(var i in allPlayers){
                yPosition += 20;
                if(i === "player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                textSize(20);
                text(allPlayers[i].name + " : " + allPlayers[i].distance, 100, yPosition);
                
            }
        } 
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }
    }
}