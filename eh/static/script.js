// static/script.js
function showLetter() {
    document.getElementById('letterModal').style.display = 'block';
}

function showPoem() {
    document.getElementById('poemModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('letterModal').style.display = 'none';
    document.getElementById('poemModal').style.display = 'none';
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function showConfirmation() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}

function closeConfirmation() {
    document.getElementById('confirmation').style.display = 'none';
}

let isDragging = false;
let initialX;
let initialY;

const floatingDiv = document.getElementById('popup');

floatingDiv.addEventListener('mousedown', (e) => {
  isDragging = true;
  initialX = e.clientX - floatingDiv.getBoundingClientRect().left;
  initialY = e.clientY - floatingDiv.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const newX = e.clientX - initialX;
    const newY = e.clientY - initialY;

    floatingDiv.style.left = `${newX}px`;
    floatingDiv.style.top = `${newY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
