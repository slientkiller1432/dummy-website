document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const responseMessage = document.getElementById("formResponse");

  if (name && email) {
    responseMessage.innerHTML = `<p>Thank you, ${name}! We will get back to you at ${email}.</p>`;
  } else {
    responseMessage.innerHTML = `<p>Please fill out all fields.</p>`;
  }
});
