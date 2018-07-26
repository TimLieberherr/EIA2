/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/



namespace DrunkenSailor {
    
    
     // Square Klasse
    export class OtherStuff extends Square {
        color: string;

        
         // constructor
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        }  // constructor

        
        
         // draw  
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 28, this.y - 50);
            crc2.lineTo(this.x + 56, this.y);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        } // draw

        
        // Set Start Position
        setStartPosition(): void {
            this.x = canvas.width - 20;
            this.y = 560;
        } // setStartPosition

        
        // set Random Spawn Point
        setRandomSpawnPoint(): void {
 // leer
        } //setRandomSpawnPoint

        
        // setRandomColor
        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#81871c";
                    break;
                case 1:
                    this.color = "#80648c";
                    break;
                case 2:
                    this.color = "#e5e042";
            } // switch   
        } // setRandomColor
    } // class   
} // namespace