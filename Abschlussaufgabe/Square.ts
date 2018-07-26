/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace DrunkenSailor {
    
    // Square Klasse
    export class Square extends Dot {
        color: string;
        
        
        
        // Constructor
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        } // Constructor

        

        // Draw
        draw(): void {
            //
        } // Draw

        
        
        // Move
        move(): void {
            this.x -= 3;
            this.y += 0;

            if (this.x < -50) {
                this.x = canvas.width + 50;
            }
        } // Move
        
        
        // setStartPosition
        setStartPosition(): void {
            this.x = canvas.width + 0;
            this.y = 510;
        } // setStartPosition

        
        
        // setRandomSpawnPoint
        setRandomSpawnPoint(): void {
           //
        } // setRandomSpawnPoint

        
        
        // setRandomColor
        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#f9b836";
                    break;
                case 1:
                    this.color = "#b2cc4d";
                    break;
                case 2:
                    this.color = "#b7505e";
            } // switch   
        } // setRandomColor
    } // class   
} // closing namespace