import * as home from './home'
import { menuItems } from './menu'
// import { contact } from './contact'

home.homepage()

const menuToggle = () => {
    home.tab1.style.color = "white";
    home.tab2.style.color = "white";
    home.tab3.style.color = "white";
}

home.title.addEventListener('click', () => {
    home.homepage();
})

home.tab1.addEventListener('click', () => {
    home.homepage();
    menuToggle();
    home.tab1.style.color = "orange";    
});

home.tab2.addEventListener('click', function(){
    menuItems();
    menuToggle();
    home.tab2.style.color = "orange";
});

home.tab3.addEventListener('click', () => {
    menuToggle();
    home.tab3.style.color = "orange";
});