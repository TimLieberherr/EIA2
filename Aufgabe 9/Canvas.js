var L09_Canvas;
(function (L09_Canvas) {
    var Aufgabe9_Canvas;
    (function (Aufgabe9_Canvas) {
        window.addEventListener("load", init);
        let crc2;
        function init(_event) {
            let canvas = document.getElementsByTagName("canvas")[0];
            crc2 = canvas.getContext("2d");
            console.log(crc2);
            //Background
            crc2.fillStyle = "#2E64FE";
            crc2.fillRect(0, 0, 700, 500);
            // DrawRocks
            drawRocks(0, 350);
            drawRocks(400, 430);
            drawRocks(200, 400);
            drawSeagrass(80, 150);
            drawSand();
            //drawFish Random
            for (let i = 0; i < 9; i++) {
                let x = Math.random() * crc2.canvas.width;
                let y = Math.random() * crc2.canvas.height;
                drawFish(x, y);
            }
            drawBubbles(350, 50, 10, 80, 4);
            drawBubbles(150, 250, 10, 80, 2);
            drawBubbles(220, 40, 80, 160, 5);
            drawBubbles(60, 220, 80, 260, 8);
            drawBox(280, 470);
        }
        // Functions
        function drawRocks(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 125, _y - 30);
            crc2.lineTo(_x + 150, _y);
            crc2.lineTo(_x + 420, _y + 110);
            crc2.lineTo(_x - 20, _y + 250);
            crc2.lineTo(_x - 100, _y + 50);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.fillStyle = "#6E6E6E";
            crc2.strokeStyle = "#6E6E6E";
            crc2.stroke();
            crc2.fill();
        }
        function drawSeagrass(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 10, _y + 30, 95, 250);
            crc2.quadraticCurveTo(_x, _y + 200, 80, 420);
            crc2.lineTo(_x - 35, _y + 500);
            crc2.quadraticCurveTo(_x - 20, _y + 120, 80, 260);
            crc2.quadraticCurveTo(_x - 20, _y + 30, 80, 150);
            crc2.closePath();
            crc2.fillStyle = "#0B6121";
            crc2.strokeStyle = "#0B6121";
            crc2.stroke();
            crc2.fill();
        }
        function drawSand() {
            crc2.beginPath();
            crc2.moveTo(0, 400);
            crc2.quadraticCurveTo(120, 370, 230, 450);
            crc2.quadraticCurveTo(300, 500, 500, 440);
            crc2.quadraticCurveTo(1000, 500, 600, 600);
            crc2.lineTo(0, 700);
            crc2.closePath();
            crc2.fillStyle = "#F2F5A9";
            crc2.strokeStyle = "#F2F5A9";
            crc2.stroke();
            crc2.fill();
        }
        function drawBubbles(_x, _y, _w, _h, _a) {
            for (let i = 0; i < _a; i++) {
                let width = Math.random() * _w;
                let height = Math.random() * _h;
                let scale = Math.random() * 13;
                crc2.beginPath();
                crc2.arc(_x + width, _y + height, scale, 0, 3 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "#A9D0F5";
                crc2.strokeStyle = "#A9D0F5";
                crc2.fill();
            }
        }
        function drawFish(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 30, _y - 35, _x + 80, _y + 20);
            crc2.lineTo(_x + 80, _y - 10);
            crc2.quadraticCurveTo(_x + 30, _y + 35, _x, _y);
            crc2.fillStyle = "#FE9A2E";
            crc2.strokeStyle = "#FE9A2E";
            crc2.stroke();
            crc2.fill();
        }
        function drawBox(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 100, _y);
            crc2.lineTo(_x + 100, _y - 50);
            crc2.lineTo(_x, _y - 50);
            crc2.closePath();
            crc2.fillStyle = "#8A4B08";
            crc2.strokeStyle = "#8A4B08";
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(_x, _y - 50);
            crc2.lineTo(_x + 100, _y - 100);
            crc2.quadraticCurveTo(_x + 20, _y - 120, _x, _y - 80);
            crc2.closePath();
            crc2.fillStyle = "8A4B08";
            crc2.strokeStyle = "8A4B08";
            crc2.stroke();
            crc2.fill();
        }
    })(Aufgabe9_Canvas || (Aufgabe9_Canvas = {}));
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map