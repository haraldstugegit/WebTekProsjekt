const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback')

const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit' ,function(event) {
    event.preventDefault();

    const data = new FormData(feedbackForm);
    const feedData = {
        name: data.get('name'),
        email: data.get('email'),
        feedback: data.get('feedback')
    };

    console.log("Feedback submitted: ",feedData);
    alert("Feedback succesfully submitted");
    nameInput.value = '';
    emailInput.value = '';
    feedbackInput.value = '';
});
