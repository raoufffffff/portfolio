let mainBtn = document.querySelector(".nav-btn");
let line = document.querySelector(".line");
let dark = document.querySelector(".dark")
let NavLink = document.querySelectorAll(".nav-list")
let main = document.querySelector(".main")
let moon = document.querySelector(".moon")
console.log(moon);

console.log(main)

// link-list
let Parmetion = false;

mainBtn.addEventListener("click", () => {
    if (!Parmetion) {
        mainBtn.classList.add("open");
        line.classList.add("open");
        dark.classList.add("open");
        NavLink.forEach(e =>
            e.classList.add("open")

        );
        main.classList.add("z-in");
        moon.classList.add("open");
        Parmetion = true;
    } else if (Parmetion) {
        mainBtn.classList.remove("open");
        line.classList.remove("open");
        dark.classList.remove("open");
        NavLink.forEach(e =>
            e.classList.remove("open")

        );
        main.classList.remove("z-in");
        moon.classList.remove("open");

        Parmetion = false;
    }
}
)