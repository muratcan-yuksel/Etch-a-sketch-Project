document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector("#container");
    /*
//Create 16x16=256 divs inside the container div
    for (i=0; i<256; i++) {
        const gridArea= document.createElement("div");
        gridArea.className="squares";
       //gridArea.innerText="divs";
        container.appendChild(gridArea);
        gridArea.addEventListener("mouseover", 
        e=> e.target.classList.add("hoverClass")
        )
    };
*/
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        const gridArea= document.createElement("div");
        gridArea.className="squares";
       //gridArea.innerText="divs";
        container.appendChild(gridArea);
        gridArea.addEventListener("mouseover", 
        e=> e.target.classList.add("hoverClass")
        )
    };
  };
  //document.getElementById("container").style.width = "300px";
  

  makeRows(16, 16);




























  });