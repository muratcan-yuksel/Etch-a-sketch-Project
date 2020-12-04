document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector("#container");
  //core function to create divs 
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
        //blackish colorful hovering effect function 
        let colorful = document.getElementById("rainbow");
rainbow.addEventListener("click", function (e){
    gridArea.addEventListener("mouseover", function(e){

    
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colorString = '0px 0px 30px 0px ' + color;
    this.style['box-shadow'] = colorString;
    this.style['-webkit-box-shadow'] = colorString;
    this.style['-moz-box-shadow'] = colorString;
})
});

        
    };
  };

  document.getElementById("container").style.width = "50vw";
  document.getElementById("container").style.height = "30vw";

  //call the function initially
makeRows(16);

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + " x" + " " + slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  
}

//slider button
let slideButton= document.getElementById("sliderButton");
//updates the container/grids when the button is pressed
slideButton.addEventListener("click", function(e){
    document.getElementById("container").innerHTML="";
    makeRows(output.innerHTML);
})























  });