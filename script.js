document.addEventListener("DOMContentLoaded", function () {

  /* EMAILJS INITIALIZATION */
  emailjs.init("gAeWT0Mx6P054e9HE"); // Your Public Key

  /* CONTACT FORM SUBMIT */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_67lu9mc",   // Service ID
        "template_k2nupf8",  // Template ID
        this
      ).then(
        function () {
          alert("Message sent successfully!");
          contactForm.reset();
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.log("EmailJS Error:", error);
        }
      );
    });
  }

  /* HAMBURGER MENU */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* FOOTER YEAR AUTO UPDATE */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});



