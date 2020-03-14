let ageindayss;
function ageindays() {
    let age = prompt("Enter your birth year");
    ageindayss = (2018 - age) * 365;
    console.log(ageindayss);
    var h1 = document.createElement('h1');
    var text = document.createTextNode("You are " + ageindayss + " Days old");
    h1.setAttribute('id', 'ageinday');
    h1.appendChild(text);
    document.getElementById('ageindayss').appendChild(h1);
    console.log(h1);
}

function reset(){
    document.getElementById('ageinday').remove();
}

