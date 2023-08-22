const resetButton = document.getElementById('resetButton')
const slider = document.querySelector('.slider')
const gridSizeLabel = document.getElementById('num')
const gridArea = document.getElementById('gridArea')
const rainbowButton = document.getElementById('rainbow')
const darkenButton = document.getElementById('darken')
const colorPickerButton = document.getElementById('colorPicker')
const sizeInfo = document.getElementById('num')
const gridOnOff = document.getElementById('gridOnOff')

 let currentMode = colorPicker;

 gridOnOff.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.classList.toggle('with-border');
  });
});

 slider.addEventListener('input', () => {
  const gridSize = parseInt(slider.value);
  gridSizeLabel.textContent = gridSize;
  gridArea.style.setProperty('--columns', gridSize); // Update the --columns custom property
  createGrid(gridSize);
});




function createGrid(gridSize) {
  gridArea.innerHTML = '';
  sizeInfo.textContent = gridSize;
  for (let i = 0; i < gridSize * gridSize; i++){
    const box = document.createElement('div');
    box.classList.add('box')
    gridArea.appendChild(box)
    box.addEventListener('mouseenter', () => {
      currentMode(box)
    })
  }
}



colorPickerButton.addEventListener('change', () => {
  currentMode = colorPicker;
  resetOpacity();

});

function colorPicker(box) {
  box.style.backgroundColor = colorPickerButton.value;
  resetOpacity();
}

resetButton.addEventListener('click', resetGrid)

function resetGrid() {
 const boxes = document.querySelectorAll('.box')
 boxes.forEach((box) => {
  box.style.backgroundColor = '';
 })
}

rainbowButton.addEventListener('click', () => {
  currentMode = rainbow;
})

function rainbow(box) {
  box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

}

darkenButton.addEventListener('click', () => {
  currentMode = darken;
});


// Add event listener to darken button
darkenButton.addEventListener('click', () => {
  currentMode = darken;
});

// Function to darken the box color
function darken(box) {
  const currentOpacity = parseFloat(box.style.opacity) || 0;
  const newOpacity = currentOpacity + 0.1;
  if (currentOpacity < 1) {
    if (newOpacity <= 0.1) {
      box.style.opacity = 0.1;
    } else {
      box.style.opacity = newOpacity;
    }
    const newColor = `rgba(0, 0, 0, ${newOpacity})`;
    box.style.backgroundColor = newColor;
  }
}


function resetOpacity() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.style.opacity = ''; // Reset the opacity to its default value
  });
}



createGrid(4);