/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/



namespace DrunkenSailor {

    // DOT ÄNDERN
    export class Boat extends SuperClass {

        radius: number = 30;



        // Constructor Dots
        constructor() {
            super();
            this.setStartPosition();
        }  // Constructor



        // CheckPosition Window Alert
        checkPosition(): void {
            for (let i: number = 0; i < enemies.length; i++) {
                if (125 == enemies[i].x) {
                    window.alert("gameOver");
                    console.log("gameOver");
                }

            }
        }  // CheckPosition



        // SetStartPosition
        setStartPosition(): void {
            this.x = 125;
            this.y = 550;
        }

        draw(): void {



            crc2.beginPath();
            //Rumpf
            crc2.fillStyle = "#873E22";
            crc2.moveTo(this.x - 80, this.y - 43);
            crc2.lineTo(this.x - 50, this.y + 20);
            crc2.lineTo(this.x + 100, this.y + 20);
            crc2.lineTo(this.x + 180, this.y - 30);
            //Spitze
            crc2.lineTo(this.x + 230, this.y - 30);
            crc2.lineTo(this.x + 230, this.y - 32);
            //Höcker
            crc2.lineTo(this.x + 30, this.y - 32);
            crc2.lineTo(this.x + 10, this.y - 43);
            //Mast 1
            crc2.moveTo(this.x + 122, this.y - 32);
            crc2.lineTo(this.x + 122, this.y - 140);
            crc2.lineTo(this.x + 120, this.y - 140);
            crc2.lineTo(this.x + 120, this.y - 32);
            //Segel 1
            crc2.moveTo(this.x + 122, this.y - 32);
            crc2.quadraticCurveTo(340, 460, 246, 410);
            crc2.closePath();
            crc2.fill();
            //Mast 2
            crc2.moveTo(this.x + 60, this.y - 32);
            crc2.lineTo(this.x + 60, this.y - 140);
            crc2.lineTo(this.x + 58, this.y - 140);
            crc2.lineTo(this.x + 58, this.y - 32);
            //Segel 2
            crc2.moveTo(this.x + 60, this.y - 32);
            crc2.quadraticCurveTo(280, 460, 185, 410);
            crc2.moveTo(this.x + 10, this.y - 43);
            crc2.lineTo(this.x - 80, this.y - 43);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "#4A1703"; //"transparent"
            crc2.stroke();


        }

        move(): void {
            this.x += 0;
            this.y -= 0;
        }
    }
} //namespace