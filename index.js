document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".togglePassword");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.previousElementSibling;

      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    });
  });
});

document.querySelectorAll(".userСard").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
