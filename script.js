// Toggle the responsive navbar on burger click
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const scrollBar = document.querySelector(".navbar")

window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 50) { // Change "50" to adjust when the color changes
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

 // Initialize EmailJS
emailjs.init("A22oIBA0yTJ_dy6eB"); // Replace YOUR_PUBLIC_KEY with your EmailJS public key

document.getElementById("enquiry-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = {
    user_name: form.name.value,
    user_email: form.email.value,
    number: form.phone.value,
    subject: form.subject.value,
    city:form.city.value,
    message: form.message.value,
  };

  emailjs.send("service_dauwerg", "template_8pg23or", formData).then(
    function () {
      document.getElementById("response-message").textContent = "Your enquiry was sent successfully!";
      document.getElementById("response-message").style.color = "green";
      form.reset();
    },
    function () {
      document.getElementById("response-message").textContent = "Oops! Something went wrong. Please try again.";
      document.getElementById("response-message").style.color = "red";
    }
  );
});

// Assume formData contains the data from the form
// const phoneNumber = formData.phone; // "1234567890"
// const message = encodeURIComponent(`New enquiry from ${formData.name}: ${formData.message}`);
// const whatsappURL = `https://wa.me/91${phoneNumber}?text=${message}`;

// window.open(whatsappURL, "_blank");
const phoneNumber = "+918317533612"; // Replace with the correct country code and phone number
const message = encodeURIComponent(`New enquiry from ${formData.user_name}: ${formData.message}`);
// const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
window.open(whatsappURL, "_blank");


// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Select all menu items and service contents
  const menuItems = document.querySelectorAll(".services-menu li");
  const serviceContents = document.querySelectorAll(".service-content");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove 'active' class from all menu items
      menuItems.forEach((menu) => menu.classList.remove("active"));

      // Add 'active' class to the clicked menu item
      item.classList.add("active");

      // Hide all service contents
      serviceContents.forEach((content) => content.classList.remove("active"));

      // Get the corresponding content's ID
      const serviceId = item.getAttribute("data-service");

      // Show the selected content by adding 'active' class
      document.getElementById(serviceId).classList.add("active");
    });
  });
});


function initMap() {
  var businessLocation = { lat: 40.748817, lng: -73.985428 }; // Example: New York, replace with your business address
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: businessLocation
  });
  var marker = new google.maps.Marker({
    position: businessLocation,
    map: map,
    title: 'Our Business Location'
  });
}
