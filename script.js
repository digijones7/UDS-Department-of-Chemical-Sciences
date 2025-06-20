/* ========== 1. WELCOME POPUP (show once per session) ========== */
  const popup = document.getElementById('welcomePopup');
  const closeBtn = document.getElementById('closePopup');

  if (popup && closeBtn) {
    if (!sessionStorage.getItem('welcomeShown')) {
      popup.style.display = 'flex';
      sessionStorage.setItem('welcomeShown', 'true');
    }

    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
      if (e.target === popup) popup.style.display = 'none';
    });
  }

  let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// Manual navigation
document.querySelector(".prev").onclick = () => {
  slideIndex -= 2;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlides();
};

document.querySelector(".next").onclick = () => {
  showSlides();
};

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    slideIndex = i;
    showSlides();
  };
}

// Start slideshow
showSlides();

  /* ========== 3. BACK TO TOP BUTTON ========== */
  const backToTop = document.createElement('button');
  backToTop.innerHTML = "↑";
  backToTop.id = "backToTopBtn";
  Object.assign(backToTop.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "10px 15px",
    borderRadius: "50%",
    fontSize: "1.5rem",
    display: "none",
    zIndex: "1000",
    border: "none",
    backgroundColor: "#035c25",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    transition: "opacity 0.3s ease"
  });
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const siteNav = document.getElementById("siteNav");

    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");

      // Update ARIA attributes for accessibility
      navToggle.setAttribute("aria-expanded", isOpen);
      siteNav.setAttribute("aria-hidden", !isOpen);
    });
  });

// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // === Smooth Scrolling for Navigation Links ===
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default jump-to behavior
      e.preventDefault();

      // Get the target section ID from href
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // === Highlight Active Section in Navbar ===
  const sections = document.querySelectorAll('main section');

  window.addEventListener('scroll', () => {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to current section link
        document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
      }
    });
  });

  // === Search Functionality (Optional enhancement) ===
  // This is a placeholder for future search feature
  // You could expand this with real search logic later
  // Example: Filtering course list or lecturer names
});
// Select all elements with the class 'collapsible-header'
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the 'active' class on the clicked header
    header.classList.toggle('active');

    // Get the next sibling element which contains the course list
    const content = header.nextElementSibling;

    // Toggle the display style of the content (show/hide)
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
/* ========== 4. CONTACT FORM VALIDATION & MOCK SUBMIT ========== */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        return;
      }

      alert(`Thanks ${name}, your message has been sent!`);
      contactForm.reset();
    });
  }

  /* ========== 5. MOBILE NAV TOGGLE ========== */
  const menuBtn = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-links');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  /* ========== 6. SCROLL REVEAL ANIMATIONS (AOS.js) ========== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  document.querySelectorAll(".accordion").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    const panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
