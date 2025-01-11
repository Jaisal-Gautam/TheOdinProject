let gridSpace=document.querySelector(".game")
let gridBtn=document.querySelector("#grid-btn")

gridBtn.addEventListener('click',()=>{
    let gridValue=prompt("Enter Grid")
    if(isNaN(gridValue) || gridValue < 1 || gridValue > 100){
        alert(`Please enter a valid number between 1 and 100`);
        return;
    }
    grid(gridValue)
})



function grid(gridValue){
    gridSpace.innerHTML=""
    let pad=parseInt((610/gridValue)/2)+"px"
    for(let i=0;i<gridValue;i++){
        let gridColumn=document.createElement("div")
        gridColumn.classList.add("gridColumn")
        for(let j=0;j<gridValue;j++){
            let gridRow=document.createElement("div")
            gridRow.classList.add("gridRow")
            gridRow.style.padding=pad;

            gridRow.addEventListener("mouseenter",()=>{
                gridRow.style.backgroundColor=getRandomColor()
            })
            gridColumn.appendChild(gridRow)
        }
        gridSpace.appendChild(gridColumn)
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



grid(10)