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