const btnClear = document.querySelector('#reset');
const inputs = document.querySelectorAll('input');

btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value)
})
let mainTitle = document.querySelector('#h');
let curValue = 0 ;
let btnDecrement = document.querySelector('#decrement');
let btnReset = document.querySelector('#reset');
let btnIncrement = document.querySelector('#increment');

document.addEventListener('DOMContentLoaded', () => {
    const savedValue = localStorage.getItem('save');
    if (savedValue !== null) {
        curValue = parseInt(savedValue);
        mainTitle.textContent = curValue;
    }
});

btnDecrement.addEventListener('click',() =>{
    curValue++;
    mainTitle.textContent =curValue ;
    addLocalStorage()
});

btnIncrement.addEventListener('click',() =>{
    curValue--;
    mainTitle.textContent =curValue ;
    addLocalStorage() 
});
 
btnReset.addEventListener('click',() =>{
    curValue = 0 ;
    mainTitle.textContent =curValue ;
    addLocalStorage()  
});

function addLocalStorage() {
    // Save the current value to local storage
    localStorage.setItem("save", curValue);
}













// const storedPosition = localStorage.getItem("squarePosition");
// if (storedPosition) {
//     const [storedLeft, storedTop] = storedPosition.split(",");
//     square.style.left = storedLeft;
//     square.style.top = storedTop;
// }

// const currentPosition = `${left},${top}`;
//     localStorage.setItem("squarePosition", currentPosition);