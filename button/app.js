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
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
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
    const hexVal =Math.floor(Math.random() * 0xffffff).toString(16);
    const anotherColor = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${hexVal}`;
    button3.style.backgroundColor= `#${anotherColor}`;
    localStorage.setItem('colorFullFirst',hexVal,anotherColor)
    // localStorage.setItem('colorFullSecond',)
}
button3.addEventListener("click",changeeverythingcolor);



const changeAllColor = () => {
    const addFirstColor = localStorage.getItem('colorFullFirst');
    if(addFirstColor){
        document.body.style.background = `#${addFirstColor}`;
        button3.style.backgroundColor = `#${addFirstColor}`;
    }
}
changeeverythingcolor();