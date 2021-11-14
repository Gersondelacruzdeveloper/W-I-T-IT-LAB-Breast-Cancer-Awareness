//Email JS send code from their documentation

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const serviceID = 'service_av0z1u5';
        const templateID = 'contact';
    
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset();
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById("contact-form").reset();
            });
    });
