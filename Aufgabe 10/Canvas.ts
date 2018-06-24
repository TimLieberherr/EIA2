/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe10 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fishGroup: Fish[] = [];
    let bubbles1: BubblesOne [] = [];
    let bubbles2: BubblesTwo [] = [];

    let imgData: ImageData;

    function init(_event: Event): void {
        
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        //Seaworld Background
        environment();

        //For-Schleife für die Fische
        for (let i: number = 0; i < 9; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishGroup.push(fish);
        }
        
        //For-Schleife für die Luftblasen
        for (let i: number = 0; i < 10; i++) {
            let bubbles: BubblesOne = new BubblesOne();
            bubbles.x = Math.random() * (350 - 265) + 300;
            bubbles.y = Math.random() * 400;
            bubbles.scale = Math.random() * 8;
            bubbles1.push(bubbles);
        }
        
        for (let i: number = 0; i < 8; i++) {
            let bubbles: BubblesTwo = new BubblesTwo();
            bubbles.x = Math.random() * (80 - 20) + 50;
            bubbles.y = Math.random() * 350;
            bubbles.scale = Math.random() * 8;
            bubbles2.push(bubbles);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    
    //Seaworld
    function environment(): void {
        
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

    //Animations-Function
    function animate(): void {
        
        window.setTimeout(animate, 10);

        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    }

    //MoveObjects-Function
    function moveObjects(): void {
        
        for (let i: number = 0; i < fishGroup.length; i++) {
            fishGroup[i].move();
        }
        
        for (let i: number = 0; i < bubbles1.length; i++) {
            bubbles1[i].moveBubbles();
        }
        
        for (let i: number = 0; i < bubbles2.length; i++) {
            bubbles2[i].moveBubbles();
        }
    }
    
    //DrawObjects-Function
    function drawObjects(): void {
        
        for (let i: number = 0; i < fishGroup.length; i++) {
            fishGroup[i].draw();
        }
        
        for (let i: number = 0; i < bubbles1.length; i++) {
            bubbles1[i].drawBubbles();
        }
        
        for (let i: number = 0; i < bubbles2.length; i++) {
            bubbles2[i].drawBubbles();
        }
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