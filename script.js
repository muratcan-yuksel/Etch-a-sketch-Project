document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector("#container");
  
function makeRows(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    for (c = 0; c < (rows * rows); c++) {
        const gridArea= document.createElement("div");
        gridArea.className="squares";
       //gridArea.innerText="divs";
        container.appendChild(gridArea);
        gridArea.addEventListener("mouseover", 
        e=> e.target.classList.add("hoverClass")
        )
        
    };
  };

  document.getElementById("container").style.width = "50vw";
  document.getElementById("container").style.height = "30vw";

  

  makeRows(16);




























  });