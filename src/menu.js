import { clearCard } from './load'

function menuHead (id, text){
    const heading = document.createElement('div');
    heading.setAttribute('class', id);
    heading.textContent = text;
    return heading;
}

function menuDesc(id, text) {
    const descr = document.createElement('div');
    descr.setAttribute('class', id);
    descr.textContent = text; 
    return descr; 
}

function itemTitle (id, text) {
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class', id);
    menuItem.textContent = text;
    return menuItem;
}

function itemDescr (id, text) {
    const itemInfo = document.createElement('div');
    itemInfo.setAttribute('class', id);
    itemInfo.textContent = text;
    return itemInfo;
}

function menu () {
    const card = document.getElementsByClassName('card')[0]; 
    clearCard();
    const heading = menuHead('heading', 'Menu');
    const descr = menuDesc('descr', 
    'Whether you\'re looking for a late dinner or an early breakfast, we\'ve got the cure to fix what ails ya.'
    );

    const menuItem1 = itemTitle('menu-item', 'Grease-cakes w/ Maple - $12');
    const menuItem2 = itemTitle('menu-item', 'Soup... Surprise! - $5');
    const menuItem3 = itemTitle('menu-item', 'The Cow Lick - $13');

    const menuDesc1 = itemDescr('descr', 'Pancakes cooked in enough oil to fry a bull and drowned in locally-tapped maple. Comes with a side of sausage and 2 eggs.');
    const menuDesc2 = itemDescr('descr', 'Get a bowl full of whatever didn\'t sell so well the night before pureed and salted. It\'s still good, we swear. Comes with toast.');
    const menuDesc3 = itemDescr('descr', 'Fresh beef straight from the slaughter to your plate... with a few stops in between. Blanket your beautiful beef baby in a bounty of bubbling brie. We\'re kiddin\', it\'s just Kraft Singles. Comes with fries and a drink.');
    card.append(heading, descr, menuItem1, menuDesc1, menuItem2, menuDesc2, menuItem3, menuDesc3);
}

export { menu };