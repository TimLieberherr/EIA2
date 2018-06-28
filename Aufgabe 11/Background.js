var Aufgabe11;
(function (Aufgabe11) {
    function environment() {
        //Background
        Aufgabe11.crc2.fillStyle = "#2E64FE";
        Aufgabe11.crc2.fillRect(0, 0, 700, 500);
        //DrawRocks
        drawRocks(0, 350);
        drawRocks(400, 430);
        drawRocks(200, 400);
        //DrawSeagrass
        drawSeagrass(80, 150);
        drawSand();
        drawBox(280, 470);
    }
    Aufgabe11.environment = environment;
    // Functions
    function drawRocks(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 125, _y - 30);
        Aufgabe11.crc2.lineTo(_x + 150, _y);
        Aufgabe11.crc2.lineTo(_x + 420, _y + 110);
        Aufgabe11.crc2.lineTo(_x - 20, _y + 250);
        Aufgabe11.crc2.lineTo(_x - 100, _y + 50);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "#6E6E6E";
        Aufgabe11.crc2.strokeStyle = "#6E6E6E";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    function drawSeagrass(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x + 10, _y + 30, 95, 250);
        Aufgabe11.crc2.quadraticCurveTo(_x, _y + 200, 80, 420);
        Aufgabe11.crc2.lineTo(_x - 35, _y + 500);
        Aufgabe11.crc2.quadraticCurveTo(_x - 20, _y + 120, 80, 260);
        Aufgabe11.crc2.quadraticCurveTo(_x - 20, _y + 30, 80, 150);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "#0B6121";
        Aufgabe11.crc2.strokeStyle = "#0B6121";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    function drawSand() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 400);
        Aufgabe11.crc2.quadraticCurveTo(120, 370, 230, 450);
        Aufgabe11.crc2.quadraticCurveTo(300, 500, 500, 440);
        Aufgabe11.crc2.quadraticCurveTo(1000, 500, 600, 600);
        Aufgabe11.crc2.lineTo(0, 700);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "#F2F5A9";
        Aufgabe11.crc2.strokeStyle = "#F2F5A9";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    function drawBox(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 100, _y);
        Aufgabe11.crc2.lineTo(_x + 100, _y - 50);
        Aufgabe11.crc2.lineTo(_x, _y - 50);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "#8A4B08";
        Aufgabe11.crc2.strokeStyle = "#8A4B08";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y - 50);
        Aufgabe11.crc2.lineTo(_x + 100, _y - 100);
        Aufgabe11.crc2.quadraticCurveTo(_x + 20, _y - 120, _x, _y - 80);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "8A4B08";
        Aufgabe11.crc2.strokeStyle = "8A4B08";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Background.js.map