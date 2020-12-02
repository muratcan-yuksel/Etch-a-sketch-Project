document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector("#container");
//Create 16x16=256 divs inside the container div
    for (i=0; i<276; i++) {
        const gridArea= document.createElement("div");
        gridArea.className="squares";
       //gridArea.innerText="divs";
        container.appendChild(gridArea);
        gridArea.addEventListener("mouseover", 
        e=> e.target.classList.add("hoverClass")
        )
    };





























  });