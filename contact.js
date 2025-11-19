// Check if user is logged in 
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const contactForm = document.getElementById('contactForm');
    const loginRequiredMessage = document.getElementById('loginRequiredMessage');
    
    if (isLoggedIn === 'true') {
        contactForm.style.display = 'block';
        loginRequiredMessage.style.display = 'none';
    } else {
        contactForm.style.display = 'none';
        loginRequiredMessage.style.display = 'block';
    }
    
    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Get existing messages or initialize empty array
        const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Add new message
        contactMessages.push({
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
            date: new Date().toLocaleString()
        });
        
        // Save back to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(contactMessages));
        
        // Show success message
        alert(
            `Thank you for contacting us, ${name}!\n\n` +
            `We have received your message regarding "${subject}".\n` +
            `Our team will respond to ${email} within 24-48 hours.\n\n` +
            `Have a great day!`
        );
        
        // Reset form
        this.reset();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
