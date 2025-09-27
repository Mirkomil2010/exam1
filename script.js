// 1-vazifa
let btn = document.getElementById('btn');
let p = document.getElementById('p');

btn.addEventListener('click', () => {
    p.textContent = 'Salom!';
})

// 2-vazifa
const addBtn = document.getElementById('addbtn');
const myList = document.getElementById('mylist');

addBtn.addEventListener('click', () => {
    const text = prompt("element kiriting:", "");
    if (text === null) return;
    const trim = text.trim();
    if (trim === "") {
        alert("Xato");
        return;
    }
    const li = document.createElement('li');
    li.textContent = trim;
    myList.appendChild(li);
});

// // 3-vazifa
const textarea = document.getElementById('myTextarea');
const pragraph = document.getElementById('p');



textarea.addEventListener('input', () => {
    let val = textarea.value;
    let len = val.length;
    pragraph.textContent = len
});

// 4-vazifa

    let count = 0;
    const buttons = document.querySelectorAll("button");
    const display = document.getElementById("count");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            count++;
            display.textContent = count;
        });
    });