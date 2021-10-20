const last = document.getElementById('last');
const next = document.getElementById('next');
const preview = document.getElementById('content');
const pageSelector = document.getElementById('pageSelector');

let pages = [];

let contents = {};

let page = 1;
let pageCount = [1, 0];

function addPage() {
    if (pageCount[1] == 0) {
        pageSelector.innerHTML = " "
    }
    pageCount[1]++;
    console.log(pageCount[1]);
    let pg = pageCount[1];
    contents[pg] = " ";
    let newPage = document.createElement('section');
    newPage.id = `page${pg}`;
    newPage.setAttribute('onclick', `editPage(${pg})`);
    newPage.innerHTML = `New Page(page${pg}), click to edit content`;
    pageSelector.appendChild(newPage);
};

function editPage(pg) {
    let editDOM = document.getElementById(`page${pg}`);
    const title = document.getElementById('title');
    const h1E = document.getElementById('h1E');
    const h2E = document.getElementById('h2E');
    const h3E = document.getElementById('h3E');
    const conE = document.getElementById('conE');
    const saveBtn = document.getElementById('saveInfo');
    saveBtn.setAttribute('onclick', `save(${pg});`);
    if (pageCount[1] == pg) {
        title.innerHTML = editDOM.innerHTML;
        h1E.value = editDOM.innerHTML;
        h1E.value = "";
        h2E.value = "";
        h3E.value = "";
        conE.value = "";
        console.log('h1');
    } else {
        title.innerHTML = editDOM.innerHTML;
        h1E.value = contents[pg][0];
        h2E.value = contents[pg][1];
        h3E.value = contents[pg][2];
        conE.value = contents[pg][3];
        console.log('h2');
    }

    title.innerHTML = editDOM.innerHTML;
    h1E.value = editDOM.innerHTML;
};

function save(pg) {
    let editDOM = document.getElementById(`page${pg}`);
    const h1E = document.getElementById('h1E');
    const h2E = document.getElementById('h2E');
    const h3E = document.getElementById('h3E');
    const conE = document.getElementById('conE');
    contents[pg] = [h1E.value, h2E.value, h3E.value, conE.value];
    title.innerHTML = 'Click Page to Edit';
    editDOM.innerHTML = h1E.value;
    h1E.value = "";
    h2E.value = "";
    h3E.value = "";
    conE.value = "";
    preview.innerHTML =
        `<h1>${contents[1][0]}</h1>
         <h2>${contents[1][1]}</h2>
         <h3>${contents[1][2]}</h3>         
         <p>${contents[1][3]}</p>         
        `;
};



last.addEventListener('click', () => {
    if (page !== pageCount[0]) {
        page--;
    } else {
        page = pageCount[1];
    }
    preview.innerHTML =
        `<h1>${contents[page][0]}</h1>
         <h2>${contents[page][1]}</h2>
         <h3>${contents[page][2]}</h3>         
         <p>${contents[page][3]}</p>         
        `;
});

next.addEventListener('click', () => {
    if (page !== pageCount[1]) {
        page++;
    } else {
        page = pageCount[0];
    }
    preview.innerHTML =
        `<h1>${contents[page][0]}</h1>
         <h2>${contents[page][1]}</h2>
         <h3>${contents[page][2]}</h3>         
         <p>${contents[page][3]}</p>         
        `;
});