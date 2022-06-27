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