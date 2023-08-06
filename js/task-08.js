document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
      alert("Uzupełnij wszystkie pola.");
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      console.log(formData);

      form.reset();
    }
  });
