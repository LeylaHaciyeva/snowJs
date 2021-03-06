let body = document.querySelector(".all");

setInterval(() => {
    snowFlake();
}, 100);
snowFlake()
function snowFlake() {
    let icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-snowflake");
    body.appendChild(icon)
    icon.style.left = (Math.random() * window.innerWidth)-30 + "px";
    icon.style.animationDuration = Math.random() * 3 + 2 + "s";
    icon.style.opacity=Math.random()
    setTimeout(() => {
        icon.remove();
    }, 5000);

}