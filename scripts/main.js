const menu = document.getElementById("header-coffee"); // colocar em cache
window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {
        menu.classList.add("header-scroll");
        for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {

        }
    } else {
        menu.classList.remove("header-scroll");
        for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {

        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('#splide1', {
        perPage: 3,
        rewind: true,
        rewindByDrag: true,
        drag: true,
        speed: 1000,
    });

    checkWidth();
    
    // Adiciona um ouvinte de alteração de largura da janela
    window.addEventListener('resize', checkWidth);

    function checkWidth() {
        // Verifica se a largura da janela é inferior a 1000 pixels
        if (window.matchMedia('(max-width: 1000px)').matches) {
            // Se for, ajusta o valor de perPage para 1
            splide.options.perPage = 1;
        } else {
            // Se não for, volta para o valor original de perPage (3)
            splide.options.perPage = 3;
        }

        // Atualiza o slider com as novas configurações
        splide.destroy();
        splide = new Splide('#splide1', splide.options).mount();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('#splide2', {
        grid: {
            rows: 2,
            gap: {
                row: '1rem',
            },
        },
    }).mount({Grid: SplideGrid});

    splide.mount();
});