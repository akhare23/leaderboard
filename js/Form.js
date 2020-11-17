class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.resetButton = createButton("reset");
        this.leaderboard = createElement("h2");
        this.leaderboard1 = createElement("h2");
        this.leaderboard2 = createElement("h2");
        this.leaderboard3 = createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(displayWidth/2-75,0);

        this.leaderboard.html("Leaderboard");
        this.leaderboard.position(100,100);
        this.leaderboard1.html("Leaderboard");
        this.leaderboard1.position(100,150);
        this.leaderboard2.html("leaderboard");
        this.leaderboard2.position(100,200);
        this.leaderboard3.position(100,250);
        if(gameState === 1 || gameState === 0){
            this.leaderboard.hide();
            this.leaderboard1.hide();
            this.leaderboard2.hide();
            this.leaderboard3.hide();
        }

        
        this.input.position(displayWidth/2,displayHeight/2-40);

        this.resetButton.position(displayWidth/6,50);
        
        this.button.position(displayWidth/2,displayHeight/2+60);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            
            this.greeting.html("Welcome " + player.name)
            this.greeting.position(displayWidth/2,displayHeight/2-40);
        })

        this.resetButton.mousePressed(()=>{
            //update the database to set playercount and gamestate to 0
            player.updateCount(0);
            game.writeState(0);
            Player.updateCarsAtEnd(0);
            location.reload();
        })
        }
    }
