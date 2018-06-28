var Aufgabe11;
(function (Aufgabe11) {
    class BubbleTwo extends Aufgabe11.BubbleOne {
        constructor() {
            super();
        }
        setRandomPosition() {
            this.x = Math.random() * (80 - 20) + 50;
            this.y = Math.random() * 350;
            this.scale = Math.random() * 8;
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }
    }
    Aufgabe11.BubbleTwo = BubbleTwo;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubbleTwo.js.map