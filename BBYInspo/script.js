document.addEventListener("DOMContentLoaded", function() {
    const findBeauticianBtn = document.getElementById('findBeautician');
    const findClientsBtn = document.getElementById('findClients');
    const searchInput = document.getElementById('searchInput');
    let activeSearch = ''; // Track active search type

    findBeauticianBtn.addEventListener('click', function() {
        activeSearch = 'beautician';
        updateSearchPlaceholder('Search beauticians near you');
    });

    findClientsBtn.addEventListener('click', function() {
        activeSearch = 'clients';
        updateSearchPlaceholder('Enter zipcode');
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && activeSearch === 'clients') {
            event.preventDefault();
            if (/^[0-9]{5}$/.test(this.value)) { // Simple zip code validation
                showRegistrationForm();
            }
        }
    });
});

function updateSearchPlaceholder(placeholder) {
    document.getElementById('searchInput').placeholder = placeholder;
}

function showRegistrationForm() {
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = 
    `<h2>Beautician Registration</h2>
    <form id="registrationForm">
        <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required>
                </div>
                <div class="form-group">
                    <label for="service">Service You Provide:</label>
                    <select id="service" name="service" required>
                        <option value="">Select a Service</option>
                        <option value="hair_stylist">Hair Stylist</option>
                        <option value="esthetician">Esthetician</option>
                        <option value="nail_technician">Nail Technician</option>
                        <option value="waxing">Waxing</option>
                        <option value="other">Other</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="zipCode">Zip Code:</label>
                    <input type="text" id="zipCode" name="zipCode" required pattern="[0-9]{5}" title="Five digit zip code">
                </div>
                <button type="submit">Register</button>
            </form>
    </form>`;
    
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        showCustomizationPage(); // Call function to show customization page
    });
}
function showCustomizationPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Customize Your Personal Booth</h2>
        <div class="customization-container">
            <div class="image-upload">
                <label for="profilePic">Profile Picture:</label>
                <input type="file" id="profilePic" accept="image/*">
                <!-- Repeat for other images -->
            </div>
            <div class="background-selector">
                <label for="backgroundColor">Profile Background Color:</label>
                <select id="backgroundColor">
                    <option value="#FFFFFF">White</option>
                    <option value="#F0E68C">Khaki</option>
                    <option value="#ADD8E6">Light Blue</option>
                    <!-- Add more color options as needed -->
                </select>
            </div>
        </div>
        <button onclick="finalizeCustomization()">Complete Setup</button>
    `;
    // Add more JavaScript here as needed for handling image uploads and finalization
}

function finalizeCustomization() {
    // Logic to handle the final submission of the customized booth
    console.log("Customization finalized.");
    // Redirect or update the page content as necessary
}