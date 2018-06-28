namespace Aufgabe11 {
export class BubbleTwo extends BubbleOne {

        constructor() {
            super();    
        }
    
        setRandomPosition(): void {
            this.x = Math.random() * (80 - 20) + 50;
            this.y = Math.random() * 350;
            this.scale = Math.random() * 8;    
        }
    
        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }   
    }    
}