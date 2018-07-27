/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    class Bullet {
        //Constructor Bullet
        constructor() {
            this.radius = 10;
            this.x = 125;
            this.y = 550;
        } //Constructor 
        // checkPosition Bullet - Zerstört Kugel außerhalb der Bullet.
        checkPosition() {
            if (this.x >= DrunkenSailor.canvas.width) {
                this.destroyBullet();
            }
            for (let i = 0; i < DrunkenSailor.enemies.length; i++) {
                if (this.x >= DrunkenSailor.enemies[i].x) {
                    if (this.y <= DrunkenSailor.enemies[i].y + 10 && this.y >= DrunkenSailor.enemies[i].y - 10) {
                        //wenn der Gegener getroffen ist
                        let index = i;
                        DrunkenSailor.enemies.splice(index, 1);
                        window.setTimeout(DrunkenSailor.createObjects, 300);
                        this.destroyBullet();
                    }
                }
            }
        } //checkPosition
        //DestroyBullet
        destroyBullet() {
            console.log("destroy bullet");
            let index = DrunkenSailor.superclass.indexOf(this);
            DrunkenSailor.superclass.splice(index, 1);
        } //DestroyBullet
        // Draw Funktion
        draw() {
            DrunkenSailor.crc2.fillStyle = "#4c4c4c";
            DrunkenSailor.crc2.beginPath();
            DrunkenSailor.crc2.arc(this.x, this.y, this.radius, 0, 1 * Math.PI, true);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
            DrunkenSailor.crc2.strokeStyle = "#4c4c4c";
            DrunkenSailor.crc2.stroke();
        } //Draw
        //Move Funktion
        move() {
            this.x += 3;
        } //Move
    }
    DrunkenSailor.Bullet = Bullet; //Class Bullet
})(DrunkenSailor || (DrunkenSailor = {})); //Namespace 
//# sourceMappingURL=Bullet.js.map