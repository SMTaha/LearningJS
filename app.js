/**
 * Created by syedmuhammadtaha on 2/3/16.
 */

function checkSubmission() {
    var email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("heading").className = "hidden";
    } else {
        document.getElementsByTagName("h1").className = "hidden";
    }
}

function makeInvisible() {
    document.getElementById("heading").className = "hidden";
}
function focused(){
    document.getElementById("submit").className = "hidden";
}