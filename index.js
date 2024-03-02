let dragged = null;

const dropZones = document.querySelectorAll(".drop-zone");

dropZones.forEach((dropZone) => {
  dropZone.addEventListener("dragenter", (event) => event.preventDefault());
  dropZone.addEventListener("dragover", (event) => event.preventDefault());
  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    event.currentTarget.appendChild(dragged);
  });
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) =>
  box.addEventListener("dragstart", (event) => {
    dragged = event.target;
  })
);
