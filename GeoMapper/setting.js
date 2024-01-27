// setting.js

// Function to validate name (only one alphabet and spaces)
function validateName(input) {
    return /^([a-zA-Z]{1}\s*)+$/.test(input);
}

// Function to validate latitude and longitude (only numbers and dots allowed)
function validateCoordinates(input) {
    return /^[0-9.]*$/.test(input);
}

document.addEventListener("DOMContentLoaded", function () {
    // Display the stored data when the website is started
    displayStoredData();
});


function showNotification(message) {
    const snackbar = document.getElementById('snackbar');
    // Set the message
    snackbar.textContent = message;
    // Ensure 'show' class is added to make the snackbar visible
    snackbar.className = 'show';
    // Remove 'show' class after 3 seconds
    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}

// Function to clear input fields and show notification
function clearInputFieldsAndNotify() {
    // Clear input fields
    document.getElementById('nameInput').value = '';
    document.getElementById('addressInput').value = '';
    document.getElementById('latitudeInput').value = '';
    document.getElementById('longitudeInput').value = '';

    // Notify user
    showNotification("Successfully added!");
}


function createCard(store, index) {
    return `
        <div class="card" id="card-${index}">
            <div class="div1">
                <h3>${store.name}</h3>
            </div>
            <div class="div2 flex_center">
                <h4>${store.address}</h4>
            </div>
            <div class="div3">
                <img src="icon_Pack/trash.svg" class="copy-icon" data-index="${index}" onclick="deleteStore(${index})">
            </div>
            <div class="div4">
            </div>
        </div>
    `;
}

function deleteStore(index) {
    // Get the stored data from local storage
    const storedData = JSON.parse(localStorage.getItem('stores')) || [];

    // Remove the store at the specified index
    storedData.splice(index, 1);

    // Update local storage with the modified data
    localStorage.setItem('stores', JSON.stringify(storedData));

    // Reload the page to update the displayed list
    location.reload();
}

// Add input event listeners to restrict input for specific fields
document.getElementById('nameInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

document.getElementById('latitudeInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
});

document.getElementById('longitudeInput').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
});

// Add click event listener for the "ADD" button
document.getElementById('ADD').addEventListener('click', function () {
    // Get input values
    var nameInput = document.getElementById('nameInput').value.trim();
    var addressInput = document.getElementById('addressInput').value.trim();
    var latitudeInput = document.getElementById('latitudeInput').value.trim();
    var longitudeInput = document.getElementById('longitudeInput').value.trim();

    // Check if any field is missing
    if (!nameInput || !addressInput || !latitudeInput || !longitudeInput) {
        showNotification("Please fill in all fields.");
        return;
    }

    // Validate name (only one alphabet and spaces)
    if (!validateName(nameInput)) {
        showNotification("Invalid Name! Please enter only one alphabet and spaces.");
        return;
    }

    // Validate address (non-empty)
    if (addressInput === '') {
        showNotification("Address cannot be empty!");
        return;
    }

    // Validate latitude (only numbers and dots allowed)
    if (!validateCoordinates(latitudeInput)) {
        showNotification("Invalid Latitude! Please enter only numbers and dots.")
        return;
    }

    // Validate longitude (only numbers and dots allowed)
    if (!validateCoordinates(longitudeInput)) {
        showNotification("Invalid Longitude! Please enter only numbers and dots.");
        return;
    }


    const storedData = JSON.parse(localStorage.getItem('stores')) || [];
    storedData.push({
        name: nameInput,
        address: addressInput,
        longitude: longitudeInput,
        latitude: latitudeInput
    });
    localStorage.setItem('stores', JSON.stringify(storedData));

    // Display the updated list
    displayStoredData();
    // clear and toast the message
    clearInputFieldsAndNotify();


});


document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the ID 'setting_icon'
    var settingIcon = document.getElementById('HomeIcon');
    // Add a click event listener to the setting icon
    settingIcon.addEventListener('click', function () {
        // Navigate to the 'setting.html' file
        window.location.href = 'index.html';
    });
});

function displayStoredData() {
    // Get the stored data from local storage
    const storedData = JSON.parse(localStorage.getItem('stores')) || [];
    // Get the element with the class 'List_section' where the cards will be displayed
    const listSection = document.querySelector('.List_section');
    // Clear the existing content
    listSection.innerHTML = '';
    // Display each stored store as a card
    storedData.forEach((store, index) => {
        listSection.innerHTML += createCard(store, index);
    });
}