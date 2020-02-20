var elementInTabel =[];
//roze, blauw
var kleurRij = ["rgb(216, 112, 147", "rgb(51, 204, 255)"]
var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var antwoord=0;
var antwoordRij = [];
var getalL=0;
var getalR = 0;

function start() {
    startSpel=true;
    score=0;
    tijd=0;
    document.getElementById("score").value=score;
    document.getElementById("tijd").innerHTML = tijd;
    document.getElementById("start").disabled = true;
    document.getElementById("antwoorden").disabled= false;
    document.getElementById("over").style.display = "none";
    //start tijd
    interval= setInterval(toonTijd,1000);
    timeOut = setTimeout(eindeSpel,30000);
    bepaalKaartKleur();
}

function bepaalKaartKleur() {
    if (startSpel) {
        kleurL = Math.round(Math.random());
        document.getElementById("kaartL").style.backgroundColor = kleurRij[kleurL];
        getalL = Math.round(Math.random() * 10 );
        document.getElementById("kaartL").innerHTML = getalL;

        kleurR  = Math.round(Math.random());
        document.getElementById("kaartR").style.backgroundColor = kleurRij[kleurR];
        getalR = Math.round(Math.random() * 10 );
        document.getElementById("kaartR").innerHTML = getalR;
    }
}
function toonAntwoorden() {
    if (startSpel) {
        if (kleurL == kleurR) {
            antwoord = getalL + getalR;
        } else {
            antwoord = getalL - getalR;
        }
        antwoordRij.push(antwoord);
        for (i=1;i<=3;i++) {
            antwoordRij.push(Math.round(Math.random()*20));
        }
        //schud de rij
        antwoordRij.sort(function(a, b){return 0.5 - Math.random()});
        for (i=1;i<=4;i++) {
            document.getElementById("kaart" + i).innerHTML = antwoordRij[i-1];
        }
    }
}
function keuze(veld) {
    if (startSpel) 
        keuzeWaarde = document.getElementById(veld).innerHTML;
        if (keuzeWaarde == antwoord) {
            score++;
            document.getElementById("score").value = score;
        }
        bepaalKaartKleur();
        for (i=1;i<=4;i++) {
            document.getElementById("kaart" + i).innerHTML = "";
        }
        antwoordRij = [];
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
    document.getElementById("antwoorden").disabled= true;
    startSpel = false;
    document.getElementById("over").style.display = "block";
}
