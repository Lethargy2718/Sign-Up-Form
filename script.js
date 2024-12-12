const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const tel = document.querySelector("#phone")
const pass = document.querySelector("#pass")
const confirmPass = document.querySelector("#confirm-pass")
const submit = document.querySelector("#submit")

const passes = [pass, confirmPass]
const names = [firstName, lastName]
const empties = [firstName, lastName, email, pass, confirmPass]

let valid = false

names.forEach(each => {
    each.addEventListener("input", () => {
        let error = GetError(each)
        if (each.value === "") {
            error.classList.add("active")
            error.textContent = "This field is required."
        }
        else {
            error.classList.remove("active")
        }
    }) 
})

email.addEventListener("input", () => {
    let error = GetError(email)
    // Invalid email. Add an error message.
    if (email.validity.patternMismatch) {
        error.classList.add("active")
        error.textContent = "Invalid email address."
    }
    // Empty email. Add an error message.
    else if (email.value === "") {
        error.classList.add("active")
        error.textContent = "This field is required."
    }  
    // Valid email. Remove the error message.
    else {
        error.classList.remove("active")
    }
})

// Password validation
// Logic: if you input in ANY password field, check BOTH.
passes.forEach(eachPass => {
    eachPass.addEventListener("input", () => {
        passes.forEach(each => {
            let error = GetError(each)
            // Either field is empty. Remove the error msg, but keep the red border.
            if (eachPass.value === "" || confirmPass.value === "") {
                passes.forEach(each => {
                    let error = GetError(each)
                    each.classList.add("invalid")
                    error.classList.remove("active")
                    valid = false
                })
            }
            // Pass = confirm pass. Valid.
            else if (pass.value === confirmPass.value) {
                each.classList.remove("invalid")
                error.classList.remove("active")
                valid = true
            }
            else {
                each.classList.add("invalid")
                error.classList.add("active")
                error.textContent = "Passwords don't match."
                valid = false
            }
        })
    }) 
})

submit.addEventListener("click", (event) => {
    empties.forEach(empty => {
        if (empty.value === "") {
            let error = GetError(empty)
            error.classList.add("active")
            error.classList.add("invalid")
            error.textContent = "This field is required."
            valid = false
        }

    if (!valid) {
        event.preventDefault()
        document.querySelectorAll(".error.active").forEach(error => {
            error.classList.add('shake')
            setTimeout(() => {
                error.classList.remove('shake')
            }, 500)
        })
    }
    })
})


// Returns the error span sibling of an element.
function GetError(element) {
    return document.querySelector(`#${element.id} + .error`)
}



