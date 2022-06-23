function createHeader(id, text){
    const header = document.createElement('div');
    header.setAttribute('class', id);
    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = text; 
    header.appendChild(title);
    return header;
  };
  
  function createTabs(id, name) {
    const tab = document.createElement('li');
    tab.setAttribute('class', id);
    tab.textContent = name;
    return tab;
  };
  
  function createNav(id) {
    const nav = document.createElement('ul');
    nav.setAttribute('class', id);
    const homeTab = createTabs('tab1', 'Home');
    const menuTab = createTabs('tab2', 'Menu');
    const contactTab = createTabs('tab3', 'Contact');
    
    nav.append(homeTab, menuTab, contactTab);
    return nav;
  };
  function createCard(id){
    const card = document.createElement('div');
    card.setAttribute('class', 'card');  
    return card;
  };
  
  function createFooter(text) {
    const footer = document.createElement('footer');
    footer.textContent = text;
    return footer;
  };
  
  function createMain(id){
    const mainInfo = document.createElement('div');
    mainInfo.setAttribute('class', 'main-info');  
    return mainInfo;
  }
  
  function loadPage(){
    const content = document.getElementById('content');
    const header = createHeader('header', 'End of the Line Cafe');
    const tabs = createNav('tabs');
    const footer = createFooter('Made by WoahJo');
    const mainInfo = createMain('main-info');
    const card = createCard('card');
    
    
    content.append(header, mainInfo, footer);
    mainInfo.appendChild(card);
    header.appendChild(tabs);
  };

  export { loadPage };