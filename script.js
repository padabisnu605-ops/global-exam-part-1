// Mobile menu toggle

const mobileTrigger = document.getElementById("mobile-trigger");

const navigationList = document.getElementById("navigation-list");

const navigationBox = navigationList.parentElement;

mobileTrigger.addEventListener("click", function () {
  mobileTrigger.classList.toggle("active");
  navigationBox.classList.toggle("open");
});


// Close menu when a link is clicked

navigationList.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileTrigger.classList.remove("active");
    navigationBox.classList.remove("open");
  });
});


// Reset menu when resizing to desktop

window.addEventListener("resize", function () {
  if (window.innerWidth > 991) {
    mobileTrigger.classList.remove("active");
    navigationBox.classList.remove("open");
  }
});
