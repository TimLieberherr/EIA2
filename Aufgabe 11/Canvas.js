/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let canvas;
    let imgData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFlakes);
        //Seaworld Background - in extra TypeScript-Dokument (Background.ts)
        Aufgabe11.environment();
        //For-Schleife für die Fische
        for (let i = 0; i < 9; i++) {
            let fish = new Aufgabe11.Fish();
            movingObjects.push(fish);
        }
        //For-Schleife für die Luftblasen
        for (let i = 0; i < 10; i++) {
            let bubbles = new Aufgabe11.BubbleOne();
            movingObjects.push(bubbles);
        }
        for (let i = 0; i < 8; i++) {
            let bubbles = new Aufgabe11.BubbleTwo();
            movingObjects.push(bubbles);
        }
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //Futterflocken-Funktion
    function insertFlakes(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let flakes = new Aufgabe11.Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            //Bereich, in dem die Futterflocken liegen bleiben, damit sie nicht auf einer Linie liegen
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    }
    //Animations-Function
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    //MoveObjects-Function
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    //DrawObjects-Function
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Canvas.js.map