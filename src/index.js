import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
import {loadPage } from './load'

loadPage();
home();

function tabSwitch(){
    const homeTab = document.getElementsByClassName('tab1')[0];
    const menuTab = document.getElementsByClassName('tab2')[0];
    const contactTab = document.getElementsByClassName('tab3')[0];

    homeTab.addEventListener('click', home);
    menuTab.addEventListener('click', menu);
    contactTab.addEventListener('click', contact);
};

tabSwitch();

// const menuToggle = () => {
//     home.tab1.style.color = "white";
//     home.tab2.style.color = "white";
//     home.tab3.style.color = "white";
// }

// const title = document.getElementsByClassName('title'); 
// const homeTab = document.getElementsByClassName('tab1');
// const menuTab = document.getElementsByClassName('tab2');
// const aboutTab = document.getElementsByClassName('tab3');

// title[0].addEventListener('click', () => {
//     clearPage();
//     home.homepage();
// })

// home.tab1.addEventListener('click', () => {
//     clearPage();
//     home.homepage();
//     menuToggle();
//     home.tab1.style.color = "orange";    
// });

// home.tab2.addEventListener('click', function(){
//     clearPage();
//     menu();
//     menuToggle();
//     home.tab2.style.color = "orange";
// });

// home.tab3.addEventListener('click', () => {
//     clearPage();
//     contact();
//     menuToggle();
//     home.tab3.style.color = "orange";
// });