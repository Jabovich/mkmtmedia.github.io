function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');


function slider() {
    const images = document.querySelectorAll('.slider_line .card');
    const sliderLine = document.querySelector('.slider_line');
    let activeSlide = 0;
    let width;

    function init() {
        width = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        })
        rollSlider();
    }
    init()
    document.querySelector('.carousel_right_btn').addEventListener('click', function () {
        activeSlide++;
        if (activeSlide >= images.length) activeSlide = 0;
        rollSlider();
    })
    document.querySelector('.carousel_left_btn').addEventListener('click', function () {
        activeSlide--;
        if (activeSlide < 0) activeSlide = images.length - 1;
        rollSlider();
    })
    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + activeSlide * width + 'px)';
    }
}
window.addEventListener('resize', slider);
slider();