canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

mevent = "empty";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("colorv").value;
    linew = document.getElementById("linev").value;
    radius = document.getElementById("radiusv").value;
    mevent = "mousedown";
};

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mevent = "mouseup";
};

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mevent = "mouseleave";
};

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;

    if (mevent == "mousedown") {
        ctx.beginPath();
        ctx.lineWidth = linew;
        ctx.strokeStyle = color;
        ctx.arc(cpx, cpy, radius, 0, 2 * Math.PI);
        ctx.moveTo(lpx, lpy);
        ctx.lineTo(cpx, cpy);
        ctx.stroke();
    }
    lpx = cpx;
    lpy = cpy;
};

function mon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};