/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/



namespace DrunkenSailor {

    window.addEventListener("load", start);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let superclass: SuperClass[] = [];
    export let enemies: Square[] = [];
    let imgData: ImageData;
    export let bullet: Bullet;

    // start Funktion
    function start(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        button.addEventListener("click", init);
        document.getElementById("drunkenSailor").style.display = "none";
        document.getElementById("startScreen").style.display = "initial";
    }

    // init Funktion
    export function init(_event: Event): void {
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("drunkenSailor").style.display = "initial";

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", shoot);

        // ruft Hintergrund auf
        environment();

        //  speichert den Hintergrund in einer Variabel
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Aufruf der animate-Funktion
        animate();

        // Aufruf der Ship-Funktion  HIER NOCH VARIABEL AUSTAUSCHEN
        let triangle: Triangle = new Triangle();
        enemies.push(triangle);

        // Aufruf der Other-Funktion 
        let other: OtherStuff = new OtherStuff();
        enemies.push(other);

        // Aufruf der ownShip-Funktion  HIER NOCH VARIABEL AUSTAUSCHEN
        let dot: Dot = new Dot();
        superclass.push(dot);

    } // init



    export function createObjects(): void {

        // Math Random für Ship- & Other-Funktion  HIER NOCH VARIABEL AUSTAUSCHEN
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


    } // createObjects



    // Animate-Funktion
    function animate(): void {
        window.setTimeout(animate, 15);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        drawObjects();
        moveObjects();
    }

    // Shoot Funktion 
    function shoot(): void {
        bullet = new Bullet();
        superclass.push(bullet);
    } //shoot



    // DrawObjects-Funktion
    function drawObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].draw();
        }
    }  // DrawObjects



    // MoveObjects-Funktion
    function moveObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].move();
            superclass[i].checkPosition();
        }
        for (let i: number = 0; i < enemies.length; i++) {
            enemies[i].move();
        }
    } // Moving Objects


} // namespace