const DEFAULT_COLOR = '#3c403d;'
const DEFAULT_SIZE = 16
const DEFAULT_MODE = "color";

const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

function setCurrentMode(newMode)
{
activateButton(newMode);
currentMode = newMode;
}

function setCurrentSize(newSize)
{
currentSize = newSize;
}

function setCurrentColor(newColor){
currentColor = newColor;
}