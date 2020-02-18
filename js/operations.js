var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var getal1=0;
var getal2=0;
var operatorRij = ["+", "-", "x", "/"]
var antwoord =0;
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
        getal1 = Math.floor(Math.random() * 9)+1;
        getal2 = Math.floor(Math.random() * 9)+1;
        operator = operatorRij[Math.floor(Math.random()*4)]
        switch (operator) {
        case "+" : 
            antwoord = getal1+getal2;
            break;
        case "-" : 
            antwoord = getal1-getal2;
            break;
        case "x" : 
            antwoord = getal1*getal2;
            break;
        case "/" : 
            antwoord = Math.round((getal1/getal2)*10)/10;
            break;
        }
        //toon som
        document.getElementById("getal1").innerHTML = getal1;
        document.getElementById("getal2").innerHTML = getal2;
        document.getElementById("antwoord").innerHTML= antwoord;
    }
}
function check(teken) {
    if (startSpel) {
        if (teken == operator) {
            score++;
            document.getElementById("score").value = score;
        }
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
