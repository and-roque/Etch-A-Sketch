const container = document.querySelector(".container");
setTable(16);
drawing();

//Set table size
function setTable (n) {
    container.replaceChildren(); //Deletes container's DIVs
    for (let i=0; i<n; i++){
        const newColumn = document.createElement("div");
        newColumn.classList.add(`cl${i}`);
        newColumn.classList.add(`column`);
        container.appendChild(newColumn);
        for (let x=0; x<n; x++){
            const column = document.querySelector(`.cl${i}`);
            const newLine = document.createElement("div");
            newLine.classList.add('square');
            column.appendChild(newLine);
        }
    }
    const square = document.querySelector(".square");
    square.width = 720/n;
    square.height = 720/n;
}

//Event listener for button "SET TABLE SIZE"
const btnSetTableSize = document.querySelector("#setTableSize");
btnSetTableSize.addEventListener('click', () => {
    let tableSize = prompt("Please set table size");
    if (tableSize>100 || tableSize<1){
        tableSize = prompt("Please set a size between 1-100");
    } else {
        setTable(tableSize);
        console.log("HEY");
        drawing();
    }
});

//Event listener for "Hover -> change background"
function drawing() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
    square.addEventListener('mouseover', ()=>{
        //square.style.backgroundColor = "black";
        square.style.backgroundColor = randomRgb();
        });
    });
};

function randomRgb () {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let value = "#"+ randomColor;
    return value;
};