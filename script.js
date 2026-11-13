// repeat scrolling text
document.querySelectorAll(".scroll-left p").forEach(function (p) {
    p.innerHTML += p.innerHTML;
});

// live clock
function updateClock() {
    var now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);