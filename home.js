// Get the zip code input element
const zipCodeInput = document.getElementById('zipCodeInput');
const cityStateLabel = document.getElementById('cityStateLabel');

// Add an event listener to the zip code input
zipCodeInput.addEventListener('input', async () => {
    let zipCode = zipCodeInput.value;

    // Remove non-numeric characters from the zip code
    zipCode = zipCode.replace(/\D/g, '');

    // Limit the zip code to 5 digits
    zipCode = zipCode.slice(0, 5);

    // Update the value of the zip code input
    zipCodeInput.value = zipCode;

    // Check if the zip code is valid
    const isValidZipCode = /^\d{5}$/.test(zipCode);

    // Get the "Go!" button element
    const goButton = document.getElementById('searchButton');

    // Show or hide the "Go!" button based on the validity of the zip code
    if (isValidZipCode) {
        goButton.style.display = 'block';
        cityStateLabel.style.display = 'block';
        var cityState = await getCityState(zipCode);
        cityStateLabel.textContent = cityState;

    } else {
        goButton.style.display = 'none';
        cityStateLabel.style.display = 'none';
    }
});

async function getCityState(zipcode) {
    try {
        // make API call to get city and state
        const response = await fetch(`https://api.zippopotam.us/us/${zipcode}`);
        const data = await response.json();

        // get city and state
        let city = data.places[0]['place name'];
        let state = data.places[0]['state abbreviation'];

        // return city and state
        return `${city}, ${state}`;
    } catch (error) {
        console.log(error);
    }

    // return default city and state
    return "Las Vegas, NV";
}