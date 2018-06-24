/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fishGroup = [];
    let bubbles1 = [];
    let bubbles2 = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10.crc2);
        //Seaworld Background
        environment();
        //For-Schleife für die Fische
        for (let i = 0; i < 9; i++) {
            let fish = new Aufgabe10.Fish();
            fish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe10.crc2.canvas.height;
            fishGroup.push(fish);
        }
        //For-Schleife für die Luftblasen
        for (let i = 0; i < 10; i++) {
            let bubbles = new Aufgabe10.BubblesOne();
            bubbles.x = Math.random() * (350 - 265) + 300;
            bubbles.y = Math.random() * 400;
            bubbles.scale = Math.random() * 8;
            bubbles1.push(bubbles);
        }
        for (let i = 0; i < 8; i++) {
            let bubbles = new Aufgabe10.BubblesTwo();
            bubbles.x = Math.random() * (80 - 20) + 50;
            bubbles.y = Math.random() * 350;
            bubbles.scale = Math.random() * 8;
            bubbles2.push(bubbles);
        }
        imgData = Aufgabe10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //Seaworld
    function environment() {
        //Background
        Aufgabe10.crc2.fillStyle = "#2E64FE";
        Aufgabe10.crc2.fillRect(0, 0, 700, 500);
        //DrawRocks
        drawRocks(0, 350);
        drawRocks(400, 430);
        drawRocks(200, 400);
        //DrawSeagrass
        drawSeagrass(80, 150);
        drawSand();
        drawBox(280, 470);
    }
    //Animations-Function
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    //MoveObjects-Function
    function moveObjects() {
        for (let i = 0; i < fishGroup.length; i++) {
            fishGroup[i].move();
        }
        for (let i = 0; i < bubbles1.length; i++) {
            bubbles1[i].moveBubbles();
        }
        for (let i = 0; i < bubbles2.length; i++) {
            bubbles2[i].moveBubbles();
        }
    }
    //DrawObjects-Function
    function drawObjects() {
        for (let i = 0; i < fishGroup.length; i++) {
            fishGroup[i].draw();
        }
        for (let i = 0; i < bubbles1.length; i++) {
            bubbles1[i].drawBubbles();
        }
        for (let i = 0; i < bubbles2.length; i++) {
            bubbles2[i].drawBubbles();
        }
    }
    // Functions
    function drawRocks(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 125, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 150, _y);
        Aufgabe10.crc2.lineTo(_x + 420, _y + 110);
        Aufgabe10.crc2.lineTo(_x - 20, _y + 250);
        Aufgabe10.crc2.lineTo(_x - 100, _y + 50);
        Aufgabe10.crc2.lineTo(_x, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#6E6E6E";
        Aufgabe10.crc2.strokeStyle = "#6E6E6E";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawSeagrass(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.quadraticCurveTo(_x + 10, _y + 30, 95, 250);
        Aufgabe10.crc2.quadraticCurveTo(_x, _y + 200, 80, 420);
        Aufgabe10.crc2.lineTo(_x - 35, _y + 500);
        Aufgabe10.crc2.quadraticCurveTo(_x - 20, _y + 120, 80, 260);
        Aufgabe10.crc2.quadraticCurveTo(_x - 20, _y + 30, 80, 150);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B6121";
        Aufgabe10.crc2.strokeStyle = "#0B6121";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawSand() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 400);
        Aufgabe10.crc2.quadraticCurveTo(120, 370, 230, 450);
        Aufgabe10.crc2.quadraticCurveTo(300, 500, 500, 440);
        Aufgabe10.crc2.quadraticCurveTo(1000, 500, 600, 600);
        Aufgabe10.crc2.lineTo(0, 700);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#F2F5A9";
        Aufgabe10.crc2.strokeStyle = "#F2F5A9";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawBox(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 100, _y);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 50);
        Aufgabe10.crc2.lineTo(_x, _y - 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#8A4B08";
        Aufgabe10.crc2.strokeStyle = "#8A4B08";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 100);
        Aufgabe10.crc2.quadraticCurveTo(_x + 20, _y - 120, _x, _y - 80);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "8A4B08";
        Aufgabe10.crc2.strokeStyle = "8A4B08";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Canvas.js.map