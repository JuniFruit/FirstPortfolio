

const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');


function toggleClass() { 
    let itemClass = this.parentNode.classList[1];
    console.log(itemClass)
    
    
    if(itemClass === 'skills_close') {
        this.parentNode.classList.toggle('skills_open');
    }
}

skillsHeader.forEach(item => {
    item.addEventListener('click', toggleClass)
});

const qualButton = document.getElementsByClassName('qualification_button')
const educationButton = qualButton[0];
const workButton = qualButton[1];
const qualContent = document.querySelector('.qualification_content');
const workContent = document.querySelector('.work_content')


educationButton.addEventListener('click', () => {
    qualContent.hidden = false;
    workContent.style.display = 'none';
})

workButton.addEventListener('click', () => {
    qualContent.hidden = true;
    workContent.style.display = 'block';
})

var swiperPortfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    mousewheel: true,
    keyboard: true,
  });

var swiperReviews = new Swiper(".reviews_content", {
    loop: true,
    grabCursor: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
   
  });


  const drop = document.querySelector('.portfolio_link');
  const dropMenu = document.querySelector('.drop_menu');
  // drop.addEventListener('mouseover', ()=> {
    
  //   dropMenu.classList.toggle('drop_menu-active');
  // })

  // dropMenu.addEventListener('mouseleave', () => {
  //   dropMenu.classList.remove('drop_menu-active');
  // })
  