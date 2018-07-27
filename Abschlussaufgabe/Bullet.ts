/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/



namespace DrunkenSailor {

    export class Bullet {
        x: number;
        y: number;
        radius: number = 10;

        
        
        //Constructor Bullet
        constructor() {
            this.x = 125;
            this.y = 550;
        } //Constructor 

        
        
        // checkPosition Bullet - Zerstört Kugel außerhalb der Bullet.
        checkPosition(): void {
            if (this.x >= canvas.width) {
                this.destroyBullet();
            } 

            for (let i: number = 0; i < enemies.length; i++) {
                if (this.x >= enemies[i].x) {
                    if (this.y <= enemies[i].y + 10 && this.y >= enemies[i].y - 10) {
                        
                        //wenn der Gegener getroffen ist
                        let index: number = i;
                        enemies.splice(index, 1);
                       
                        window.setTimeout(createObjects, 300);

                        this.destroyBullet();
                    }
                }
            }

        } //checkPosition


        //DestroyBullet
        destroyBullet(): void {
            console.log("destroy bullet");
            let index: number = superclass.indexOf(this);
            superclass.splice(index, 1);

        } //DestroyBullet


        
        // Draw Funktion
        draw(): void {
            crc2.fillStyle = "#4c4c4c";

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 1 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "#4c4c4c";
            crc2.stroke();

        } //Draw

        
        
        //Move Funktion
        move(): void {
            this.x += 3;
        } //Move

    } //Class Bullet
} //Namespace 