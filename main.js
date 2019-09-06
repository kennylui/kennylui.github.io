var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
ctx.font = "30px Times New Romen";
var startday = weekArray[2];
var monthday = 31;
var year = 2019;
var month = monthArray[0];

function drawGrid() {
    ctx.fillRect(0, 0, 700, 600);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            ctx.clearRect(5 + j * 100, 5 + i * 100, 90, 90);
        }
    }
}

function drawWeek() {
    for (let i = 0; i < 7; i++) {
        ctx.fillText(weekArray[i], 25 + i * 100, 50);
    }
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(800, 100, 80, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(800, 300, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawYear(year) {
    ctx.font = "50px Times New Romen";
    ctx.fillText(year, 750, 115);
}

function drawMonth(month) {
    ctx.font = "50px Times New Romen";
    ctx.fillText(month, 770, 315);
}

function calcStartday() {
    for (let i = 0; i < 7; i++) {
        if (startday == weekArray[i]) {
            return i;
        }
    }
}

function drawNumber() {
    for (i = 0; i < monthday; i++) {
        var x = (calcStartday() + i) % 7;
        var y = Math.floor((calcStartday() + i) / 7);
        ctx.fillText(i + 1, 30 + x * 100, 165 + y * 100);
    }
}

function initialDisplay() {
    drawGrid();
    drawWeek();
    drawCircle();
    drawYear(year);
    drawMonth(month);
    drawNumber();
}

function main() {
    initialDisplay();
}
