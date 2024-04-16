const contents = document.querySelectorAll(".content");

contents.forEach((content) => {
  content.addEventListener("click", () => {
    removeActive();
    content.classList.add("active");
  });
});

const removeActive = () => {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
};
