            const header = document.querySelector(".headerParent");
            const mainContent = document.querySelector('.main');

            function handleScroll() {
            if (window.scrollY > 0) {
                header.classList.add('header-with-shadow');
            } else {
                header.classList.remove('header-with-shadow');
            }
            }

            window.addEventListener('scroll', handleScroll);


            const accordion = document.querySelectorAll(".accordion");
            


            function display(){

            }

            accordion.forEach(val => {val.addEventListener("click",(Objects)=>{
                console.log(Objects)

                const content = Objects.target.parentNode.querySelector(".content");
                content.classList.toggle("contentPlus");
                Objects.target.parentNode.classList.toggle("boxShadowPlus")
            })})





            var swiper = new Swiper(".slide-content", {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                centerSlide: 'true',
                fade: 'true',
                grabCursor: 'true',
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  dynamicBullets: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
            
                breakpoints:{
                    0: {
                        slidesPerView: 1,
                    },
                    520: {
                        slidesPerView: 3,
                    },
                    950: {
                        slidesPerView: 4,
                    },
                },
              });