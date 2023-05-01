let headen = document.querySelectorAll(".sc");


const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("show")
        } else {
            e.target.classList.remove("show")
        }
    })
})


headen.forEach(e => observer.observe(e))