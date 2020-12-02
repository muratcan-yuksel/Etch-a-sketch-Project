document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector("#container");
//Create 16 divs inside the container div
    for (i=0; i<16; i++) {
        const gridArea= document.createElement("div");
        gridArea.className="gridDivs";
        gridArea.innerText="divs";
        container.appendChild(gridArea);
    };
  





























  });