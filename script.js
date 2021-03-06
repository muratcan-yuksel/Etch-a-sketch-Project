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
        //black color hovering
        let blackButton= document.getElementById("black");
        blackButton.addEventListener("click", function(e){
            gridArea.addEventListener("mouseover", function(e) {
              //the following copies the rainbow neon effect but changes the pixels to zero
              //so that they won't have any effect, i.e. reverse the neon effect
              var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colorString = '0px 0px 0px 0px '; // if you add this, you'll get an occasional neon effect + color;
    this.style['box-shadow'] = colorString;
    this.style['-webkit-box-shadow'] = color;
    this.style['-moz-box-shadow'] = color;
             e.target.style.backgroundColor="black";
           
           
            })
        })
        //blackish techno color function
        let colorful = document.getElementById("rainbow");
rainbow.addEventListener("click", function (e){
    gridArea.addEventListener("mouseover", function(e){
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colorString = '5px 5px 20px 5px ' + color;
    this.style['box-shadow'] = colorString;
    this.style['-webkit-box-shadow'] = color;
    this.style['-moz-box-shadow'] = color;
    e.target.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`;
})
});     
    };
  };
//define the height and width with js
  document.getElementById("container").style.width = "50vw";
  document.getElementById("container").style.height = "30vw";

  //call the function initially
makeRows(16);

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
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