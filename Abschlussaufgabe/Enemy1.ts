/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/



namespace DrunkenSailor {

    // Enemy 1 Klasse
    export class Enemy1 extends EnemyClass {
        color: string;


        // constructor
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        } // constructor



        // draw
        draw(): void {
            crc2.beginPath();
            //Rumpf
            crc2.moveTo(this.x + 60, this.y - 43);
            crc2.lineTo(this.x + 30, this.y + 10);
            crc2.lineTo(this.x - 80, this.y + 10);
            crc2.lineTo(this.x - 120, this.y - 30);
            //Spitze
            crc2.lineTo(this.x - 145, this.y - 30);
            crc2.lineTo(this.x - 145, this.y - 32);
            //Höcker
            crc2.lineTo(this.x - 10, this.y - 32);
            crc2.lineTo(this.x + 10, this.y - 43);
            //Mast 1
            crc2.moveTo(this.x - 40, this.y - 32);
            crc2.lineTo(this.x - 40, this.y - 140);
            crc2.lineTo(this.x - 38, this.y - 140);
            crc2.lineTo(this.x - 38, this.y - 32);
            //Segel 1
            crc2.moveTo(this.x - 39, this.y - 60);
            crc2.lineTo(this.x + 10, this.y - 60);
            crc2.lineTo(this.x - 39, this.y - 140);
            crc2.closePath();
            crc2.fill();
        } // draw



        // setStartPosition
        setStartPosition(): void {
            this.x = canvas.width + 50;
            this.y = 560;
        }// setStartPosition



        // setRandwomSpawnPoint
        setRandomSpawnPoint(): void {
            // leer
        } // setRandwomSpawnPoint


        // setRandwomColor
        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#1D1B7D";
                    break;
                case 1:
                    this.color = "#706A29";
                    break;
                case 2:
                    this.color = "#1F6F26";
            } // switch   
        } // setRandomColor
    } // class   
} // namespace 