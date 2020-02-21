var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var letterRij = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letter = "";
var toonRij = [];
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
    toonBord();
}

function toonBord() {
    if (startSpel) {
        toonRij = [];
        //genereer een rij met 8 verschillende letters;
        for (i=1;i<=8;i++) {
            var getal = Math.floor(Math.random() * 26);
            toonRij.push(letterRij[getal]);
        }
        //kies een willekeurige letter uit deze rij
        var getal = Math.floor(Math.random() * 8);
        letter = toonRij[getal];
       
        //shuffle de rij
        toonRij.sort(function(a, b){return 0.5 - Math.random()});
        //toon de rij op het scherm
        for (i=1;i<=8;i++) {
            document.getElementById("veld" + i).innerHTML = toonRij[i-1];
        }
        //toon de letter op het scherm
        document.getElementById("letter").innerHTML = letter;
    }
}
function keuze(id) {
    if (startSpel) {
        keuzeLetter = document.getElementById("veld"+ id).innerHTML
        if (keuzeLetter == letter) {
            score++;
            document.getElementById("score").value = score;
        }

        toonBord();            
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
