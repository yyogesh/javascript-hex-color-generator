const color = document.querySelector(".color");
const generateButton = document.querySelector(".generate");

generateButton.addEventListener('click', () => {
    const hex = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = `#${hex}`;
    color.innerHTML = `#${hex}`;
})