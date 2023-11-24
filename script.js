// let menu = document.querySelector("#menu");
// let navlist = document.querySelector(".navlist");

// menu.onclick = () => {
//     menu.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// }

// function changeMe(){
    
//     const nav = document.querySelector(".navlist ");

//     const img = document.querySelector(".icon-img");

//     if(nav.style.display == "block") {
//         nav.style.display = "none";
//         img.src ="/assets/images/icon-menu.svg";
//     }else{
//         nav.style.display ="block";
//         img.src ="/assets/images/icon-menu-close.svg";
//     }
// }

const imgIcon = document.querySelector('#icon-img')
const navIcon = document.querySelector('nav')
const navImages = document.querySelector('#menu')

navImages.onclick = function(){
    if(navIcon.style.display == 'block'){
      navIcon.style.display = 'none';
      imgIcon.src = '/assets/images/icon-menu.svg';
    }else{
      navIcon.style.display = 'block';
      imgIcon.src = '/assets/images/icon-menu-close.svg';
    }
}

