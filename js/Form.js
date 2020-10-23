class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(120,0);

        var input = createInput("name");
        input.position(120,50);

        var button = createButton("play");
        button.position(120,100);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement("h3");
            greeting.html("Welcome " + name)
            greeting.position(120,30);
        })
        }
    }
