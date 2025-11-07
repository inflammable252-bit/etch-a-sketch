boxInput=16;
boxCount = boxInput*boxInput
canvas = 800;

container = document.querySelector(".container")

function addBox(count) {
        for (x=1; x<=count; x++) {
            const box = document.createElement("div");
            box.classList.toggle("box");
            container.appendChild(box);
            box.style.width = ((canvas / boxInput) - 4) + "px";
            box.style.height = ((canvas / boxInput) - 4) + "px";
        }
    }

addBox(boxCount)

const boxes = document.querySelectorAll(".box");
boxes.forEach((boxdiv) => boxdiv.addEventListener("mouseover", () => {
    boxdiv.style.backgroundColor = "red"
}))

