// Function to change the text content dynamically
function changeText() {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.textContent = 'The text has been changed!';
}

// Function to change the color of the box
function changeColor() {
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = colorBox.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
}

// Function to add an element
function addElement() {
    const container = document.getElementById('element-container');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph element.';
    container.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const container = document.getElementById('element-container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    } else {
        alert('No elements to remove.');
    }
}

// Event listeners for button clicks
document.getElementById('change-text-btn').addEventListener('click', changeText);
document.getElementById('change-color-btn').addEventListener('click', changeColor);
document.getElementById('add-element-btn').addEventListener('click', addElement);
document.getElementById('remove-element-btn').addEventListener('click', removeElement);