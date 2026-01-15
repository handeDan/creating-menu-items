let accordings = document.getElementsByClassName("accordion");

for (let i = 0; i < accordings.length; i++) {
  accordings[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    if (this.nextElementSibling.style.display === "block") {
      this.nextElementSibling.style.display = "none";
    } else {
      this.nextElementSibling.style.display = "block";
    }
  });
}