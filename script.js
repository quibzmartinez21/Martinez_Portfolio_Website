"use strict";

/*
  Select the elements that JavaScript will control.
*/
const contactButton = document.getElementById("contactButton");
const contactSection = document.getElementById("contact");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");
const backToTopButton = document.getElementById("backToTop");
const currentYear = document.getElementById("currentYear");

/*
  Smoothly scroll to the contact section when the
  Contact Me button is clicked.
*/
contactButton.addEventListener("click", () => {
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
});

/*
  Handle the contact form submission.

  preventDefault() stops the page from refreshing.
  The code then displays a success message and
  clears the form.
*/
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const userName = nameInput.value.trim();

  formMessage.textContent =
    `Thank you, ${userName}! Your message has been received.`;

  contactForm.reset();

  /*
    Remove the confirmation message after five seconds.
  */
  setTimeout(() => {
    formMessage.textContent = "";
  }, 5000);
});

/*
  Change between light and dark themes.
*/
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const darkModeIsActive =
    document.body.classList.contains("dark-theme");

  if (darkModeIsActive) {
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute(
      "aria-label",
      "Switch to light mode"
    );
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute(
      "aria-label",
      "Switch to dark mode"
    );
  }
});

/*
  Smoothly return to the top of the webpage.
*/
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/*
  Automatically display the current year in the footer.
*/
currentYear.textContent = new Date().getFullYear();

/*
  Fade sections into view as the user scrolls.
*/
const fadeElements = document.querySelectorAll(".fade-in");

const observerOptions = {
  threshold: 0.2
};

const fadeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  observerOptions
);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});