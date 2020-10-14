const colorPicker = document.querySelector('#colorPicker'); // to catch the colorPicker input
const sizePicker = document.querySelector('#sizePicker'); // to catch the sizePicker input
const pixelCanvas = document.querySelector('#pixelCanvas'); // to manage the pixelCanvas table

let inkColor = '#000000'; // for Ink Color
let height = 1; // grid row number
let width = 1; // grid column number


sizePicker.addEventListener("submit",function(event){ // when user clicks submit
    event.preventDefault();  // default page refresh action
    height = sizePicker.elements["height"].value;  //to set height variable
    width = sizePicker.elements["width"].value; //to set width variable
    makeGrid(height,width);  // call the function with height and width variables
}
);

function makeGrid(height, width) { // create table function
  pixelCanvas.innerHTML = ''; // to empty pixelCanvas
  for (let rows = 0 ; rows < height ; rows++){ // do the followings "height" times
    pixelCanvas.insertAdjacentHTML("beforeend","<tr></tr>"); // add table row
    let row = pixelCanvas.querySelectorAll('tr')[rows]; // take the added row
      for (let cols = 0 ; cols < width ; cols ++){ //do the followings "width" times for the row
        row.insertAdjacentHTML("beforeend","<td></td>"); // add table cell for the row
      }
  }
}

pixelCanvas.addEventListener('click', function(event){ // to listen the click activity for pixelCanvas table
  inkColor = colorPicker.value; // set the inkColor to the selected color
  if (event.target.nodeName ==='TD'){  // if the clicked node is a table cell, do the following
    event.target.style.backgroundColor = inkColor; // change the background color of the clicked item with the selected color
  }
})
