let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetBtn = document.getElementById("reset-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    resetBtn.removeAttribute("disabled");
    saveBtn.removeAttribute("disabled");
}


function newLi(inner){
    let el = document.createElement('li');
    let text = document.createTextNode(inner);
    el.appendChild(text);
    document.saveEl.appendChild(el);
}

function save() {
    let countStr = count + '-'
    resetBtn.removeAttribute("disabled");
    const el = document.createElement("li");
    saveEl.appendChild(el);
    el.textContent = countStr
    countEl.textContent = 0
    count = 0
}

function reset(){
    count = 0;
    countEl.textContent = count
    saveEl.textContent = ''
    resetBtn.setAttribute("disabled", true);
}
