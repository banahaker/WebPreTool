const last = document.getElementById('last');
const next = document.getElementById('next');
const content = document.getElementById('contents');

let contents = {
    1 : ["What is WebPreTool", "2021-10-18", "LAZP", ""],
    2 : ["WebPreTool is a web present tool", "", "", ""],
    3 : ["It is easy-to-use", "", "", ""],
    4 : ["Who is the Developer of WebPreTool?", "", "", ""],
    5 : ["LAZPbanahaker", "", "", ""],
    6 : ["Thank for watch!!", "", "", ""],
};

let page = 1;
let limitPage = [1, Object.keys(contents).length];

window.onload = () => {
    page = 1;
    content.innerHTML = 
        `<h1>${contents[page][0]}</h1>
         <h2>${contents[page][1]}</h2>
         <h3>${contents[page][2]}</h3>         
         <p>${contents[page][3]}</p>         
        `;
}


last.addEventListener('click', () => {
    if(page !== limitPage[0]) {
        page--;
    }else {
        page = limitPage[1];
    }
    content.innerHTML = 
        `<h1>${contents[page][0]}</h1>
         <h2>${contents[page][1]}</h2>
         <h3>${contents[page][2]}</h3>         
         <p>${contents[page][3]}</p>         
        `;
});

next.addEventListener('click', () => {
    if(page !== limitPage[1]) {
        page++;
    }else {
        page = limitPage[0];
    }
    content.innerHTML = 
        `<h1>${contents[page][0]}</h1>
        <h2>${contents[page][1]}</h2>
        <h3>${contents[page][2]}</h3>         
        <p>${contents[page][3]}</p>         
        `;
});