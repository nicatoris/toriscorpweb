document.querySelectorAll(".scroll-left p").forEach(function (p) {
    p.innerHTML += p.innerHTML;
});

var clock = document.getElementById("clock");

function updateClock() {
    clock.textContent = new Date().toLocaleTimeString();
}

if (clock) {
    updateClock();
    setInterval(updateClock, 1000);
}
