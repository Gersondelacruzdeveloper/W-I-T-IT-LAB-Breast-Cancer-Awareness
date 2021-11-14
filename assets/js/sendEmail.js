//Email JS send code from their documentation

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_av0z1u5';
    const templateID = 'contact';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert("Your message was sent successfully");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Sorry, we had trouble while sending your message. Please try again.", error);
            document.getElementById("contact-form").reset();
        });
});
