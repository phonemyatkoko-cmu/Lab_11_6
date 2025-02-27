const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffccff"];
document
  .querySelector(".changeColorBtn")
  .addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
