class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(120,0);

        
        this.input.position(120,50);

        
        this.button.position(120,100);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            
            this.greeting.html("Welcome " + player.name)
            this.greeting.position(120,30);
        })
        }
    }
