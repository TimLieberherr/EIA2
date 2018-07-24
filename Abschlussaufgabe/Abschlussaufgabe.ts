/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace DrunkenSailor {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let superclass: SuperClass[] = [];
    export let enemies: Square[] = [];
    let imgData: ImageData;
    export let bullet: Bullet;

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", shoot);
        // Hintergrund des Spiels
        environment();

        // Hintergrund in einer Variablen speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Dot in das Array "superclass" pushen  
        //        let dot: Dot = new Dot();
        //        superclass.push(dot);
        // Aufruf der animate-Funktion
        animate();

        let triangle: Triangle = new Triangle();
        enemies.push(triangle);
        let other: OtherStuff = new OtherStuff();
        enemies.push(other);

        let dot: Dot = new Dot(/*newPositionX, newPositionY*/); //Zu Schiff umändern
        superclass.push(dot);

    } // init

    export function createObjects(): void {

        let c: number = Math.floor(Math.random() * 2);
        switch (c) {
            case 0:
                let triangle: Triangle = new Triangle();
                enemies.push(triangle);
                break;
            case 1:
                let other: OtherStuff = new OtherStuff();
                enemies.push(other);
                break;

        }


    }






    // Animate-Funktion
    function animate(): void {
        window.setTimeout(animate, 15);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        drawObjects();
        moveObjects();
    }

    //Schießen Kugel
    function shoot(): void {
        bullet = new Bullet();
        superclass.push(bullet);
    }

    // DrawObjects-Funktion
    function drawObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].draw();
        }
    }

    // MoveObjects-Funktion
    function moveObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].move();
            superclass[i].checkPosition();
        }
        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].move();
        }



    }

    //    function dot(_x: number, _y: number): void {
    //        crc2.fillStyle = "rgb(55, 60, 61)";
    //
    //        crc2.beginPath();
    //        crc2.arc(_x, _y, 27, 0, 2 * Math.PI, true);
    //        crc2.closePath();
    //        crc2.fill();
    //
    //        crc2.strokeStyle = "transparent";
    //        crc2.stroke();
    //    }
} // closing namespace