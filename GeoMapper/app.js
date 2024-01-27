
// Constants
const GOOGLE_MAPS_API_KEY = 'AIzaSyCfYd6qnguPKWut9p4I8PQbx8reuvFBD5Q';

// Define the Outlets class
class Outlets {
    constructor(name, address, longitude, latitude) {
        this.name = name;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}

// Create an empty array named 'stores' to store outlet information
let stores = [];

// Retrieve the data from local storage
const storedData = JSON.parse(localStorage.getItem('stores')) || [];


function createCard(store, index, distance = null) {
    return `
        <div class="card" id="card-${index}">
            <div class="div1">
                <h3>${store.name}</h3>
            </div>
            <div class="div2 flex_center">
                <h4>${store.address}</h4>
            </div>
            <div class="div3">
                <img src="Icon_Pack/copy-outline.svg" class="copy-icon" data-index="${index}">
            </div>
            <div class="div4">
                <h4>${distance ? `Distance: ${distance.toFixed(2)} km` : 'Distance: Calculate Distance Here'}</h4>
            </div>
        </div>
    `;
}

function showNotification(message, isError = false) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.className = 'show' + (isError ? ' error' : '');
    // Change text color based on error status
    snackbar.style.color = isError ? 'red' : 'white';
    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}

function copyAddress(index) {
    const store = stores[index];
    const address = store.address;
    navigator.clipboard.writeText(address)
        .then(() => {
            showNotification('Copied: ' + address);
        })
        .catch(err => {
            console.error('Could not copy text: ' + err.message);
            showNotification('Could not copy text: ' + err.message, true);
        });
}

// Function to perform empty field action
function performEmptyFieldAction() {
    // Your function logic when the search field is empty
    console.log('Search field is empty. Perform specific action here.');
}


// Cached geocoding results
const cachedGeocoding = {};

// Flag for geocoding in progress
let isGeocodingInProgress = false;

// Function to handle empty field action
function handleEmptyField() {
    console.log('Search field is empty. Perform specific action here.');
}

// Function to perform geocoding
async function geocodeAddress(address) {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`;

    try {
        if (cachedGeocoding[address]) {
            fillCards(cachedGeocoding[address].latitude, cachedGeocoding[address].longitude);
            return;
        }

        const response = await fetch(geocodingUrl);
        const data = await response.json();

        if (data.results.length > 0) {
            const location = data.results[0].geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
            cachedGeocoding[address] = { latitude, longitude };
            fillCards(latitude, longitude);
            console.log('Latitude:', latitude, 'Longitude:', longitude);
        } else {
            console.error('No results found for the provided address.');
            showNotification('No results found for the provided address.', true);
        }
    } catch (error) {
        console.error('Error fetching geocoding data:', error);
        showNotification(`Error fetching geocoding data: ${error.message}`, true);
    }
}


// Function to fill the cards with store details including distances in ascending order
function fillCards(latitude, longitude) {
    const h2Element = document.getElementById('Lat_long_disp');
    h2Element.innerText = 'Latitude & Longitude: ' + latitude + ' , ' + longitude;
    const listSection = document.querySelector('.List_section');
    listSection.innerHTML = ''; // Clear previous content
    stores.forEach(store => {
        const distance = calculateDistance(latitude, longitude, store.latitude, store.longitude);
        store.distance = distance;
    });

    stores.sort((a, b) => a.distance - b.distance);

    stores.forEach((store, index) => {
        const cardHTML = createCard(store, index, store.distance);
        listSection.innerHTML += cardHTML;
    });

    const copyIcons = document.querySelectorAll('.copy-icon');
    copyIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            copyAddress(index);
        });
    });
}


function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

// Event listener for the copy icon associated with the search bar
const copySearchIcon = document.getElementById('copySearchIcon');
if (copySearchIcon) {
    copySearchIcon.addEventListener('click', copyTextFromSearchBar);
}

function copyTextFromSearchBar() {
    const addressInput = document.getElementById('addressInput');
    const textToCopy = addressInput.value;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                showNotification('Copied: ' + textToCopy);
            })
            .catch(err => {
                showNotification('Could not copy text: ' + err.message, true);
                showNotification('Could not copy text: ' + error.message, true);

            });
    }
}

const githubIcon = document.getElementById('githubIcon');
if (githubIcon) {
    githubIcon.onclick = function () {
        // Redirect to the GitHub homepage
        window.location.href = 'https://github.com/theheld';
    };
}

// Function to disable the GeoMap button
function disableGeoMapButton() {
    const geoMapButton = document.getElementById('geoMapButton');
    geoMapButton.disabled = true;
}

// Function to enable the GeoMap button
function enableGeoMapButton() {
    const geoMapButton = document.getElementById('geoMapButton');
    geoMapButton.disabled = false;
}


// Event listener for the GeoMap button
document.getElementById('geoMapButton').addEventListener('click', async function () {
    const address = document.getElementById('addressInput').value.trim();

    if (!address) {
        handleEmptyField();
        return;
    }

    if (isGeocodingInProgress) {
        return;
    }

    isGeocodingInProgress = true;
    disableGeoMapButton();

    try {
        await geocodeAddress(address);
        showNotification('Geocoding successful!');
    } catch (error) {
        console.error('Error during geocoding:', error);
        showNotification('Geocoding failed. Please try again.', true);
    } finally {
        isGeocodingInProgress = false;
        enableGeoMapButton();
    }
});



function showNotification(message, isError = false) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.className = 'show' + (isError ? ' error' : '');
    // Change background color and text color based on error status
    if (isError) {
        snackbar.style.backgroundColor = '#ff0000'; // Red color for errors
        snackbar.style.color = 'white';
    } else {
        snackbar.style.backgroundColor = '#2dba4e'; // Greenish color for non-errors
        snackbar.style.color = 'white';
    }

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}


document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the ID 'setting_icon'
    var settingIcon = document.getElementById('Setting_Icon');
    // Add a click event listener to the setting icon
    settingIcon.addEventListener('click', function () {
        // Navigate to the 'setting.html' file
        window.location.href = 'setting.html';
    });
});


// Function to show all stores
function showAllStores() {
    const listSection = document.querySelector('.List_section');
    listSection.innerHTML = ''; // Clear previous content

    stores.forEach((store, index) => {
        const cardHTML = createCard(store, index, store.distance); // You may update the function as needed
        listSection.innerHTML += cardHTML;
    });

    // Add event listeners to newly created elements (if needed)
    addEventListenersToCards();
}

// Function to add event listeners to cards (you can customize this based on your requirements)
function addEventListenersToCards() {
    const copyIcons = document.querySelectorAll('.copy-icon');
    copyIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            copyAddress(index);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the ID 'setting_icon'
    var settingIcon = document.getElementById('Setting_Icon');
    // Add a click event listener to the setting icon
    settingIcon.addEventListener('click', function () {
        // Navigate to the 'setting.html' file
        window.location.href = 'setting.html';
    });

    // Show all stores when setting.js is loaded
    showAllStores();
});


