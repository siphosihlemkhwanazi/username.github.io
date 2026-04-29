function showMessage() {
    alert("Welcome! Enter Image Nation 🚀");
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
