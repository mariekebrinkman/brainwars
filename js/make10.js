var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var getalRij = [];
var getal1=0;
var getal2=0;

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
    toonGetallen();
}

function toonGetallen() {
    if (startSpel) {
        getalRij = [];
        var getal = Math.floor(Math.random() * 9)+1;
        getalRij.push(getal);
        var getal = 10-getal;
        getalRij.push(getal);
        var getal = Math.floor(Math.random() * 9)+1;
        getalRij.push(getal);
        //schud de rij
        getalRij.sort(function(a, b){return 0.5 - Math.random()});
        for (i=1;i<=3;i++) {
            document.getElementById("kaart"+i).innerHTML = getalRij[i-1];
        }
    }
}
function keuze(id) {
    if (startSpel) {
        if (getal1==0) {
            getal1= parseInt(document.getElementById("kaart"+id).innerHTML);
        } else {
            getal2 = parseInt(document.getElementById("kaart"+id).innerHTML);
        }
        document.getElementById("kaart"+id).style.backgroundColor = "#33ccff"
        if (getal2 != 0) {
            var antwoord = getal1 + getal2;
            if (antwoord == 10) {
                score++;
                document.getElementById("score").value = score;
            }
            getal1= 0;
            getal2=0;
            //maak alle kaarten weer lichtblauw na 100 msec
            setTimeout(reset,100);
        }
    
    }

}
function reset() {
    for (i=1;i<=3;i++) {
        document.getElementById("kaart"+i).style.backgroundColor = "azure";
    }
    toonGetallen();
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
