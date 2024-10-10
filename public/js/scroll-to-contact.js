document
  .getElementById("scroll-to-contact")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector("#contact-section").scrollIntoView({
      behavior: "smooth",
    });
  });
