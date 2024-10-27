    // JavaScript code for form validation
	// Prevent form from submitting
      // Retrieve the input field value
      const form = document.getElementById('myForm');
      const inputField = document.getElementById('inputField');
      const errorElement = document.getElementById('error');
// Add an event listener to the form submit event
form.addEventListener('submit', (event) => {
  // Prevent form from submitting
  event.preventDefault();

  // Retrieve the input field value
  const inputValue = inputField.value.trim();

  // Regular expression pattern for alphanumeric input
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  // Check if the input value is empty or doesn't match the pattern
  if (inputValue === '') {
    // Invalid input: displaying the  error message if input is empty
    errorElement.textContent = 'Please enter a value.';
  } else if (!alphanumericRegex.test(inputValue)) {
    // Display an error message if the input value is not alphanumeric
    errorElement.textContent = 'Input must be alphanumeric.';
  } else {
    // Valid input: displaying confirmation message
    errorElement.textContent = 'Input is valid and submitted.';
    form.reset(); // Reset the form after successful submission
  }
});