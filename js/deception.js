var elementInTabel =[];
var kleurRij = ["red", "orange", "green", "blue"];
var kleurRijTekst = ["red","orange", "green", "blue"];
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
    
    //start tijd
    interval= setInterval(toonTijd,1000);
    timeOut = setTimeout(eindeSpel,30000);
    vulBord();
}

function vulBord() {
    if (startSpel) {
        kleurRij.sort(function(a, b){return 0.5 - Math.random()});
        kleurRijTekst.sort(function(a, b){return 0.5 - Math.random()});
        for (i=0;i<4;i++) {
            document.getElementById("knop"+ i).style.backgroundColor = kleurRij[i];
            document.getElementById("knop"+ i).innerHTML = kleurRijTekst[i];
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
    var veld = "knop" + id;
    if (startSpel) {
        if (kleurRij[id] == kleurRijTekst[id]) {
            //ok
            score++;
        }
        document.getElementById("score").value=score;
        vulBord();
    }
}

function geen() {
    console.log(kleurRij);
    console.log(kleurRijTekst);
    var geenCombi = true;
    for (i=0;i<4;i++) {
        if (kleurRij[i] ==  kleurRijTekst[i]) {
            geenCombi= false;
        }
    }
    if (geenCombi) {
        score++;
    }
    document.getElementById("score").value=score;
    vulBord();
}