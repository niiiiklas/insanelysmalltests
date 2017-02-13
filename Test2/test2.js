var canvas;
var ctx;
var GoBase = (function () {
    function GoBase(x, y, zlayer) {
        var _this = this;
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.lineWidth = 3;
            ctx.arc(_this.x, _this.y, 30, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.zlayer = zlayer;
    }
    return GoBase;
})();
function RenderingLoop() {
    Phys();
    requestAnimationFrame(RenderingLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 600);
    go1.draw();
}
var lastPhysUpdate = new Date();
function Phys() {
    var dt = new Date().getTime() - lastPhysUpdate.getTime();
    //go1.x += dt * 0.02;
    var pos = 200 + (Math.sin(lastPhysUpdate.getTime() / 200) * 40);
    go1.x = pos;
    Log("" + pos);
    lastPhysUpdate = new Date();
}
function Log(msg) {
    console.log(msg);
}
//TESTING:
var go1 = new GoBase(100, 100, 1);
window.onload = function () {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    RenderingLoop();
};
