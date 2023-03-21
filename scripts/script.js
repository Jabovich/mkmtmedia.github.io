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

function animation() {
    const animItems = document.querySelectorAll('._anim-items')
    if (animItems.length > 0) {
        window.addEventListener('scroll', anumOnscroll);
        function anumOnscroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no_hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft };

            }
        }
    }
    setTimeout(() => {
        anumOnscroll();
    }, 300)
}
animation();

function slider() {
    const images = document.querySelectorAll('.slider_line .card');
    const sliderLine = document.querySelector('.slider_line');
    let activeSlide = 0;
    let width;

    function init() {
        width = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        if (width <= 450) {
            images.forEach(item => {
                item.style.width = width + 'px';
                item.style.height = 'auto';
            })
        }
        else if (width <= 550 && width > 450) {
            images.forEach(item => {
                item.style.width = width/1.5 + 'px';
                item.style.marginRight = 90 + 'px';
                item.style.marginLeft = 90 + 'px';
                item.style.height = 'auto';
            })
        }
        else if (width <= 820) {
            images.forEach(item => {
                item.style.width = width / 2 - 47 + 'px';
                item.style.height = 'auto';
            })
        }
        else if (width <= 1280) {
            images.forEach(item => {
                item.style.width = width / 3 - 27 + 'px';
                item.style.height = 'auto';
            })
        }
        else if (width > 1280) {
            images.forEach(item => {
                item.style.width = width / 4 - 36 + 'px';
                item.style.height = 'auto';
            })
        }
        rollSlider();
    }
    init()
    document.querySelector('.carousel_right_btn').addEventListener('click', function () {
        activeSlide++;
        if(width <= 550){
            if (activeSlide >= images.length) activeSlide = 0;
        }
        else if(width <= 820){
            if (activeSlide + 1 >= images.length) activeSlide = 0;
        }
        else if(width <= 1280){
            if (activeSlide + 2 >= images.length) activeSlide = 0;
        }
        else if(width > 1280){
            if (activeSlide + 3 >= images.length) activeSlide = 0;
        }
        rollSlider();
    })
    document.querySelector('.carousel_left_btn').addEventListener('click', function () {
        activeSlide--;
        if(width <= 550){
            if (activeSlide < 0) activeSlide = images.length - 1;
        }
        else if(width <= 820){
            if (activeSlide - 1 < 0) activeSlide = images.length - 2;
        }
        else if(width <= 1280){
            if (activeSlide - 2 < 0) activeSlide = images.length - 3;
        }
        else if(width > 1280){
            if (activeSlide - 3 < 0) activeSlide = images.length - 4;
        }
        rollSlider();
    })
    function rollSlider() {
        if (width <= 550) {
            sliderLine.style.transform = 'translate(-' + activeSlide * width + 'px)';
        }
        else if (width <= 820) {
            sliderLine.style.transform = 'translate(-' + activeSlide * (width / 2) + 'px)';
        }
        else if (width <= 1280) {
            sliderLine.style.transform = 'translate(-' + activeSlide * (width / 3) + 'px)';
        }
        else if (width > 1280) {
            sliderLine.style.transform = 'translate(-' + activeSlide * (width / 4) + 'px)';
        }
    }
}
window.addEventListener('resize', slider);
slider();

function speedLine() {
    width = document.querySelector(".partners_line").offsetWidth;
    
    if (width <= 450) {
        $(".partners_line").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            easing: 'linear',
            cssEase: 'linear',
            arrows: false,
            swipe: false
        });
    }
    else if (width <= 820) {
        $(".partners_line").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            easing: 'linear',
            cssEase: 'linear',
            arrows: false,
            swipe: false
        });
    }
    else if (width <= 1280) {
        $(".partners_line").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            easing: 'linear',
            cssEase: 'linear',
            arrows: false,
            swipe: false
        });
    }
    else if (width > 1280) {
        $(".partners_line").slick({
            slidesToShow:5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            easing: 'linear',
            cssEase: 'linear',
            arrows: false,
            swipe: false
        });
    }
}
speedLine();