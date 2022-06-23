function contactHead (id, text) {
    const contactHead = document.createElement('div');
    contactHead.setAttribute('class', id);
    contactHead.textContent = text;
    return contactHead;
}

function contactInfo (id, text) {
    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('class', id);
    contactInfo.textContent = text; 
    return contactInfo;
}

function addAddress(add) {
    const address = document.createElement('p');
    address.textContent = add;
    
    return address;
}

function contact() {
    const card = document.getElementsByClassName('card')[0];
    card.textContent = '';
    const heading = contactHead('heading', 'Reach out!');
    const descr = contactInfo('descr', "Wanna get in touch? Give us a call at 555-555-5555!");
    const address1 = addAddress('Wanna come over? Find us at: ');
    const address2 = addAddress('2000 Standing Water Rd.');
    const address3 = addAddress('Nirgendwo, Ga');
    card.append(heading, descr, address1, address2, address3);
}

export { contact };