const container = document.querySelector(".container");

function setTable (n) {
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
}

setTable(16);
    


