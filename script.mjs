
// Auto generate grid for input cells
const rows = 6;
const cols = 5;

const inputRows = document.querySelector('.inputRows');
for(let i = 0; i < rows * cols; i++) {
    const inputCell = document.createElement('li');
    inputCell.classList.add('inputCell');
    inputRows.appendChild(inputCell);
}

const keyboardStr = 'QWERTYUIOPASDFGHJKLZXCVBNM'; 
// row 1 -10, row 2 - 9, row 3 - 7

const kbRow1 = document.querySelector('.kbRow1');
const kbRow2 = document.querySelector('.kbRow2');
const kbRow3 = document.querySelector('.kbRow3');

for(let i = 0; i < keyboardStr.length; i++) {
    const keyboardCell = document.createElement('li');
    keyboardCell.classList.add('keyboardCell');
    keyboardCell.textContent = keyboardStr[i];
    if(i < 10) kbRow1.appendChild(keyboardCell);
    else if(i < 19) kbRow2.appendChild(keyboardCell);   
    else kbRow3.appendChild(keyboardCell);
}