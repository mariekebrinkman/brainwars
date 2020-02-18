<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/style_<?php echo $_GET["spel"];?>.css">
    <script src="js/<?php echo $_GET["spel"]?>.js"></script>
    <title>Document</title>
</head>
<body>
<header> 
    <?php include "menu.php"?>   
</header>
<main>
    
    <div id="spel">
        <?php include "includes/" . $_GET["spel"].".html";?>
    </div>
    <div id="scorebord">
        <div id="over">Tijd is om!!</div>
        <form method="POST">
            <input type=number id="score" name="score" value=0 readonly>
            <input type="submit" name="opslaan" value="Opslaan">    
        </form>
        <button id="start" onclick="start()">Start</button>
        <div id="tijdTekst">Tijd: <span id="tijd">0</span></div>
    </div>

</main>
<footer>
    
</footer>

</body>
</html>