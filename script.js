// Script for handling form submission and navigation
document.getElementById('bookingForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
    };

    try {
        // Send form data to the server
        const response = await fetch('/submit-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to submit details');
        }

        const result = await response.json();

        // Redirect to the welcome section if submission is successful
        if (result.success) {
            // Display user details in the welcome message
            document.getElementById('userName').textContent = formData.name;
            document.getElementById('userMobile').textContent = formData.mobile;
            document.getElementById('userEmail').textContent = formData.email;
            document.getElementById('userLocation').textContent = formData.location;

            // Show the welcome message and hide the form
            document.getElementById('userForm').style.display = 'none';
            document.getElementById('welcomeMessage').style.display = 'block';
        } else {
            alert('An error occurred. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting details:', error);
        alert('An error occurred. Please try again.');
    }
});
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;

    // Validate form data (ensure all fields are filled)
    if (!name || !mobile || !email || !location) {
        alert("Please fill in all the details.");
        return;  // Stops the function if fields are empty
    }

    // Simulate successful form submission (you can replace this with actual backend call)
    alert("Form submitted successfully!");

    // Hide the form and show the dashboard (or any other next section)
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});
// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;

    // Validate form data
    if (!name || !mobile || !email || !location) {
        alert("Please fill in all the details.");
        return;  // Stops the function if fields are empty
    }

    // Simulate successful form submission (you can replace this with an actual backend call)
    alert("Form submitted successfully!");

    // Hide the form and show the dashboard (or any other next section)
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // Show the user details section and update the content
    document.getElementById('userDetails').style.display = 'block';
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayMobile').textContent = mobile;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayLocation').textContent = location;
});
// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;

    // Validate form data
    if (!name || !mobile || !email || !location) {
        alert("Please fill in all the details.");
        return;  // Stops the function if fields are empty
    }

    // Simulate successful form submission (you can replace this with an actual backend call)
    alert("Form submitted successfully!");

    // Hide the form and show the dashboard (or any other next section)
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // Show the user details section and update the content
    document.getElementById('userDetails').style.display = 'block';
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayMobile').textContent = mobile;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayLocation').textContent = location;
});

// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Add event listeners for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
        
        // Add the 'active' class to the clicked link
        link.classList.add('active');
        
        // Show the corresponding section
        showSection(link.getAttribute('onclick').split("'")[1]);
    });
});
