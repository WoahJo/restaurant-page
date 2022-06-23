function contact() {
    const contactHead = document.createElement('div');
    const contactInfo = document.createElement('div');
    
    contactHead.textContent = 'Reach out!';
    contactInfo.textContent = 'Wanna get in touch? Give us a call at 555-555-5555';

    contactHead.classList.add('heading');
    contactInfo.classList.add('descr');

    home.card.append(contactHead, contactInfo);
}

export { contact };