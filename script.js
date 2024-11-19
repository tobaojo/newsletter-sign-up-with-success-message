const form = document.getElementById("form");
const emailInput = form.querySelector("#email");
const errorMessage = form.querySelector("#error-message");

const validateEmail = (email) => {
  if (!email) return "Email is required";

  const isValid = /^\S+@\S+$/g;
  if (!isValid.test(email)) {
    return "Please enter a valid email";
  }
  return "";
};

const handleSubmit = (e) => {
  e.preventDefault();
  const { email } = Object.fromEntries(new FormData(e.target));

  const error = validateEmail(email);
  if (error) {
    emailInput.classList.add("border-red-500", "bg-red-100");
    emailInput.style.backgroundColor = "rgb(248, 113, 113)";
    errorMessage.textContent = error;
    console.log(emailInput);
    return;
  }

  emailInput.classList.remove("border-red-500", "bg-red-100");
  errorMessage.textContent = "";
  return;
};

form.addEventListener("submit", handleSubmit);
