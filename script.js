const boxArea = document.getElementById('boxArea')

 

function createBoxes (16)




for (let i = 0; i < 49; i++) {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    boxArea.appendChild(newBox);

    newBox.addEventListener("mouseover", () => {
        // Call your colorBox function here and pass newBox as an argument
        colorBox(newBox);
    });
}



function colorBox (newBox) {
        newBox.style.backgroundColor = "blue";
}

