fetch('Webhook.html')

    const webhookHtml = document.querySelector('body')
    const WebhookAPI = webhookHtml.document.querySelector('.WebhookAPI').value;
    const webhookName = webhookHtml.querySelector('.name').value;
    const messageContent = webhookHtml.querySelector('.message').value;
    const WebhookColor = Webhook.querySelector('.color').value;

const embed = {
    title: "",
}