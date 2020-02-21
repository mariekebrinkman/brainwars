var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var aantalGetallen=0
var som="";
var antwoordRij=[];
var antwoord=0;
var operator = ["+", "-"];

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
    toonSom();
}

function toonSom() {
    if (startSpel) {
        antwoordRij = [];
        som = "";
        //2 3 of 4 getallen
        aantalGetallen = Math.round(Math.random()*2)+2;  
        for (i=1;i<=aantalGetallen;i++) {
            getal = Math.floor(Math.random()*9+1);
            som += getal;
            if (i<aantalGetallen){
                getal = Math.round(Math.random());
                som += operator[getal];
            }
        }
        antwoord= eval(som);
        antwoordRij.push(antwoord);
        for (i=1;i<=3;i++) {
            antwoordRij.push(Math.floor(Math.random()*36+1))
        }
        //schud antwoord
        antwoordRij.sort(function(a, b){return 0.5 - Math.random()});
        document.getElementById("som").innerHTML = som + "=";
        for (i=1;i<=4;i++) {
            document.getElementById("kaart"+i).innerHTML = antwoordRij[i-1];
        }
    }
}
function keuze(kaart) {
    if (startSpel) {
        waarde = document.getElementById(kaart).innerHTML;
        if (waarde == antwoord) {
            score++;
        }
        document.getElementById("score").value=score;
        toonSom();            
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
