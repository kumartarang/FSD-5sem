// Select elements
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let button = document.querySelector("#btn");
let students = document.querySelector("#students");

// Button click event
button.addEventListener("click", function () {

    // Get values
    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;

    // Check if fields are empty
    if (name === "" || email === "" || password === "") {
        alert("Please fill all the fields.");
        return;
    }

    // Create new div
    let student = document.createElement("div");

    student.innerHTML = `
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <hr>
    `;

    // Add to last div
    students.appendChild(student);

    // Clear inputs
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
});