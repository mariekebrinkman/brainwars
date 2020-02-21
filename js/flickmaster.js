var elementInTabel =[];
var pijlRij = ["pijlLinksRoze.png", "pijlLinksBlauw.png", "pijlRechtsRoze.png", "pijlRechtsBlauw.png"];
var pijlKlikRij = ["L","R", "R", "L"];
var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;

function start() {
    startSpel=true;
    score=0;
    tijd=0;
    document.getElementById("score").value=score;
    document.getElementById("tijd").innerHTML = tijd;
    document.getElementById("start").disabled = true;
    document.getElementById("over").style.display = "none";
    document.getElementById("links").disabled = false;
    document.getElementById("rechts").disabled = false;
    
    //start tijd
    interval= setInterval(toonTijd,1000);
    timeOut = setTimeout(eindeSpel,30000);
    toonPijl();
}
var keuze=0;
function toonPijl() {
    if (startSpel) {
        keuze = Math.floor(Math.random() * 3);
        document.getElementById("pijlImg").src = "images/" + pijlRij[keuze];
    }
}
function kant(richting) {
    if (startSpel) {
        if (pijlKlikRij[keuze] == richting) {
            score++;
        }
    
        document.getElementById("score").value = score;
        toonPijl();
    }
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
    document.getElementById("links").disabled = true;
    document.getElementById("rechts").disabled = true;
    startSpel = false;
    document.getElementById("over").style.display = "block";
}
