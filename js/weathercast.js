var score=0;
var timeOut, interval;
var tijd=0;
var startSpel=false;
var weerRij = ["druppelBlauw", "druppelGeel", "druppelGrijs", "wolkBlauw", "wolkGeel", "wolkGrijs", "zonBlauw", "zonGeel", "zonGrijs"];
var weer;

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
    toonWeer();
}

function toonWeer() {
    if (startSpel) {
        var weerGetal = Math.floor(Math.random() * 9);
        weer = weerRij[weerGetal];
        document.getElementById("weer").src = "images/" + weer + ".png";
     }
}
function keuze(symbool) {
    if (startSpel) {
        switch (symbool) {
            case "druppelBlauw":
                if (weer == "druppelBlauw"  || weer == "zonGrijs" || weer == "wolkGeel") {
                    score++;
                }
                break;
            case "wolkGrijs" :
                if (weer =="wolkGrijs" || weer == "zonBlauw" || weer == "druppelGeel") {
                    score++
                }
                break;
            case "zonGeel" :
                if (weer == "zonGeel" || weer == "druppelGrijs" || weer == "wolkBlauw") {
                    score++
                }
                break;
        }

        document.getElementById("score").value=score;
        toonWeer();            
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
