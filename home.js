// Get the zip code input element
const zipCodeInput = document.getElementById('zipCodeInput');

// Add an event listener to the zip code input
zipCodeInput.addEventListener('input', () => {
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
    } else {
        goButton.style.display = 'none';
    }
});
