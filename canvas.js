const canvas = document.getElementById("can1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");


const radius = innerHeight * 0.07;
const h = innerHeight * 0.2;
let x = innerHeight * 0.1;
let y = innerHeight * 0.2;
let dx = innerHeight * 0.01;
let dy = 0;
let n = 0;

function animate() {
    requestAnimationFrame(animate);

    // 全て消す
    c.clearRect(0, 0, innerWidth, innerHeight);

    // 背景を描く
    c.fillStyle = "rgba(0, 200, 255, 0.5)";
    c.fillRect(0, 0, innerWidth, innerHeight);

    // 文字を書く
    c.fillStyle = "rgba(0, 0, 0, 1)";
    c.font = "11vw arial";
    c.textAlign = "center";
    c.fillText("JavaScript canvas", innerWidth / 2, innerHeight / 4);

    // ボールを描く
    c.beginPath();
    c.arc(x, y, radius, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
    c.fillStyle = "tomato";
    c.fill();

    // 地面を描く
    c.fillStyle = "rgba(10, 200, 0, 1)";
    c.fillRect(0, innerHeight - h, innerWidth, h);

    // 変数の更新
    x += dx;
    y += dy;
    dy += 1;

    // ボールの跳ね返り(横)
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    
    // ボールの跳ね返り(地面)
    if (y + radius > innerHeight - h || y - radius < 0) {
        y = y - dy;
        dy = -dy * 0.7;
        n++;
        if (n > 17) {
            dy = 0;
            dx = dx * 0.99;
        }
    }

}

animate();
