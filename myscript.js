const gridDraw = document.querySelector("#grid-draw");
const colorBtn = document.querySelector("#colorBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const clearBtn = document.querySelector("#clearBtn");
const slider = document.querySelector(".slider");

let color = "black";

//grid cells
function createGrid (rows, columns) {
    gridDraw.innerHTML = "";

    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement("div");
        gridDraw.appendChild(cell);
    };
}

// color button
colorBtn.addEventListener("click", () => {
    color = prompt("Enter a color");
});

// erase button
eraseBtn.addEventListener("click", () => {
    color = "white";
});

// clear button
clearBtn.addEventListener("click", () => {
    console.log("Clear button clicked");
    const cells = document.querySelectorAll("#grid-panel div");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
});

// slider value
slider.addEventListener("input", () => {
    const rows = slider.value;
    const columns = slider.value;
    createGrid(rows, columns);
});

createGrid(16,16);

// draw on grid
gridDraw.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = color;
});