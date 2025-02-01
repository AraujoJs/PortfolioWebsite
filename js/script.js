let lastScrollTop = 0;
let scrollThreshold = 20;
let scrollDownCount = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && (scrollTop - lastScrollTop) > scrollThreshold) {
        scrollDownCount++;
        if (scrollDownCount >= 1) {
            navbar.classList.add("hidden");
        }
    } else if (scrollTop < lastScrollTop) {

        navbar.classList.remove("hidden");
        scrollDownCount = 0; 
    }
    lastScrollTop = scrollTop;
});