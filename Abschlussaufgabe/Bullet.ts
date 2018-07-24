namespace DrunkenSailor {

    export class Bullet {
        x: number;
        y: number;
        radius: number = 10;

        constructor() {
            this.x = 125;
            this.y = 550;
        } //constructor zu

        checkPosition(): void {
            if (this.x >= canvas.width) {
                this.destroyBullet();
            }

            for (let i: number = 0; i < enemies.length; i++) {
                if (this.x >= enemies[i].x) {
                    if (this.y <= enemies[i].y + 10 && this.y >= enemies[i].y - 10) {
                        //wenn der gegener getroffen ist
                        let index: number = i;
                        enemies.splice(index, 1);
                       
                        window.setTimeout(createObjects, 300);
                       
                        

                        this.destroyBullet();
                    }
                }
            }

        } //checkPosition zu



        destroyBullet(): void {
            console.log("destroy bullet");
            let index: number = superclass.indexOf(this);
            superclass.splice(index, 1);

        } //destroy laser zu


        draw(): void {
            crc2.fillStyle = "#4c4c4c";

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "#4c4c4c";
            crc2.stroke();


        }

        move(): void {
            this.x += 3;
        }

    } //class laser zu
} //namespace zu