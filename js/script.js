let dropdownTitle = document.querySelector(".dropdown-title");
let dropdownContent = document.querySelector(".dropdown-content");
let dropdownIcon = document.getElementById("dropdown-icon");
let navList = document.getElementById("navList");

document.getElementById("hamburger-menu").onclick = () => {
  navList.classList.toggle("active");
}

dropdownTitle.addEventListener("click", function() {
  dropdownTitle.parentNode.classList.toggle("active");
  if(dropdownIcon.textContent.trim() === "expand_more") {
    dropdownIcon.textContent = "expand_less";
  } else {
    dropdownIcon.textContent = "expand_more"
  }
});

window.addEventListener("click", function(event) {
  if (!event.target.closest('.dropdown')) {
    var dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
      }
    });
  }
});