const form = document.getElementById("form");
const emailInput = form.querySelector("#email");
const errorMessage = form.querySelector("#error-message");
const newsLetter = document.getElementById("newsletter");
const response = document.getElementById("response");
const dismissMessage = document.getElementById("dismiss");

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
    emailInput.classList.add("border-[tomato]", "bg-tomato");
    emailInput.style.backgroundColor = "#ebaaa0";
    emailInput.style.border = "hsl(4, 100%, 67%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
    errorMessage.textContent = error;
    return;
  }

  emailInput.classList.remove("border-red-500", "bg-red-100");
  errorMessage.textContent = "";
  newsLetter.classList.add("hidden");
  response.classList.remove("hidden");

  return;
};

const handleDismissMessage = (e) => {
  e.preventDefault();
  newsLetter.classList.remove("hidden");
  response.classList.add("hidden");
};

form.addEventListener("submit", handleSubmit);
dismissMessage.addEventListener("click", handleDismissMessage);
