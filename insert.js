let btnAdd = document.querySelector("button");
let table = document.querySelector("table");

let nameInput = document.querySelector("#name");
let numberInput = document.querySelector("#number");

btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let number = numberInput.value;
    let templete = `
    <tr>
    <td>${name}</td>
    <td>${number}</td>
    `
    table.innerHTML += templete;

    nameInput.value = "";
    numberInput.value = "";
});