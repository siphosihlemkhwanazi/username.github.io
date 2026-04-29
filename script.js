function showMessage() {
    alert("Welcome! You just triggered JavaScript 🚀");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Message sent! (This is a demo)");
        });
    }
});