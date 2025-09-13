function sayHello() {
    alert("Hello! Thanks for visiting my website!");
}

// Optional: Prevent actual form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent! (Demo only, no backend connected)");
});
