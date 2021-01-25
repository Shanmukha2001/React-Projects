const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slidesContainer = document.querySelector(".slides-container");
const slideImage = document.querySelectorAll(".slide-image");
const navigationDots = document.querySelector(".navigation-dots");

let slideWidth =  slideImage[0].clientWidth;
let slideNumber = 0;

function init() {
    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");

    dots();
    prev();
    next();
}

function dots(){
    let lent = slideImage.length;
    for(let x =0 ;x<lent;x++){
        const dot = document.createElement("div");
        dot.classList.add("single-dot") ;
        navigationDots.appendChild(dot);
        dot.addEventListener('click',() => {
            slidesContainer.style.transform = "translateX(-"+(slideWidth * x)+"px)";
            setActive(x);
        });
    }
    navigationDots.children[0].classList.add("active");
    setActive(0);
}

function next()
{   
    nextBtn.addEventListener('click',()=>{
        console.log(slideNumber);
        if(slideNumber==4){
            slidesContainer.style.transition = "none";
        }else{
            slidesContainer.style.transition = " 900ms cubic-bezier(0.48, 0.15, 0.18, 1)";
        }
        slideNumber++; 
        if(slideNumber>=slideImage.length){
            slideNumber=slideNumber%slideImage.length;
        }
        slidesContainer.style.transform = "translateX(-"+(slideWidth * slideNumber)+"px)";
        setActive(slideNumber); 
    });
}

function prev(){
    prevBtn.addEventListener('click',()=>{
        console.log(slideNumber);
        if(slideNumber==0){
            slidesContainer.style.transition = "none";
        }else{
            slidesContainer.style.transition = " 900ms cubic-bezier(0.48, 0.15, 0.18, 1)";
        }

        if(slideNumber==0){
            slideNumber=slideImage.length-1;
        }else{
            slideNumber--;
        }
        slidesContainer.style.transform = "translateX(-"+(slideWidth * slideNumber)+"px)";
        setActive(slideNumber);
    });
}

function setActive(n){
    const act = document.querySelector(".single-dot.active");
    act.classList.remove("active");

    let sdot = document.querySelectorAll(".single-dot");
    sdot[n].classList.add("active");

    slideNumber = n;
}

init();