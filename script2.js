const allBtns = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".img");

function getRandomImg(event) {
    const id = event.target.id;
    for (let i = 0; i < imgs.length; i++) {
        const className = imgs[i].className;
        if (className.includes(id)) {
            let randomNum = Math.floor(Math.random() * 100) + 1;
            imgs[i].src = `https://picsum.photos/300/300?random=${randomNum}`;
        }
    } 
}

for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", getRandomImg)
}