 document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            
            alert(
                `Thank you for contacting us, ${name}!\n\n` +
                `We have received your message regarding "${subject}".\n` +
                `Our team will respond to ${email} within 24-48 hours.\n\n` +
                `Have a great day!`
            );
            
            this.reset();
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
});