$(document).ready(function(){
    $('.crsl').slick({
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      prevArrow: document.querySelector('.arw-left'),
      nextArrow: document.querySelector('.arw-right'),
      responsive: [
        {
            breakpoint: 1600,
            settings: {
                centerMode: true,
                slidesToShow: 3,
                
            }
        },
        {
        breakpoint: 1280,
        settings: {
            centerMode: true,
            // centerPadding: '100px 0',
            slidesToShow: 4,
            
        }
        },
        {
        breakpoint: 1024,
        settings: {
            centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 3,
            
        }
        },
        {
        breakpoint: 900,
        settings: {
            centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 2,
            
        }
        },
        {
        breakpoint: 768,
        settings: {
            centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 2,
            
        }
        },
        {
        breakpoint: 480,
        settings: {
            centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 1,
        }
        },
        
          
      ]
    });
  });

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

const contactInfoPopup = document.getElementById('contactInfoPopup')
contactInfoPopup.addEventListener('show.bs.modal', event => {
  const person = event.relatedTarget;
  const recipient = person.getAttribute('data-bs-name');
  const room = person.getAttribute('data-bs-room');
  const email = person.getAttribute('data-bs-email');
  const phone = person.getAttribute('data-bs-phone');
  const modalTitle = contactInfoPopup.querySelector('#contactInfoPopupLabel');
  const modalRoom = contactInfoPopup.querySelector('#contactInfoPopupRoom');
  const modalEmail = contactInfoPopup.querySelector('#contactInfoPopupEmail');
  const modalPhone = contactInfoPopup.querySelector('#contactInfoPopupPhone');


  modalTitle.textContent = recipient;
  modalRoom.textContent = room;
  modalEmail.textContent = email;
  modalPhone.textContent = phone;
})

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