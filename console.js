// script.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const age = document.getElementById('age').value.trim();
  const category = document.getElementById('category').value;

  if (!name || !email || !phone || !age || !category) {
    document.getElementById('message').innerText = 'Please fill all fields.';
    return;
  }

  document.getElementById('message').innerText = `Thank you, ${name}! You've been registered for the ${category} competition.`;

  // Optional: reset form
  document.getElementById('registrationForm').reset();
});
