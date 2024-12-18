'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// chatgpt 
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

// chatgpt 
  document.getElementById('phone-icon').addEventListener('click', function () {
  const iconBox = this;

  // Add the ringing class
  iconBox.classList.add('ringing');

  // Remove the class after the animation ends
  setTimeout(() => {
    iconBox.classList.remove('ringing');
  }, 600); // Match the duration of the animation
});


  document.querySelectorAll(".timeline-item, .skills-item").forEach((item) => {
    observer.observe(item);
  });
});

// Brithday
document.getElementById('calendar-icon').addEventListener('click', function () {
  const modal = document.getElementById('birthday-modal');
  const calendarBody = modal.querySelector('.calendar-table tbody');

  // Populate the calendar
  const birthday = new Date('2009-12-23'); // Your birthday
  const firstDay = new Date(birthday.getFullYear(), birthday.getMonth(), 1).getDay();
  const daysInMonth = new Date(birthday.getFullYear(), birthday.getMonth() + 1, 0).getDate();

  calendarBody.innerHTML = ''; // Clear previous content

  let row = document.createElement('tr');
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement('td'));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('td');
    cell.textContent = day;

    if (day === birthday.getDate()) {
      cell.classList.add('highlight'); // Highlight the birthday
    }

    row.appendChild(cell);

    if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
      calendarBody.appendChild(row);
      row = document.createElement('tr');
    }
  }

  modal.style.display = 'flex';
});

// Close the modal
document.querySelector('.close-btn').addEventListener('click', function () {
  document.getElementById('birthday-modal').style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', function (e) {
  const modal = document.getElementById('birthday-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// Contact Form 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("[data-form]");
  const inputs = form.querySelectorAll("[data-form-input]");
  const submitButton = form.querySelector("[data-form-btn]");

  // Enable the button only if all fields are valid
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const allFilled = Array.from(inputs).every((field) => field.value.trim() !== "");
      submitButton.disabled = !allFilled;
    });
  });

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Simulate a submission process
    try {
      // Example: Using a mock API or a real backend endpoint
      const response = await fetch("https://example.com/submit-form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
        submitButton.disabled = true;
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  });
});
