function rps(choice) {
    let arr = ['rock', 'paper', 'scissors'];
    let userchoice = choice.id;
    let img = document.createElement('img');
    img.src = choice.src;
    img.id = "user";
    img.style = "box-shadow: 0px 18px 50px rgba(37, 50, 233, 1);";
    img.height = img.width = 150;
    let botchoice = arr[Math.floor((Math.random() * 3))];
    let win = whowon(userchoice, botchoice);
    let bot = document.getElementById(botchoice);
    let flex = document.getElementById('flex-box');
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    flex.appendChild(img);
    bot.style = "box-shadow: 0px 18px 50px red;";
    var h1 = document.createElement('h1');
    var text;
    if (win == 0.5) {
        text = document.createTextNode("Draw");
        h1.setAttribute("style", "color:blue;");
    } else if (win == 1) {
        text = document.createTextNode("You Won");
        h1.setAttribute("style", "color:green;");
    } else {
        text = document.createTextNode("You Lost");
        h1.setAttribute("style", "color:red;");
    }
    h1.id = "status";
    bot.id = "bot";
    bot.onclick = "";
    h1.appendChild(text);
    flex.appendChild(h1);
    flex.appendChild(bot);
}

function whowon(userchoice, botchoice) {
    if (userchoice == botchoice) return 0.5;
    else if ((userchoice == 'rock' && botchoice == 'scissors') || (userchoice == 'scissors' && botchoice == 'paper') || (userchoice == 'paper' && botchoice == 'rock')) return 1;
    else return 0;
}

function reset() {
    if (document.getElementById('user') != null) {
        document.getElementById('user').remove();
        document.getElementById('status').remove();
        document.getElementById('bot').remove();
        var rock = document.createElement('img');
        rock.src = "https://i.ya-webdesign.com/images/rocks-clipart-animated-2.jpg";
        rock.id = "rock";
        var paper = document.createElement('img');
        paper.src = "https://i.pinimg.com/originals/5f/11/43/5f11435077b9d633d0066916e6b9ebfe.jpg";
        paper.id = "paper";
        var scissors = document.createElement('img');
        scissors.src = "https://image.shutterstock.com/image-vector/metal-scissors-blue-handlessewing-tailoring-260nw-619566383.jpg";
        scissors.id = "scissors";
        rock.onclick = paper.onclick = scissors.onclick = function () { rps(this); };
        rock.height = rock.width = paper.height = paper.width = scissors.height = scissors.width = 150;
        let flex = document.getElementById('flex-box');
        flex.appendChild(rock);
        flex.appendChild(paper);
        flex.appendChild(scissors);
    }
}