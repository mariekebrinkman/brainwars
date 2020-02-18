<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="">
    <script src=""></script>
    <title>Document</title>
</head>
<body>
<header> 
    <?php include "menu.php"?>   
</header>
<main>
    
    <div id="spel">
        <?php include ""?>
    </div>
    <div id="scorebord">
        <form method="POST">
            <input type=number id="score" name="score" value=1 readonly>
            <input type="submit" name="opslaan" value="Opslaan">    
        </form>
        <button id="opnieuw" onclick="opnieuw()">Opnieuw</button>
        <button id="start" onclick="start()">Start</button>
        <div id="tijd">0</div>
    </div>

</main>
<footer>
    
</footer>

</body>
</html>