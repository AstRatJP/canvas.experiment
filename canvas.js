const canvas = document.getElementById("can1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");


const w = innerWidth;
const h = innerHeight;
const radius = innerHeight * 0.07;
let x = innerHeight * 0.1;
let y = innerHeight * 0.2;
let dx = innerHeight * 0.01;
let dy = 0;
let n = 0;

function animate() {
    requestAnimationFrame(animate);

    // 全て消す
    c.clearRect(0, 0, w, h);

    // 背景を描く
    c.fillStyle = "rgba(0, 200, 255, 0.5)";
    c.fillRect(0, 0, w, h);

    // 文字を書く
    c.fillStyle = "rgba(0, 0, 0, 1)";
    c.font = "11vw arial";
    c.textAlign = "center";
    c.fillText("JavaScript canvas", w / 2, h / 4);

    // ボールを描く
    c.beginPath();
    c.arc(x, y, radius, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
    c.fillStyle = "tomato";
    c.fill();

    // 地面を描く
    c.fillStyle = "rgba(10, 200, 0, 1)";
    c.fillRect(0, h * 0.8, w, h * 0.2);

    // 変数の更新
    x += dx;
    y += dy;
    dy += 1;

    // ボールの跳ね返り(横)
    if (x + radius > w || x - radius < 0) {
        dx = -dx;
    }
    
    // ボールの跳ね返り(地面)
    if (y + radius > h * 0.8 || y - radius < 0) {
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
