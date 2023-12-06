// BUTTON1

const button1 = document.getElementById("btn-background");

const dontChange = () => {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${hexVal}`;
    localStorage.setItem('backgroundColor', hexVal);
}

button1.addEventListener("click", dontChange);

const staybackcolor = () => {
    const DontaddColor = localStorage.getItem('backgroundColor');
    if (DontaddColor) {
        document.body.style.background = `#${DontaddColor}`;
    }
}

staybackcolor();

//BUTTON2
const button2 = document.getElementById("button");

const changebuttoncolor = () => {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(15);
    button2.style.backgroundColor=`#${hexVal}`;
    localStorage.setItem('buttonColor',hexVal);
}
button2.addEventListener("click",changebuttoncolor );

const changeonlybuttonColor = () =>{
    const addColor = localStorage.getItem('buttonColor');
    if(addColor){
        button2.style.backgroundColor =`#${addColor}`
    }
}
changeonlybuttonColor();


//BUTTON3
const button3 = document.getElementById("changeeverything");

const changeeverythingcolor = () => {
    const bodyColor = Math.floor(Math.random() * 0xffffff).toString(16);
    const buttonColor = Math.floor(Math.random() * 0xffffff).toString(16);
    
    document.body.style.background = `#${bodyColor}`;
    button3.style.backgroundColor = `#${buttonColor}`;
    
    // Store both colors in localStorage
    localStorage.setItem('bodyColor', bodyColor);
    localStorage.setItem('buttonColor', buttonColor);
}

button3.addEventListener("click", changeeverythingcolor);

const changeAllColor = () => {
    const changeBodyColor = localStorage.getItem('bodyColor');
    const changeButtonColor = localStorage.getItem('buttonColor');

    if (changeBodyColor) {
        document.body.style.background = `#${changeBodyColor}`;
    }
    if (changeButtonColor) {
        button3.style.backgroundColor = `#${changeButtonColor}`;
    }
}

changeAllColor();
