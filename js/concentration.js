var elementInTabel =[];
var score=0;
var timeOut, interval;
var tijd=0;
var kaart1="";
var kaart2="";
var symboolRij= ["@","@", "%", "%", "$", "$"];
var draaiOm = false;
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
    document.getElementById("draai").disabled=false;
}

function vulBord() {
    if (startSpel) {
        symboolRij.sort(function(a, b){return 0.5 - Math.random()});
        for (i=0;i<6;i++) {
            document.getElementById("kaart"+ i).innerHTML = symboolRij[i];
        }
    }
    for (i=0;i<6;i++) {
        document.getElementById("kaart" + i).style.backgroundColor = "#a4e6fc";
    }
}
function draai () {
    for (i=0;i<6;i++) {
        document.getElementById("kaart"+ i).innerHTML = "";
    }
    draaiOm = true;
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
    document.getElementById("draai").disabled = true;
    draaiOm = false;
    startSpel = false;
    document.getElementById("over").style.display = "block";
}
var aantalKaartenGoed=0;
var kaartId1;
var kaartId2;

function keuze(id) {
    var tweeKaarten=false;
    if (draaiOm) {
        if (kaart1 =="") {
            kaart1 = symboolRij[id];
            document.getElementById("kaart" + id).innerHTML = kaart1;
            kaartId1 = id;
        } else {
            kaart2 = symboolRij[id];
            document.getElementById("kaart" + id).innerHTML = kaart2;
            tweeKaarten = true;
            kaartId2 = id;
        }
        if (tweeKaarten) {
            if( kaart1==kaart2) {
                //goed
                score++;
                document.getElementById("score").value=score;
                //verwijder kaarten na 0,5 sec
                setTimeout(draaiTerugGoed, 200);
                aantalKaartenGoed++;
            } else {
                //draai de kaarten weer terug na 1 sec
                setTimeout(draaiTerug,200);
            }
            tweeKaarten=false;
            kaart1="";
            kaart2="";
        }
    }
    if (aantalKaartenGoed ==3 ) {
        //maak nieuw bord
        setTimeout(vulBord,200);
        draaiOm = false;
        aantalKaartenGoed =0;
    }
}
function draaiTerug(){
    document.getElementById("kaart" + kaartId1).innerHTML = "";
    document.getElementById("kaart" + kaartId2).innerHTML = "";

}

function draaiTerugGoed() {
    document.getElementById("kaart" + kaartId1).style.backgroundColor= "linen";
    document.getElementById("kaart" + kaartId2).style.backgroundColor= "linen";
    document.getElementById("kaart" + kaartId1).innerHTML = "";
    document.getElementById("kaart" + kaartId2).innerHTML = "";
}