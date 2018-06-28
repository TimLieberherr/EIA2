/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe11 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObjects[] = [];

    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    function init(_event: Event): void {
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFlakes);
        
        //Seaworld Background - in extra TypeScript-Dokument (Background.ts)
        environment();

        //For-Schleife für die Fische
        for (let i: number = 0; i < 9; i++) {
            let fish: Fish = new Fish();
            movingObjects.push(fish);
        }
        
        //For-Schleife für die Luftblasen
        for (let i: number = 0; i < 10; i++) {
            let bubbles: BubbleOne = new BubbleOne();
            movingObjects.push(bubbles);
        }
        
        for (let i: number = 0; i < 8; i++) {
            let bubbles: BubbleTwo = new BubbleTwo();
            movingObjects.push(bubbles);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    
    //Futterflocken-Funktion
    function insertFlakes(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;
        
        for (let i: number = 0; i < 4; i++) {
            let flakes: Flake = new Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            //Bereich, in dem die Futterflocken liegen bleiben, damit sie nicht auf einer Linie liegen
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    }
    
    //Animations-Function
    function animate(): void {
        
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    }

    //MoveObjects-Function
    function moveObjects(): void {
        
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
        
    }
    
    //DrawObjects-Function
    function drawObjects(): void {
        
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }        
    }    
}