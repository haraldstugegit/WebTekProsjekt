//Fetching the name, email and feedback from the form on "contactUs"
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback')

//An eventListener that listens for "submit" on the feedback button
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit' ,function(event) {
    event.preventDefault();

    //Fetching rawest form data to be processed. 
    const data = new FormData(feedbackForm);
    const feedData = {
        name: data.get('name'),
        email: data.get('email'),
        feedback: data.get('feedback')
    };

    //Alert the user that the feedback is submitted
    console.log("Feedback submitted: ",feedData);
    alert("Feedback succesfully submitted");
    //Clear the input boxes so its ready for a new feedback
    nameInput.value = '';
    emailInput.value = '';
    feedbackInput.value = '';
});
