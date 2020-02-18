var elementInTabel =[];
var onweerImg ='<img id="onweer" src="images/onweer.png">';
var regenImg = '<img id="regen" src="images/regen.png">';
var kolomInTabel =[];
var score=0;
var timeOut, interval;
var tijd=0;

function start() {
    plaatsNieuwElement();
    score=0;
    tijd=0;
    document.getElementById("score").value=score;
    document.getElementById("tijd").innerHTML = tijd;
    document.getElementById("links").disabled = false;
    document.getElementById("rechts").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("over").style.display = "none";
    
    //start tijd
    interval= setInterval(toonTijd,1000);
    timeOut = setTimeout(eindeSpel,30000);
}

function maakBordLeeg () {
    for (var i=1;i<=4;i++) {
        document.getElementById("R" +i + "links").innerHTML="";
        document.getElementById("R" +i + "rechts").innerHTML="";

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
    document.getElementById("links").disabled = true;
    document.getElementById("rechts").disabled = true;
    document.getElementById("over").style.display = "block";
}

function plaatsNieuwElement() {
    kolom= Math.round(Math.random());
    if (kolom==0 ) {
        kolom= "links";
    } else {
        kolom="rechts"
    }
    element = Math.round(Math.random());
    if (element==1) {
        document.getElementById("R1" + kolom).innerHTML = onweerImg;
        elementInTabel.unshift("onweer");
    } else {
        document.getElementById("R1" + kolom).innerHTML = regenImg;
        elementInTabel.unshift("regen");
    }
    kolomInTabel.unshift(kolom);
 
}

function verplaats(kant) {
    document.getElementById(kant).innerHTML= '<img id="paraplu" src="images/paraplu.png">';    
    if (kant=="links") {
        document.getElementById("rechts").innerHTML="";
    } else {
        document.getElementById("links").innerHTML="";
    }
    //verplaats elementen
    for (i=4;i>1;i--) {
        document.getElementById("R"+ i + "links").innerHTML =
        document.getElementById("R" + (i-1) + "links").innerHTML;
        document.getElementById("R" + (i-1) + "links").innerHTML ="";
        document.getElementById("R"+ i + "rechts").innerHTML =
        document.getElementById("R" + (i-1) + "rechts").innerHTML;
        document.getElementById("R" + (i-1) + "rechts").innerHTML ="";

    }
    //controleer of de paraplu goed staat
    if (elementInTabel.length == 4) {
    
        if (elementInTabel[3] == "regen") {
            if (kolomInTabel[3] ==  kant ) {
                //ok
                score++;
            } else {
                //fout
            }
        } else {
            if (kolomInTabel[3] !=  kant ) {
                //ok
                score++;
            } else {
                //fout
            }

        }
    }
        //verwijder laatste element
    if (elementInTabel.length == 4) {
        kolomInTabel.pop();
        elementInTabel.pop();
    }

    //plaats nieuw element
    plaatsNieuwElement();
    //toon score
    document.getElementById("score").value=score;
}