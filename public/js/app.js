document.addEventListener("DOMContentLoaded", (event) => { 
    let block = document.querySelector('pre code');
    console.log(block)
    hljs.highlightBlock(block);
});