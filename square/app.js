const square = document.querySelector(".square");
const container = document.querySelector(".container");

const getRandomPosition = () => {
    const randomWidth = `${Math.floor(Math.random() * (container.offsetWidth - 10))}px`;
    const randomHeight = `${Math.floor(Math.random() * (container.offsetHeight - 10))}px`;
    return { left: randomWidth, top: randomHeight };
}

const storedPosition = localStorage.getItem("squarePosition");
if (storedPosition) {
    const [storedLeft, storedTop] = storedPosition.split(",");
    square.style.left = storedLeft;
    square.style.top = storedTop;
}

square.addEventListener("click", () => {
    const { left, top } = getRandomPosition();

    square.style.left = left;
    square.style.top = top;

    const currentPosition = `${left},${top}`;
    localStorage.setItem("squarePosition", currentPosition);
});