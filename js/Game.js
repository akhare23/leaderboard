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
        car1 = createSprite(100,100,50,50);
        car2 = createSprite(200,100,50,50);
        car3 = createSprite(300,100,50,50);
        car4 = createSprite(400,100,50,50);

        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
       
        Player.getPlayerInfo();

        if(allPlayers!== undefined){
           var index = 0;
           var x = 0;
           var y = 0;
            for(var i in allPlayers){
                index+=1;
                x = x+200;
                y=displayHeight-allPlayers[i].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index===player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        } 
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }

        drawSprites();
    }
}