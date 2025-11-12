let boxInput=16;
let boxCount = boxInput * boxInput;
canvas = 800;
let colormode = "pastel"
let colorselect = ""

container = document.querySelector(".container")
gridPrompt = document.querySelector("#gridPrompt")
errorText = document.querySelector("#error")
pastelButton = document.querySelector("#pastel")
monochromeButton = document.querySelector("#monochrome")
colorButton = document.querySelector("#colorselect")

addBox(boxCount)

pastelButton.addEventListener("click", () => {
    colormode = "pastel";
    enableRGB();
    })

monochromeButton.addEventListener("click", () => {
    colormode = "monochrome";
    enableMonochrome();
    })

colorButton.addEventListener("input", (event) => {
    colormode = "select";
    colorselect = event.target.value;
    enableColor();
    })

window.addEventListener("mouseup", (event) => {
    const boxes = document.querySelectorAll(".box");
    if (event.button = 2) {
        container.addEventListener("contextmenu", (event) => {
            event.preventDefault()
        })
        boxes.forEach((boxdiv) => boxdiv.addEventListener("mouseover", () => {
            boxdiv.style.backgroundColor = "rgb(235, 216, 208)";
        }))
    }
})

window.addEventListener("click", (event) => {
    if (event.button = 1) {
        enabler();
    }
})

function enabler() {
    switch (colormode) {
    case "pastel":
        enableRGB()
        break;
    case "monochrome":
        enableMonochrome()
        break;
    case "select":
        enableColor();
        break;
    }
}

gridPrompt.addEventListener("click", () => {
    let promptInput = prompt("Enter new grid size. Must be a number between 1-100.");
    numberInput = parseInt(promptInput)
    if (numberInput > 100) {
        return errorText.textContent = "Must be a number between 1-100.";
    }
    else if (isNaN(numberInput)) {
        return errorText.textContent = "Must be a number between 1-100."
    }
    else if (numberInput === null) {
        return
    }
    else {
        boxInput = numberInput
        errorText.textContent = ""
        let oldBoxes = document.querySelectorAll(".box")
        oldBoxes.forEach((node) => node.remove())
        boxCount = boxInput * boxInput;
        addBox(boxCount);
    }
})

function addBox(count) {
    for (x=1; x<=count; x++) {
    const box = document.createElement("div");
    box.classList.toggle("box");
    container.appendChild(box);
    box.style.width = ((canvas / boxInput) - 4) + "px";
    box.style.height = ((canvas / boxInput) - 4) + "px";
    }
enabler()
}

randomizerRGB = () => {
    randomNum = () => {
        return String(
            (Math.round((Math.random()*190) + 65)))
    }

return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

function enableRGB() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((boxdiv) => boxdiv.addEventListener("mouseover", () => {
        randomRGB = randomizerRGB()
        boxdiv.style.backgroundColor = randomRGB;
    }))
}

randomizerMonochrome = () => {
    randomNum = () => {
        return String(
            (Math.round((Math.random()*200) + 55)))
        }
    singleRGB = randomNum();
    return `rgb(${singleRGB}, ${singleRGB}, ${singleRGB})`
} 

function enableMonochrome() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((boxdiv) => boxdiv.addEventListener("mouseover", () => {
        randomMonochrome = randomizerMonochrome()
        boxdiv.style.backgroundColor = randomMonochrome;
    }))
}

function enableColor() {
    const boxes = document.querySelectorAll(".box");

     boxes.forEach((boxdiv) => boxdiv.addEventListener("mouseover", () => {
        boxdiv.style.backgroundColor = colorselect;
    }))
}
