let boxInput=16;
let boxCount = boxInput * boxInput;
canvas = 800;

container = document.querySelector(".container")

gridPrompt = document.querySelector("#gridPrompt")
errorText = document.querySelector("#error")

addBox(boxCount)

gridPrompt.addEventListener("click", () => {
    let promptInput = prompt("Enter grid size up to 100.");
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

