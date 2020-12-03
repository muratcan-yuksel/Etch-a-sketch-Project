document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector("#container");
  
function makeRows(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    for (c = 0; c < (rows * rows); c++) {
        const gridArea= document.createElement("div");
        gridArea.className="squares";
        container.appendChild(gridArea);
        gridArea.addEventListener("mouseover", 
        e=> e.target.classList.add("hoverClass")
        )
        
    };
  };

  document.getElementById("container").style.width = "50vw";
  document.getElementById("container").style.height = "30vw";

  
makeRows(16);


  


//slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + " x" + " " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  //makeRows(this.value);
}

//slider button
let slideButton= document.getElementById("sliderButton");
slideButton.addEventListener("click", function(e){
    document.getElementById("container").innerHTML="";
    makeRows(22);
})























  });