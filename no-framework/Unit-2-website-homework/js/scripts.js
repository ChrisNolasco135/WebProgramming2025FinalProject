// This file contains the JavaScript code for handling form submissions, validating input fields, and managing the appointment system's functionality.

document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const taskList = document.getElementById('task-list').value;
        const subjectName = document.getElementById('subject-name').value;
        const description = document.getElementById('description').value;

        if (validateForm(name, username, email, taskList, subjectName, description)) {
            // Here you can handle the form submission, e.g., send data to a server
            console.log('Appointment submitted:', {
                name,
                username,
                email,
                taskList,
                subjectName,
                description
            });
            alert('Appointment submitted successfully!');
            appointmentForm.reset();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });

    function validateForm(name, username, email, taskList, subjectName, description) {
        return name && username && validateEmail(email) && taskList && subjectName && description;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});