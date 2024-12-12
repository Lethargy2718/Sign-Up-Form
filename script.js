const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")

const email = document.querySelector("#mail")
const emailError = document.querySelector("#mail + .error")

const tel = document.querySelector("#phone")

const pass = document.querySelector("#pass")
const passError = document.querySelector("#pass-error")

const confirmPass = document.querySelector("#confirm-pass")
const confirmPassError = document.querySelector("#confirm-pass-error")

const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--clr-five').trim()
const inputs = [firstName, lastName, email, tel]
const passes = [pass, confirmPass]

email.addEventListener("input", () => {
    if (email.value === "") {
        email.classList.remove("invalid")
        email.classList.remove("valid")
        emailError.classList.remove("active")
    }

    else if (email.validity.patternMismatch) {
        email.classList.add("invalid")
        email.classList.remove("valid")
        emailError.classList.add("active")
        emailError.textContent = "Invalid email address."
    }

    else {
        email.classList.remove("invalid")
        email.classList.add("valid")
        emailError.classList.remove("active")
    }  
})

passes.forEach(input => {
    addEventListener("input", () => {
        // Nothing written in the pass field
        if (pass.value === "") {            
            pass.classList.remove("valid")
            pass.classList.remove("invalid")
            passError.classList.remove("active")
            passError.classList.add("inactive")

            confirmPass.classList.remove("valid")
            confirmPass.classList.remove("invalid")
            confirmPassError.classList.remove("active")
            confirmPassError.classList.add("inactive")
        }
        // Something written in the pass field
        else {
            // pass = confirm
            if (pass.value === confirmPass.value) {
                pass.classList.add("valid")
                confirmPass.classList.add("valid")

                pass.classList.remove("invalid")
                confirmPass.classList.remove("invalid")

                passError.classList.add("inactive")
                confirmPassError.classList.add("inactive")

                passError.classList.remove("active")
                confirmPassError.classList.remove("active")

            }
            // pass != confirm
            else {
                console.log("invalid")
                pass.classList.add("invalid")
                confirmPass.classList.add("invalid")

                confirmPassError.classList.remove("inactive")
                confirmPassError.classList.add("active")

                passError.classList.remove("inactive")
                passError.classList.add("active")

                passError.textContent = "Passwords don't match."
                confirmPassError.textContent = "passwords don't match."
            }
        }
    })
})

// Returns the error span sibling of an element.
function GetError(element) {
    return document.querySelector(`#${element.id} + .error`)
}



