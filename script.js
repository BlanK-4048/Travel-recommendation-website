// Basic form submission handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Thank you for your message!");
    this.reset(); // Reset the form fields
});
