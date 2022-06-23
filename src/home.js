import Diner from './diner-maria-orlova.jpg' 
import { clearCard } from './load'

function heading (id, text) {
    const greeting = document.createElement('div');
    greeting.setAttribute('class', id);
    greeting.textContent = text; 
    return greeting;
}

function info (id, text) {
    const info = document.createElement('div');
    info.setAttribute('class', id); 
    info.textContent = text;
    return info;
}

function image(){
    const image = document.createElement('img');
    image.setAttribute('class', 'img-head');
    image.src = Diner;
    return image;
}

function home() {
    const card = document.getElementsByClassName('card')[0];
    card.textContent = '';
    const mainInfo = document.createElement('div');
    mainInfo.setAttribute('class', 'main-info');
    const imageHead = image();
    const greeting = heading('heading', 'Welcome.');
    const descr = info('descr', 
    'Welcome to End of the Line Cafe! We\'re open 25/8, so stop by anytime. We\'ve got just the thing to fill that gaping void.' 
    ); 
    card.append(imageHead, greeting, descr); 
}

export {home};
