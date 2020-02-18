var elementInTabel =[];
var kleurRij = ["#33ccff", "#32cd32"]
var score=0;
var timeOut, interval;
var tijd=0;
var aantalGroen=0;
var aantalBlauw=0;
var startSpel=false;
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
    vulBord();
}

function vulBord() {
    if (startSpel) {
        for (i=1;i<=9;i++) {
            var getal = Math.round(Math.random());
            document.getElementById("veld"+ i).style.backgroundColor = kleurRij[getal];
            if (getal==0) {
                aantalBlauw++;
            } else {
                aantalGroen++;
            }
        }
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
}

function keuze(id) {
    var veld = "veld" + id;
    if (startSpel) {
        if (document.getElementById(veld).style.backgroundColor == "rgb(50, 205, 50)") {
            //groen
            if (aantalGroen > aantalBlauw) {
                score++;
            }
        } else {
            if (aantalBlauw > aantalGroen) {
                //ok
                score++;
            }
        }
        document.getElementById("score").value=score;
        aantalGroen=0;
        aantalBlauw=0;
        vulBord();
    }
}