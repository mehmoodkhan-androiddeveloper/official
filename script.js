/*********************************
 🔥 FIREBASE INITIALIZATION
 *********************************/
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "portfolio-website-fa810.firebaseapp.com",
  databaseURL: "https://portfolio-website-fa810-default-rtdb.firebaseio.com",
  projectId: "portfolio-website-fa810",
  storageBucket: "portfolio-website-fa810.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database reference
const database = firebase.database();

/*********************************
 📧 EMAILJS INITIALIZATION
 *********************************/
(function () {
  emailjs.init("gAeWT0Mx6P054e9HE"); // Your Public Key
})();

/*********************************
 📩 CONTACT FORM SUBMIT
 *********************************/
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.name.value;
    const email = this.from_email.value;
    const message = this.message.value;

    // ✅ SAVE DATA TO FIREBASE
    database.ref("contacts").push({
      name: name,
      email: email,
      message: message
    });

    // ✅ SEND EMAIL USING EMAILJS
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

/*********************************
 🍔 HAMBURGER MENU
 *********************************/
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

/*********************************
 📅 FOOTER YEAR AUTO UPDATE
 *********************************/
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}





