// Function to validate name (only one alphabet and spaces)
function validateName(input) {
    return /^([a-zA-Z]{1}\s*)+$/.test(input);
}

// Function to validate latitude and longitude (only numbers and dots allowed)
function validateCoordinates(input) {
    return /^[0-9.]*$/.test(input);
}

document.addEventListener("DOMContentLoaded", function () {
    // Preload data if not present in local storage
    preloadData();
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

// Preload data if not present in local storage
function preloadData() {
    if (!localStorage.getItem('stores')) {
        const preloadedData = [
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
        ];
        localStorage.setItem('stores', JSON.stringify(preloadedData));
    }
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
    storedData.push(new Outlets(nameInput, addressInput, parseFloat(longitudeInput), parseFloat(latitudeInput)));
    localStorage.setItem('stores', JSON.stringify(storedData));

    // Display the updated list
    displayStoredData();
    // Clear input fields and toast the message
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
                <img src="Icon_Pack/trash.svg" class="copy-icon" data-index="${index}" onclick="deleteStore(${index})">
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
