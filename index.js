const formInput = document.querySelector('.early-access_input')
const formButton = document.querySelector('.early-access_btn')
const error = document.querySelector('.error')


function displayError(element, textError) {
  element.textContent = textError;
  element.classList.add('active')
}

function removeError() {
  error.classList.remove('active');
  error.textContent = '';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

formButton.addEventListener('click', validateForm)
formInput.addEventListener('blur', removeError)


function validateForm(e) {

  e.preventDefault();

  removeError()

  const inputValue = formInput.value.trim()

  if (!inputValue) {
    displayError(error, "An email adress is required")
  } else if (!isValidEmail(inputValue)) {
    displayError(error, "Please enter a valid email adress")
  }
  
}