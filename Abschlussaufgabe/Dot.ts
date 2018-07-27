/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/



namespace DrunkenSailor {
    
    // DOT ÄNDERN
    export class Dot extends SuperClass {
        
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
            
            crc2.fillStyle = "#4c4c4c";
            
            crc2.beginPath();  
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();  
            
            crc2.strokeStyle = "transparent";
            crc2.stroke();
            
            
        }
        
        move(): void {
            this.x += 0;
            this.y -= 0;
        } 
    }
} //namespace