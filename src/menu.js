

function menu(){
    while (home.card.lastChild){
        home.card.removeChild(home.card.lastChild);
    };

    const menuHead = document.createElement('div');
    const menuInfo = document.createElement('div');

    
    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');
    
    const menuDesc1 = document.createElement('div');
    const menuDesc2 = document.createElement('div');
    const menuDesc3 = document.createElement('div');
    const menuDesc4 = document.createElement('div');
    
    menuHead.classList.add('heading');
    menuItem1.classList.add('menu-item');
    menuItem2.classList.add('menu-item');
    menuItem3.classList.add('menu-item');
    menuItem4.classList.add('menu-item');
    
    menuInfo.classList.add('descr');
    menuDesc1.classList.add('descr');
    menuDesc2.classList.add('descr');
    menuDesc3.classList.add('descr');
    menuDesc4.classList.add('descr');
    
    home.card.append(menuHead, menuInfo, menuItem1, menuDesc1, menuItem2, menuDesc2, menuItem3, menuDesc3, menuItem4, menuDesc4);
    
    menuHead.textContent = 'Menu';
    menuInfo.textContent = 'Whether you\'re looking for a late dinner or an early breakfast, we\'ve got the cure to fix what ails ya.'; 

    menuItem1.textContent = 'Grease-cakes w/ Maple - $12';
    menuDesc1.textContent = 'Pancakes cooked in enough oil to fry a bull and drowned in locally-tapped maple. Comes with a side of sausage and 2 eggs.'

    menuItem2.textContent = 'Soup... Surprise! - $5';
    menuDesc2.textContent = 'Get a bowl full of whatever didn\'t sell so well the night before pureed and salted. It\'s still good, we swear. Comes with toast.';

    menuItem3.textContent = 'The Cow Lick - $13';
    menuDesc3.textContent = 'Fresh beef straight from the slaughter to your plate... with a few stops in between. Blanket your beautiful beef baby in a bounty of bubbling brie. We\'re kiddin\', it\'s just Kraft Singles. Comes with fries and a drink.';

    menuItem4.textContent = '';
    menuDesc4.textContent = '';

};

export { menu };