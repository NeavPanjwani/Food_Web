// Show alert
function showAlert(message, callback) {
  alert(message);
  if (callback) callback();
}

// Handle feedback form submission
document.getElementById('feedback-form').addEventListener('submit', function (event) {
  const name = event.target.name.value;
  const feedback = event.target.feedback.value;

  if (!feedback) {
      event.preventDefault(); // Prevent form submission if feedback is empty
      showAlert('Please provide your feedback.');
  } else {
      setTimeout(() => {
          showAlert('Feedback submitted successfully!', () => {
              window.location.href = 'index.html'; // Redirect after alert
          });
      }, 500);
  }
});
