var DrunkenSailor;
(function (DrunkenSailor) {
    class Bullet {
        constructor() {
            this.radius = 10;
            this.x = 125;
            this.y = 550;
        } //constructor zu
        checkPosition() {
            if (this.x >= DrunkenSailor.canvas.width) {
                this.destroyBullet();
            }
            for (let i = 0; i < DrunkenSailor.enemies.length; i++) {
                if (this.x >= DrunkenSailor.enemies[i].x) {
                    if (this.y <= DrunkenSailor.enemies[i].y + 10 && this.y >= DrunkenSailor.enemies[i].y - 10) {
                        //wenn der gegener getroffen ist
                        let index = i;
                        DrunkenSailor.enemies.splice(index, 1);
                        window.setTimeout(DrunkenSailor.createObjects, 300);
                        this.destroyBullet();
                    }
                }
            }
        } //checkPosition zu
        destroyBullet() {
            console.log("destroy bullet");
            let index = DrunkenSailor.superclass.indexOf(this);
            DrunkenSailor.superclass.splice(index, 1);
        } //destroy laser zu
        draw() {
            DrunkenSailor.crc2.fillStyle = "#4c4c4c";
            DrunkenSailor.crc2.beginPath();
            DrunkenSailor.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
            DrunkenSailor.crc2.strokeStyle = "#4c4c4c";
            DrunkenSailor.crc2.stroke();
        }
        move() {
            this.x += 3;
        }
    }
    DrunkenSailor.Bullet = Bullet; //class laser zu
})(DrunkenSailor || (DrunkenSailor = {})); //namespace zu
//# sourceMappingURL=Bullet.js.map