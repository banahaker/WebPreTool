const last = document.getElementById('last');
const next = document.getElementById('next');
const preview = document.getElementById('content');
const copyCode = document.getElementById('copyCode');
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

copyCode.addEventListener('click', () => {
    let randomID = new Date().getHours();
    randomID = randomID * new Date().getSeconds();
    randomID = 'WebPreTool' + randomID;

    let templateFixed = "`<h1>${contents[page][0]}</h1><h2>${contents[page][1]}</h2><h3>${contents[page][2]}</h3> <p>${contents[page][3]}</p>`"

    let Code = `
        <div id="${randomID}" style="position: relative;margin-top: 50px;margin-bottom: 20px;box-shadow: 0px 0px 6px 8px #EBEBEB ;width: 500px;height: 300px;background-color: #007575;display: flex;align-items: center;justify-content: center;">
            <section id="content${randomID}" style="color: #fff;
            text-align: center;"></section>
            <div class="control" style="position: absolute;bottom: 10px;right: 10px;display: flex;align-items: center;background-color: rgb(41, 41, 41);color: #fff;border: none;border-radius: 3px;">
                <div class="controls" id="last${randomID}" style="border-top-left-radius: 3px; border-bottom-left-radius: 3px;height: 19px;" onMouseOver="this.style.background = 'rgb(59, 59, 59)'" onMouseOut="this.style.background = 'none'">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
                </div>
                <div class="controls" id="next${randomID}" style="border-top-right-radius: 3px; border-bottom-right-radius: 3px;height: 19px;" onMouseOver="this.style.background = 'rgb(59, 59, 59)'" onMouseOut="this.style.background = 'none'">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            const last = document.getElementById('last${randomID}');
            const next = document.getElementById('next${randomID}');
            const content = document.getElementById('contents${randomID}');

            let contents = {
                
            };

            let page = 1;
            let limitPage = [1, Object.keys(contents).length];

            window.onload = () => {
                page = 1;
                content.innerHTML = ${templateFixed};
            }


            last.addEventListener('click', () => {
                if(page !== limitPage[0]) {
                    page--;
                }else {
                    page = limitPage[1];
                }
                content.innerHTML = ${templateFixed};
            });

            next.addEventListener('click', () => {
                if(page !== limitPage[1]) {
                    page++;
                }else {
                    page = limitPage[0];
                }
                content.innerHTML = ${templateFixed};
            });
        </script>
    `;

    copyCode.setAttribute('data-clipboard-text', Code);

    let clipboard = new ClipboardJS('#copyCode');

    clipboard.on('success', function (e) {
        e.clearSelection();
        alert(`Copied!!\n The html id for this are "${randomID}"`);
    });

    clipboard.on('error', function (e) {
        alert("Copy Error, may your browser is not support this function");
    });
});