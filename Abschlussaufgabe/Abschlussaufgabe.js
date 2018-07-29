/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    window.addEventListener("load", start);
    DrunkenSailor.superclass = [];
    DrunkenSailor.enemies = [];
    let imgData;
    // start Funktion
    function start(_event) {
        let button = document.getElementById("startButton");
        button.addEventListener("click", init);
        document.getElementById("drunkenSailor").style.display = "none";
        document.getElementById("startScreen").style.display = "initial";
    }
    // init Funktion
    function init(_event) {
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("drunkenSailor").style.display = "initial";
        DrunkenSailor.canvas = document.getElementsByTagName("canvas")[0];
        DrunkenSailor.crc2 = DrunkenSailor.canvas.getContext("2d");
        DrunkenSailor.canvas.addEventListener("click", shoot);
        // ruft Hintergrund auf
        DrunkenSailor.environment();
        //  speichert den Hintergrund in einer Variabel
        imgData = DrunkenSailor.crc2.getImageData(0, 0, DrunkenSailor.canvas.width, DrunkenSailor.canvas.height);
        // Aufruf der animate-Funktion
        animate();
        // Aufruf der Enemy-Funktion
        let triangle = new DrunkenSailor.Enemy1();
        DrunkenSailor.enemies.push(triangle);
        // Aufruf der Other-Funktion 
        let other = new DrunkenSailor.OtherStuff();
        DrunkenSailor.enemies.push(other);
        // Aufruf der ownShip-Funktion  HIER NOCH VARIABEL AUSTAUSCHEN
        let dot = new DrunkenSailor.Boat();
        DrunkenSailor.superclass.push(dot);
    }
    DrunkenSailor.init = init; // init
    function createObjects() {
        // Enemy- & Other-Funktion 
        let c = Math.floor(Math.random() * 3);
        switch (c) {
            case 0:
                let triangle = new DrunkenSailor.Enemy1();
                DrunkenSailor.enemies.push(triangle);
                break;
            case 1:
                let other = new DrunkenSailor.OtherStuff();
                DrunkenSailor.enemies.push(other);
                break;
        }
    }
    DrunkenSailor.createObjects = createObjects; // createObjects
    // Animate-Funktion
    function animate() {
        window.setTimeout(animate, 20);
        DrunkenSailor.crc2.clearRect(0, 0, DrunkenSailor.crc2.canvas.width, DrunkenSailor.crc2.canvas.height);
        DrunkenSailor.crc2.putImageData(imgData, 0, 0);
        drawObjects();
        moveObjects();
    }
    // Shoot Funktion 
    function shoot() {
        DrunkenSailor.bullet = new DrunkenSailor.Bullet();
        DrunkenSailor.superclass.push(DrunkenSailor.bullet);
    } //shoot
    // DrawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < DrunkenSailor.superclass.length; i++) {
            DrunkenSailor.superclass[i].draw();
        }
        for (let i = 0; i < DrunkenSailor.enemies.length; i++) {
            DrunkenSailor.enemies[i].draw();
        }
    } // DrawObjects
    // MoveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < DrunkenSailor.superclass.length; i++) {
            DrunkenSailor.superclass[i].move();
            DrunkenSailor.superclass[i].checkPosition();
        }
        for (let i = 0; i < DrunkenSailor.enemies.length; i++) {
            DrunkenSailor.enemies[i].move();
        }
    } // Moving Objects
})(DrunkenSailor || (DrunkenSailor = {})); // namespace
//# sourceMappingURL=Abschlussaufgabe.js.map