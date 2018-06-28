namespace Vorbereitung {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 15;

    //let rects: Rect[] = [];
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#ffbe1c");
            stars.push(star);

            let rect: Rect = new Rect("#00b6d6");
            stars.push(rect);
        }

        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
        let randomObject: number = Math.floor(Math.random() * 3);
        let newPositionX: number = _event.clientX;
        let newPositonY: number = _event.clientY;

        switch (randomObject) {
            case 0:
                let star: DavidStar = new DavidStar("#4a5b77");
                star.x = newPositionX;
                star.y = newPositonY;
                stars.push(star);
                break;

            case 1:
                let rect: Rect = new Rect("#efa017");
                rect.x = newPositionX;
                rect.y = newPositonY;
                stars.push(rect);
                break;

            case 2:
                let blueDavidStar: DavidStarBlue = new DavidStarBlue("#1adbce");
                blueDavidStar.x = newPositionX;
                blueDavidStar.y = newPositonY;
                stars.push(blueDavidStar);
                break;
        }
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}
