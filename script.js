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


function addBox(count) {
    for (x=1; x<=count; x++) {
    const box = document.createElement("div");
    box.classList.toggle("box");
    container.appendChild(box);
    box.style.width = ((canvas / boxInput) - 4) + "px";
    box.style.height = ((canvas / boxInput) - 4) + "px";
    }

let boxes = document.querySelectorAll(".box");

colorButton.addEventListener("input", (event) => {
    colormode = "select";
    colorselect = event.target.value;
    })

pastelButton.addEventListener("click", () => {
    colormode = "pastel";
    })

monochromeButton.addEventListener("click", () => {
    colormode = "monochrome";
    })

let previousSelection = colormode;
container.addEventListener("mousedown", (event) => {
    if (event.buttons === 2 && colormode !== "erase") {
        previousSelection = colormode;
        colormode = "erase";
    }
})
container.addEventListener("mousedown", (event) => {
    if (event.button === 0 && colormode === "erase") {
        colormode = previousSelection;
    }
})

container.addEventListener("contextmenu", (event) => {
    event.preventDefault()
})


boxes.forEach((boxdiv) => boxdiv.addEventListener("mouseover", () => {

switch (colormode) {
    case "pastel":     
        boxdiv.style.backgroundColor = randomizerRGB();
        opacityHelper(boxdiv);
        break;
    case "monochrome":
        boxdiv.style.backgroundColor = randomizerMonochrome();
        opacityHelper(boxdiv)    
        break;
    case "select":
        boxdiv.style.backgroundColor = colorselect;
        opacityHelper(boxdiv)
        break;
    case "erase":
        boxdiv.style.backgroundColor = "rgb(235 216 208)";
        boxdiv.style.opacity = "0"
        break;
    }
}))

function opacityHelper(boxdiv) {
    let currentOpacity = parseFloat(boxdiv.style.opacity) || 0;
    currentOpacity = Math.min(currentOpacity + 0.1, 1);
    boxdiv.style.opacity = currentOpacity;
}

randomizerRGB = () => {
    randomNum = () => {
        return String(
            (Math.round((Math.random()*190) + 65)))
    }
return `rgb(${randomNum()} ${randomNum()} ${randomNum()})`
}

randomizerMonochrome = () => {
    randomNum = () => {
        return String(
            (Math.round((Math.random()*200) + 55)))
        }
    singleRGB = randomNum();
    return `rgb(${singleRGB} ${singleRGB} ${singleRGB})`
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