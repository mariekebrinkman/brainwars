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
        rpsGetal = Math.floor(Math.random() * 2);
        kleur = Math.round(Math.random());
        document.getElementById("groot").src = "images/" + rpsRij[rpsGetal] + ".png";
        document.getElementById("groot").style.backgroundColor = kleurRij[kleur];
     }
}
function keuze(symbool) {
    if (startSpel) {
        kleur = document.getElementById("groot").style.backgroundColor;
        symboolGroot = rpsRij[rpsGetal];
        if (kleur == "rgb(51, 204, 255)") { //blauw dus winnen}
            switch (symboolGroot) {
                case "schaar":
                    if (symbool == "steen") {
                        score++;
                    }
                    break;
                case "steen" :
                    if (symbool == "papier") {
                        score++
                    }
                    break;
                case "papier" :
                    if (symbool == "schaar") {
                        score++
                    }
                    break;
            }
        } else  {// roze dus verliezen
            switch (symboolGroot) {
                case "schaar":
                    if (symbool == "papier") {
                        score++;
                    }
                    break;
                case "steen" :
                    if (symbool == "schaar") {
                        score++
                    }
                    break;
                case "papier" :
                    if (symbool == "steen") {
                        score++
                    }
                    break;
            }
        }

        document.getElementById("score").value=score;
        toonRPS();            
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
