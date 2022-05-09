
// Qualification and Expirience section //
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

// Reviews swiper //
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
  

  //Carousel//

  const portfolioContent = document.querySelectorAll('.portfolio_content');
  const rightHandler = document.querySelector('.right_handle');
  const leftHandler = document.querySelector('.left_handle');
  
  //console.log (getComputedStyle(portfolioContent).getPropertyValue("--handle-index"))
  console.log(rightHandler)
  
  rightHandler.addEventListener('click', () => {
    
    let index = getComputedStyle(portfolioContent).getPropertyValue("--handle-index");
    index++
    portfolioContent.style.setProperty("--handle-index", index);
    //console.log(portfolioContent.style.getPropertyValue('--handle-index'))
  })
  leftHandler.addEventListener('click', () => {
    
    let index = getComputedStyle(portfolioContent).getPropertyValue("--handle-index")
    portfolioContent.style.setProperty("--handle-index", index - 1);
    //console.log(portfolioContent.style.getPropertyValue('--handle-index'))
  })


  console.log(index);