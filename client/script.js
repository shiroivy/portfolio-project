document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const button = e.target.querySelector("button");
  button.innerText = "Sending...";
  button.disabled = true;

  const data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Message sent!");
    document.getElementById("contactForm").reset();

  } catch (err) {
    alert("Error sending message");
    console.log(err);
  }

  // ✅ IMPORTANT: re-enable button ALWAYS
  button.innerText = "Send";
  button.disabled = false;
});