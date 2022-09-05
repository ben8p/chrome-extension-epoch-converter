let previousTitle;
document.addEventListener('selectionchange', () => {
    const text = window.getSelection().toString();
    if(/^[0-9]{10,13}$/.exec(text)) {
        previousTitle = document.body.getAttribute('title');
        document.body.setAttribute('title', new Date(+text.padEnd(13, '0')).toISOString());
    } else if(!previousTitle) {
        document.body.removeAttribute('title');
    } else {
        document.body.setAttribute('title', previousTitle);
    }
});