let lastScrollTop = 0; // Última posição do scroll
let scrollThreshold = 20; // Limite de rolagem para esconder a navbar
let scrollDownCount = 0; // Contador de roladas para baixo
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && (scrollTop - lastScrollTop) > scrollThreshold) {
        // Rolando para baixo com diferença maior que o limite definido
        scrollDownCount++;
        if (scrollDownCount >= 1) {
            navbar.classList.add("hidden"); // Esconde a navbar
        }
    } else if (scrollTop < lastScrollTop) {
        // Rolando para cima
        navbar.classList.remove("hidden"); // Mostra a navbar
        scrollDownCount = 0; // Reinicia o contador
    }

    lastScrollTop = scrollTop; // Atualiza a última posição do scroll
});