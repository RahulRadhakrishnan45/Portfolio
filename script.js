function sendMail(event) {
    event.preventDefault();  // Prevents form from refreshing the page

    let userInfo = {
        name: document.getElementById("name").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("msg").value.trim(),
    };

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if any field is empty
    if (!userInfo.name || !userInfo.subject || !userInfo.email || !userInfo.message) {
        document.getElementById('err-message').textContent = "All fields are required!";
        return;
    }

    // Check if email is valid
    if (!emailPattern.test(userInfo.email)) {
        alert("Invalid email address! Please enter a valid email.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_xygoiyn", "template_7va5ei8", userInfo)
        .then(() => {
            alert("Email sent successfully!");
            document.getElementById('err-message').textContent = "";

            // Clear form fields after successful submission
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.");
        });
}

document.getElementById('contact-form').addEventListener('submit', sendMail);
