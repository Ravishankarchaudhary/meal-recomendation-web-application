document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusEl = document.getElementById("formStatus");

  if (!name || !email || !message) {
    statusEl.textContent = "⚠️ Please fill all fields.";
    statusEl.style.color = "red";
    return;
  }

  // Normally you would send data to backend here
  statusEl.textContent = "✅ Message sent successfully! We'll get back to you soon.";
  statusEl.style.color = "green";

  // Reset form
  document.getElementById("contactForm").reset();
});
