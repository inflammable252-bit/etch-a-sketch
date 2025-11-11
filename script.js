let boxInput=16;
let boxCount = boxInput * boxInput;
canvas = 800;

container = document.querySelector(".container")

const gridInput = document.querySelector("#gridInput")
const gridSubmit = document.querySelector("#gridSubmit")

addBox(boxCount)

gridInput.addEventListener("input", (e) => {
return boxInput = e.target.value;
})

gridSubmit.addEventListener("click", () => {
    errorText = document.querySelector("#error")
    if (boxInput > 16) {
        return errorText.textContent = "Maximum size: 100";
    }
    else {
        errorText.textContent = ""
    }
   
    let oldBoxes = document.querySelectorAll(".box")
    oldBoxes.forEach((node) => node.remove())
    boxCount = boxInput * boxInput;
addBox(boxCount);
})

function addBox(count) {
    for (x=1; x<=count; x++) {
    const box = document.createElement("div");
    box.classList.toggle("box");
    container.appendChild(box);
    box.style.width = ((canvas / boxInput) - 4) + "px";
    box.style.height = ((canvas / boxInput) - 4) + "px";
    }
enableColors()
}



randomizer = () => {
    randomNum = () => {
        return String(
            (Math.round((Math.random()*190) + 65)))
    }

return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

function enableColors() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((boxdiv) => boxdiv.addEventListener("mouseover", () => {
        randomRGB = randomizer()
        boxdiv.style.backgroundColor = randomRGB;
    }))
}

console.log(randomizer())

