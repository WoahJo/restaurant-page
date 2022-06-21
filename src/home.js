export const content = document.getElementById('content');
export const header = document.createElement('div');//append to content
export const title = document.createElement('div');
export const tabs = document.createElement('ul'); 
export const tab1 = document.createElement('li');
export const tab2 = document.createElement('li');
export const tab3 = document.createElement('li');
export const mainInfo = document.createElement('div');//append to content
export const card = document.createElement('div');
export const heading = document.createElement('div');
export const descr = document.createElement('div');
export const footer = document.createElement('footer');//append to header

function homepage(){
    //assign classes to elements
    header.classList.add('header');
    title.classList.add('title');
    tabs.classList.add('tabs');
    mainInfo.classList.add('main-info');
    card.classList.add('card');
    heading.classList.add('heading');
    descr.classList.add('descr');

    //add content to elements
    title.textContent = 'End of the Line Cafe';
    tab1.textContent = 'Home';
    tab2.textContent = 'Menu';
    tab3.textContent = 'Contact';

    heading.textContent = 'Some Generic Greeting!';
    descr.textContent = 'Welcome to End of the Line Cafe! We\'re open 25/8, so stop by anytime. We\'ve got just the thing to fill that gaping void.';
    footer.textContent = 'Made by WoahJo';

    //append children to parent elements starting with those appened to content
    content.append(header, mainInfo, footer);
    tabs.append(tab1, tab2, tab3);
    header.append(title, tabs);
    mainInfo.appendChild(card);
    card.append(heading, descr);

    

};

export { homepage };


// function createHeader(id, text){
//     const header = document.createElement('div');
//     header.setAttribute('class', id);
//     const title = document.createElement('div');
//     title.setAttribute('class', 'title');
//     title.textContent = text; 
//     header.appendChild(title);
//     title.style.color = "blue";
//     return header;
//   };
  
//   function createTabs(id, name) {
//     const tab = document.createElement('li');
//     tab.setAttribute('class', id);
//     tab.textContent = name;
//     return tab;
//   };
  
//   function createNav(id) {
//     const nav = document.createElement('ul');
//     nav.setAttribute('class', id);
//     const homeTab = createTabs('homeTab', 'Home');
//     const menuTab = createTabs('menuTab', 'Menu');
//     const contactTab = createTabs('contactTab', 'Contact');
    
//     nav.append(homeTab, menuTab, contactTab);
//     return nav;
//   };
//   function createCard(id){
//     const card = document.createElement('div');
//     card.setAttribute('class', 'card');  
//   };
  
//   function createFooter(text) {
//     const footer = document.createElement('footer');
//     footer.textContent = text;
//     return footer;
//   };
  
//   function mainInfo(id){
//     const mainInfo = document.createElement('div');
//     mainInfo.setAttribute('class', 'main-info');  
//   }
  
//   function loadPage(){
//     const content = document.getElementById('content');
//     const header = createHeader('header', 'Hi.');
//     const tabs = createNav('tabs');
//     const footer = createFooter('Made by WoahJo');
    
//     content.append(header, tabs, footer);
//   };
  