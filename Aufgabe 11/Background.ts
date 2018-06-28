namespace Aufgabe11 {
    export function environment(): void {
        
        //Background
        crc2.fillStyle = "#2E64FE";
        crc2.fillRect(0, 0, 700, 500);
        
        //DrawRocks
        drawRocks(0, 350);
        drawRocks(400, 430);
        drawRocks(200, 400);

        //DrawSeagrass
        drawSeagrass(80, 150);
        drawSand();
        drawBox(280, 470);
    }
    
    // Functions
    function drawRocks(_x: number, _y: number): void {
        
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

    function drawSeagrass(_x: number, _y: number): void {
        
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

    function drawSand(): void {
        
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

    function drawBox(_x: number, _y: number): void {
        
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
}