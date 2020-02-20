var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var rpsRij = ["papier", "steen", "schaar"];
var rpsGetal;
//roze, blauw
var kleurRij = ["rgb(216, 112, 147)", "rgb(51, 204, 255)"];


function start() {
    startSpel=true;
    score=0;
    tijd=0;
    document.getElementById("score").value=score;
    document.getElementById("tijd").innerHTML = tijd;
    document.getElementById("start").disabled = true;
    document.getElementById("over").style.display = "none";
    //start tijd
    interval= setInterval(toonTijd,1000);
    timeOut = setTimeout(eindeSpel,30000);
    toonRPS();
}

function toonRPS() {
    if (startSpel) {
        document.getElementById("computer").style.backgroundColor =  "rgb(51, 204, 255)";
        document.getElementById("speler").style.backgroundColor =  "rgb(51, 204, 255)";
        document.getElementById("computer").src = "images/vraagteken.png";
        document.getElementById("speler").src = "images/vraagteken.png";
     }
}

function keuze(symbool)
{
    if (startSpel) {

        document.getElementById("computer").src = "images/vraagteken.png";
        document.getElementById("speler").src = "images/vraagteken.png";
        //vul het plaatje met de keuze van de speler
        document.getElementById("speler").src = "images/" + symbool + ".png";

        //vul het computer plaatje met de keuze van de computer (rpsGetal) en pas de kleur aan als gewonnen of verloren
        rpsGetal = Math.floor(Math.random() * 2);
        document.getElementById("computer").src = "images/" + rpsRij[rpsGetal] + ".png";

        symboolGroot = rpsRij[rpsGetal];

        switch (symboolGroot) {
            case "schaar":
                if (symbool == "steen") {
                    win();
                }
                else if (symbool == "papier") {
                    loose();
                }
                else
                {
                    equal();
                }
                break;

            case "steen" :
                if (symbool == "schaar") {
                    win();
                }
                else if (symbool == "papier") {
                    loose();
                }
                else
                {
                    equal();
                }
                break;

            case "papier" :
                if (symbool == "steen") {
                    win();
                }
                else if (symbool == "schaar") {
                    loose();
                }
                else
                {
                    equal();
                }
                break;
        }
        //setTimeout(toonRPS, 3000);
    }
}

function win()
{
    score++;
    document.getElementById("speler").style.backgroundColor =  "green";
    document.getElementById("computer").style.backgroundColor =  "red";
    document.getElementById("score").value=score;
}

function loose()
{
    document.getElementById("speler").style.backgroundColor =  "red";
    document.getElementById("computer").style.backgroundColor =  "green";  
}

function equal()
{
    document.getElementById("speler").style.backgroundColor =  "white";
    document.getElementById("computer").style.backgroundColor =  "white";  
}

function toonTijd() {
    tijd++;
    document.getElementById("tijd").innerHTML = tijd;
}
function interval() {
    tijd++
    document.getElementById("tijd") = tijd;
}
function eindeSpel() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    startSpel = false;
    document.getElementById("over").style.display = "block";
}
