const firstName = document.querySelector("#first-name")
const email = document.querySelector("#mail")
const emailError = document.querySelector('#email-error')

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.style.border = "2px solid red"
        emailError.style.display = "block"
        emailError.textContent = "Please enter a valid email"
    } else {
        email.style.border = "2px solid green"
        emailError.style.display = "None"
    }
  });



