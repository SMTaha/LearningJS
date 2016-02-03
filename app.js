/**
 * Created by syedmuhammadtaha on 2/3/16.
 */

function checkSubmission() {
    var email = document.getElementById("email").value;
    if (email.length === 0) {
        alert("Email is required.");
    }
}