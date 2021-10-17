const last = document.getElementById('last');
const next = document.getElementById('next');
const content = document.getElementById('contents');
let page = 1;
let limitPage = [1, 4];

window.onload = () => {
    page = 1
}

let contents = {
    1 : "What is WebPreTool",
    2 : "WebPreTool is a web present tool",
    3 : "It is easy-to-use",
    4 : "Who is the Developer of WebPreTool"
}


last.addEventListener('click', () => {
    if(page !== limitPage[0]) {
        page--;
    }else {
        page = limitPage[1];
    }
    content.innerHTML = contents[page];
});

next.addEventListener('click', () => {
    if(page !== limitPage[1]) {
        page++;
    }else {
        page = limitPage[0];
    }
    content.innerHTML = contents[page];
});