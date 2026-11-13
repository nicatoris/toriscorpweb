// download buttons
document.querySelectorAll(".image-grid img").forEach(function (img) {
    var item = document.createElement("div");
    item.className = "item";
    img.parentNode.insertBefore(item, img);
    item.appendChild(img);

    var btn = document.createElement("button");
    btn.textContent = "Download";
    btn.onclick = function () {
        var link = document.createElement("a");
        link.href = img.src;
        link.download = img.src.split("/").pop();
        link.click();
    };
    item.appendChild(btn);

});

// repeat scrolling text
document.querySelectorAll(".scroll-left p").forEach(function (p) {
    p.innerHTML += p.innerHTML;
});