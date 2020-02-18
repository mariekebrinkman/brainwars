var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var huidigImg = 1;
var vorigImg = 1;

function start() {
    startSpel=true;
    score=0;
    tijd=0;
    document.getElementById("score").value=score;
    document.getElementById("tijd").innerHTML = tijd;
    document.getElementById("start").disabled = true;
    document.getElementById("over").style.display = "none";
    document.getElementById("anders").disabled = false;
    document.getElementById("zelfde").disabled = false;
    huidigImg =1;    
    //start tijd
    interval= setInterval(toonTijd,1000);
    timeOut = setTimeout(eindeSpel,30000);
    toonImg();
}

function toonImg() {
    if (startSpel) {
        vorigImg = huidigImg;
        huidigImg = Math.floor(Math.random() * 5)+1;
        document.getElementById("plaatje").src = "images/rapid" + huidigImg + ".png";
     }
}
function keuze(kant) {
    if (startSpel) {
        if (kant=="zelfde") {
            if (vorigImg == huidigImg) {
                score++;
            }
        } else {
            if (vorigImg != huidigImg) {
                score++;
            }
        }
        document.getElementById("score").value=score;
        toonImg();            
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
    startSpel = false;
    document.getElementById("over").style.display = "block";
    document.getElementById("plaatje").src = "images/rapid1.png";
}
