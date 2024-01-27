
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

// Push the outlet objects into the 'stores' array
stores.push(...storedData.map(data => new Outlets(data.name, data.address, data.longitude, data.latitude)));

/*
// Push the outlet objects into the 'stores' array
stores.push(
    new Outlets("Hoodi", "No. 39, Ground Floor, MSM Towers, Ayyappa Nagar to Hoodi Main Road, Bengaluru, Karnataka",77.7127928,13.0032265),
    new Outlets("Jayanagar", "4th Block", "140, 6th C Main Road, 4th Block, Jayanagar, Bengaluru, Karnataka",77.5816819,12.9292656),
    new Outlets("Nelamangala", "No 126/2B5 K No 743,NH complex,BH road, binnamangala, Nelamangala nagarasabhe, Bengaluru, Karnataka",77.4166878,13.0846155),
    new Outlets("Sultan Palya", "No. 20, Krishna Complex, Below State Bank of Mysore, SultanPalya Main Road, Bengaluru, Karnataka",77.6029855,13.0240687),
    new Outlets("Basavanagudi", "26/3-12,Ground floor, Gandhibazar, Basavanagudi, Bengaluru, Karnataka",77.5712556,12.9455888),
    new Outlets("Chittilappilly", "Agora Arcade,2/406-e & 2/406-f, Ground floor,  Chittilappilly, Kerala",76.1430688,10.54971759),
    new Outlets("Koramangala", "352, 1st B Main Road, 80ft Road, 7th Block, (Near A2B Restaurant), Bengaluru, Karnataka",77.6407258,12.9369154),
    new Outlets("TC Palya Rammurthy Nagar", "No. 8, Ground Floor Kowdenahalli, TC palya Main Rd Opp Koshys Hospital, Bengaluru, Karnataka",77.677013,13.020669),
    new Outlets("Indira Nagar", "60, Appareddy Palya, Double Road, Indiranagar, Bengaluru, Karnataka",77.6382611,12.974462),
    new Outlets("Chalakudy", "No.XIV/620,D1-17,situated at Opp.Punjab National Bank, Kerala",76.1430688,10.54971759),
    new Outlets("BTM Layout", "No 773, 16th Main Road, Mahadeshwara Nagar, Stage 2, BTM 2nd Stage, Bengaluru, Karnataka",77.6098879,12.9135793),
    new Outlets("Thriprayar", "Shop no:10/710/B,Vone Plaza,Temple Road, Kerala",76.1430688,10.54971759),
    new Outlets("Aluva", "Thakkolkaran Building, Companypady Metro Station, Kerala",76.3492569,10.0826222),
    new Outlets("Thubrahalli", "164/2 Srinivasa Plaza, Thubarahalli\n  Varthur Main road  LANDMARK: (Near HDFC BANK), Bengaluru, Karnataka",77.7189386,12.9556578),
    new Outlets("Arekere", "Nyanappana Halli,2nd Phase, 6th stage Arekere, Bengaluru, Karnataka",77.6156642,12.8799403),
    new Outlets("Kothanur", "No 7, 69/67 (33/3), Ground Floor, Bagalur Main Road, Kothanur Post, Hennur Gardens, Bengaluru, Karnataka",77.6488946,13.0622302),
    new Outlets("Thippasandra", "G Floor, No:80/1, New Thippasandra Main Rd,\nHAL 3rd Stage, Bengaluru, Karnataka",77.6578639,12.9714638),
    new Outlets("Basaveshwar nagar", "GROUND FLOOR, NO.881/C,, CRA AND SONS, 2ND STAGE,WEST OF CHORD ROAD,BASAVESHWARNAGAR, Bengaluru, Karnataka",77.5331725,12.9890283),
    new Outlets("Kakkanad", "Kakkanad, Kerala",76.3695167,10.047943),
    new Outlets("Vivekanandanagar", "Plot no 1 & 2, Opp SBI Bank,  Kampala Prasanna nagar,  Vivekananda Nagar colony road,  Kukatpally, Hyderabad, Telangana",78.4171028,17.4801969),
    new Outlets("RR NAGAR", "#12,Narayan arcade,Channasandra mn rd, Bengaluru, Karnataka",77.512553,12.9046486),
    new Outlets("Bagalagunte", "GROUND FLOOR, NO.3 AND 7, YOUSUF PLAZA, HESARAGHATA MAIN ROAD,BAGALAGUNTE MAIN ROAD, MALLASANDRA,T.DASARAHALLI POST, Bengaluru, Karnataka",77.4954875,13.052706),
    new Outlets("Thanisandra", "No.216 Rachenahalli Main Road, Thanisandra, (Near Bharat Petrol Bunk), Bengaluru, Karnataka",77.630795,13.056297),
    new Outlets("Vidyaranyapura", "8th A Main, HMT Layout 1st Block, Vidyaranyapura, Bengaluru, Karnataka",77.5605604,13.0755863),
    new Outlets("Ulsoor", "Salma Bizhouse GF-2, no. 34/1-2, \nMeanee Avenue road, HALASURU,\nLANDMARK: (Next to Coffee Day – Opposite to HDFC Bank)\n, Bengaluru, Karnataka",77.6175043,12.9885207),
    new Outlets("Srinagar", "GROUND FLOOR, NO.1, 3RD MAIN ROAD, BSK 1ST STAGE,2ND BLOCK, Bengaluru, Karnataka",77.556816,12.9416893),
    new Outlets("RT Nagar", "No 10 Ground floor , CBI Main Road, HMT layout, 80 Feet Road, Post, V . V Nagar, HMT Layout, Dinnur, RT Nagar, Bengaluru, Karnataka",77.5933369,13.0263598),
    new Outlets("Electronic City", "# 3, Ground floor, Himagiri Silicon City,    Thogur Cross,Bettadasanapura Main Road, Electronic City  - Phase 1, Bengaluru, Karnataka",77.6498455,12.8510155),
    new Outlets("Nagarbhavi", "NO 23/B,2nd stage,2nd block,Old outer ring road, Nagarbhavi, Bengaluru, Karnataka",77.5107024,12.9833571),
    new Outlets("MATHIKERE", "No.10, 2nd phase, 30/1, 1st Main Road, Bengaluru, Karnataka",77.5596826,13.0300581),
    new Outlets("Sahakar Nagar", " No.26, Shobha Arcade, G Block, Near Big Market, Bengaluru, Karnataka",77.5929131,13.0625296),
    new Outlets("Vijaynagar", "29, Ground Floor, Opp, 1st Main Road, SBI Staff Colony, Hoshalli Extension, Stage 1, Vijayanagar, Bengaluru, Karnataka",77.6284701,12.9681779),
    new Outlets("HBR Layout", "HBR Layout, Bengaluru, Karnataka",77.6284701,13.0353236),
    new Outlets("Perumbavoor", "Ground floor, Koikkara Towers, Opp to SBI, PP Road, Kerala",76.4736602,10.1069503),
    new Outlets("Padmanabha Nagar", "GROUND FLOOR, NO.6,, MVS ARCADE, R K\n LAYOUT,PADMANABHA NAGAR MAIN ROAD,BSK 2ND STAGE, Bengaluru, Karnataka",77.5591111,12.9158252),
    new Outlets("Jayanagar New", "12th Main, 4th Block, No:35/1, Mezzanine Floor, Bhagya Lakshmi Mansion, , Bengaluru, Karnataka",77.5816819,12.9292656),
    new Outlets("HOSKOTE", "Hoskote, Bengaluru, Karnataka",77.7869684,13.0786599),
    new Outlets("HSR","HSR Layout, Bengaluru, Karnataka",77.6445548,12.9121181),
    new Outlets("Tilaknagar","NO.4, PID NO62-163-4 , 30TH CROSS,BANNERGHATTA ROAD EXTENSION JAYANAGAR 4TH T BLOCK, OPPOSITE TO SAGAR HOSPITAL, , Bengaluru, Karnataka",77.5936183,12.9217081),
    new Outlets("Banaswadi","11, 7th Main Road, 80ft road , Subbannaiah Palya, Banaswadi, Bengaluru, Karnataka",77.6426502,13.0145598),
    new Outlets("Mosque Road","#90, Mosque road, Frazer Town, (Landmark OPP to KFC), Bengaluru, Karnataka",77.6152673,12.9983412),
    new Outlets("Malleshwaram  8th Cross", "No.86, 8th Cross, V.M Plaza, Malleshwaram, Bengaluru, Karnataka",77.5679518,12.9880937),
    new Outlets("Rajaji Nagar", "Rajajinagar, Bengaluru, Karnataka",77.5591944,12.9889852),
    new Outlets("Jalahalli", "#10/2 and 10/5, NH4, Jalahalli Cross, next to Jalahalli, metro station, Phase -1, Peenya, Bengaluru, Karnataka",77.5187183,13.0400003),
    new Outlets("JP NAGAR", "No.15, Ground floor,24th main road,Puttenahalli village,Utharahalli Hobli,7th Phase, Bengaluru, Karnataka",77.5861337,12.8966315),
    new Outlets("Kothamangalam", "Moonikattil Towers, Ground floor ,Building No.KMC XXXI/452A ,Opp to HP Petrol Station,Ernakulam(Dt), Kerala",76.6123884,10.0470332),
    new Outlets("Thrissur", "Door No. I/375/35&37, City Gate Commercial complex, Near Old Sithara Theatre, Thrissur-Kodungallur main road, Koorkenchery P.O, Kerala",76.1986595,10.4924777),
    new Outlets("Yelahanka", "BB Road, Yelahanka Old Town, Bengaluru, Karnataka",77.596883,13.0978384),
    new Outlets("Irijalakuda", "Macy's Hub,Opp Little Flower Convent Girls High School Main Road, Tana, Kerala",76.2073525,10.3365485),
    new Outlets("Govindapura Nagawara", "#28, Govindpur Main Road, Axis Bank ATM Building, Nagawara, Bengaluru, Karnataka",77.6193124,13.0329181),
    new Outlets("Al Majaz", "Shop nb 1, Jallad Bldg - King Faisal St - Al Majaaz 1 - Sharjah - United Arab Emirates",55.38959302489141,25.337091623052213),
    new Outlets("Al Nahda", "Shop Nb 4, Diamond Tower - Sharjah - United Arab Emirates",55.37152122303671,25.30072937199532),
    new Outlets("Al Karama", "Kuwait St - Al Karama - Dubai - United Arab Emirates",55.3029186224012,25.25207090004583),
    new Outlets("Al Fahidi", "89 Khalid Bin Al Waleed Rd - opp. WestZone - Al Fahidi - Dubai - United Arab Emirates",55.29553164023402,25.259768634255202),
     // Add other outlets here...
); */

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
                <img src="icon_Pack/copy-outline.svg" class="copy-icon" data-index="${index}">
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
