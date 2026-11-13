// repeat scrolling text
document.querySelectorAll(".scroll-left p").forEach(function (p) {
    p.innerHTML += p.innerHTML;
});

// live clock (facility page only)
var clock = document.getElementById("clock");

function updateClock() {
    clock.textContent = new Date().toLocaleTimeString();
}

if (clock) {
    updateClock();
    setInterval(updateClock, 1000);
}
