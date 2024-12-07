// EmailJS Initialization
(function() {
    emailjs.init("Dv2Q0J2QBQR2q01xX"); // Replace with your EmailJS public key
})();

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the message from the textarea
    const messageContent = document.getElementById("message").value;

    // Use EmailJS to send the email
    emailjs
        .send("service_kw7z5j8", "template_sv4wy09", {
            message: messageContent,
            to_email: "appsjk460@gmail.com", // Replace with your email
        })
        .then(
            function(response) {
                alert("Message sent successfully!");
                console.log("Success:", response.status, response.text);
            },
            function(error) {
                alert("Failed to send the message. Please try again.");
                console.error("Error:", error);
            }
        );
});
