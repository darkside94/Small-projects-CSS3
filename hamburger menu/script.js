const btn = document.querySelector(".arrow");
const menu = document.querySelector("nav");

btn.addEventListener("click", function () {
    btn.classList.toggle("on");
    menu.classList.toggle("on");
})

//toggle dodaje jakby klase "on" i nie musimy dawac jej osobno w html