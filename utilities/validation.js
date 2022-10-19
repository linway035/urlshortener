function validation() {
  const form = document.querySelector("form");
  const submitButton = document.querySelector("#submit-btn");

  submitButton.addEventListener("click", function onSubmitButtonClicked(event) {
    form.classList.add("was-validated");
  });

  form.addEventListener("submit", function onFormSubmitted(event) {
    event.preventDefault();
    event.stopPropagation();
    form.querySelectorAll("input").forEach((element) => {
      if (!element.checkValidity()) {
        const feedback =
          element.parentElement.querySelector(".invalid-feedback");
        feedback.textContent = element.validationMessage;
      }
    });
  });
}

module.exports = validation;
