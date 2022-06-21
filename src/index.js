import * as home from './home'
import { menu } from './menu'
import { contact } from './contact'

home.homepage()

const menuToggle = () => {
    home.tab1.style.color = "white";
    home.tab2.style.color = "white";
    home.tab3.style.color = "white";
}

const clearPage = () => {
    while (home.card.lastChild){
        home.card.removeChild(home.card.lastChild);
    }
}
const title = document.getElementsByClassName('title'); 

title[0].addEventListener('click', () => {
    clearPage();
    home.homepage();
})

home.tab1.addEventListener('click', () => {
    clearPage();
    home.homepage();
    menuToggle();
    home.tab1.style.color = "orange";    
});

home.tab2.addEventListener('click', function(){
    clearPage();
    menu();
    menuToggle();
    home.tab2.style.color = "orange";
});

home.tab3.addEventListener('click', () => {
    clearPage();
    contact();
    menuToggle();
    home.tab3.style.color = "orange";
});