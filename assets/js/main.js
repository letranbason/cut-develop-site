var activeButton = null;

function toggleButton(button) {
    if (activeButton !== null) {
        activeButton.classList.remove('active');
    }

    if (activeButton === button) {
        activeButton = null;
    } else {
        button.classList.add('active');
        activeButton = button;
    }
}