document.addEventListener('DOMContentLoaded', (event) => {
    // Fetch the list of banned IPs from the JSON file
    fetch('bannedIps.json')
        .then(response => response.json())
        .then(bannedIps => {
            // Get the user's IP address
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const userIP = data.ip;

                    // Check if the user's IP is in the banned list
                    if (bannedIps.includes(userIP)) {
                        // Ban the user by showing an error message and disconnecting
                        alert('Account banned. Please contact the administrator.');
                        window.location.href = 'error.html'; // Redirect to an error page
                    } else {
                        // Allow the user to access the website
                        console.log('User IP is not banned. Access granted.');
                    }
                })
                .catch(error => {
                    console.error('Error getting user IP:', error);
                    alert('Error getting user IP. Please try again later.');
                });
        })
        .catch(error => {
            console.error('Error fetching banned IPs:', error);
            alert('Error fetching banned IPs. Please try again later.');
        });
});