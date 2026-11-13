// repeat scrolling text
document.querySelectorAll(".scroll-left p").forEach(function (p) {
    p.innerHTML += p.innerHTML;
});