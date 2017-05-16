document.addEventListener('DOMContentLoaded', (event) => { 
    let blocks = document.querySelectorAll('pre code');
    for(let i = 0; i < blocks.length; i++) {
        hljs.highlightBlock(blocks[i]);
        blocks[i].className += ' show';
    }
});