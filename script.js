const newsletterCard = document.querySelector(".newsletter-card");
const successCard = document.querySelector(".result-card");
const btnSubmit = document.querySelector(".btn-submit");
const inputEmail = document.querySelector("#email");
const emailName = document.querySelector(".gmail-name");
const btnDismiss = document.querySelector(".btn-dismiss");
const emailLabel = document.querySelector(".email-label");

btnSubmit.addEventListener("click", function showResultCard() {
  if (inputEmail.value === "") {
    emailLabel.style.color = "var(--Red)";
    emailLabel.textContent = "Email address (This field is required)";
  } else if (!inputEmail.value.includes("@gmail.com")) {
    emailLabel.style.color = "var(--Red)";
    emailLabel.textContent = "Email address (The Email address is not valid)";
  } else {
    newsletterCard.setAttribute("hidden", true);
    successCard.removeAttribute("hidden");
    emailName.textContent = inputEmail.value;
    inputEmail.value = "";
  }
});

btnDismiss.addEventListener("click", function showNewsLetterCard() {
  newsletterCard.removeAttribute("hidden");
  successCard.setAttribute("hidden", true);
});
