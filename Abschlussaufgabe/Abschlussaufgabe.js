/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    window.addEventListener("load", init);
    DrunkenSailor.superclass = [];
    DrunkenSailor.enemies = [];
    let imgData;
    function init(_event) {
        DrunkenSailor.canvas = document.getElementsByTagName("canvas")[0];
        DrunkenSailor.crc2 = DrunkenSailor.canvas.getContext("2d");
        DrunkenSailor.canvas.addEventListener("click", shoot);
        // Hintergrund des Spiels
        DrunkenSailor.environment();
        // Hintergrund in einer Variablen speichern
        imgData = DrunkenSailor.crc2.getImageData(0, 0, DrunkenSailor.canvas.width, DrunkenSailor.canvas.height);
        // Dot in das Array "superclass" pushen  
        //        let dot: Dot = new Dot();
        //        superclass.push(dot);
        // Aufruf der animate-Funktion
        animate();
        let triangle = new DrunkenSailor.Triangle();
        DrunkenSailor.enemies.push(triangle);
        let other = new DrunkenSailor.OtherStuff();
        DrunkenSailor.enemies.push(other);
        let dot = new DrunkenSailor.Dot(); //Zu Schiff umändern
        DrunkenSailor.superclass.push(dot);
    } // init
    function createObjects() {
        let c = Math.floor(Math.random() * 2);
        switch (c) {
            case 0:
                let triangle = new DrunkenSailor.Triangle();
                DrunkenSailor.enemies.push(triangle);
                break;
            case 1:
                let other = new DrunkenSailor.OtherStuff();
                DrunkenSailor.enemies.push(other);
                break;
        }
    }
    DrunkenSailor.createObjects = createObjects;
    // Animate-Funktion
    function animate() {
        window.setTimeout(animate, 15);
        DrunkenSailor.crc2.clearRect(0, 0, DrunkenSailor.crc2.canvas.width, DrunkenSailor.crc2.canvas.height);
        DrunkenSailor.crc2.putImageData(imgData, 0, 0);
        drawObjects();
        moveObjects();
    }
    //Schießen Kugel
    function shoot() {
        DrunkenSailor.bullet = new DrunkenSailor.Bullet();
        DrunkenSailor.superclass.push(DrunkenSailor.bullet);
    }
    // DrawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < DrunkenSailor.superclass.length; i++) {
            DrunkenSailor.superclass[i].draw();
        }
        for (let i = 0; i < DrunkenSailor.enemies.length; i++) {
            DrunkenSailor.enemies[i].draw();
        }
    }
    // MoveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < DrunkenSailor.superclass.length; i++) {
            DrunkenSailor.superclass[i].move();
            DrunkenSailor.superclass[i].checkPosition();
        }
        for (let i = 0; i < DrunkenSailor.enemies.length; i++) {
            DrunkenSailor.enemies[i].move();
        }
    }
})(DrunkenSailor || (DrunkenSailor = {})); // closing namespace
//# sourceMappingURL=Abschlussaufgabe.js.map