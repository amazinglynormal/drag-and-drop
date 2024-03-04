let dragged = null;
let dropPoint = null;
const BOX_HEIGHT = 50;

const dropZones = document.querySelectorAll(".drop-zone");

dropZones.forEach((dropZone) => {
  dropZone.addEventListener("dragenter", (event) => event.preventDefault());

  dropZone.addEventListener("dragover", (event) => event.preventDefault());

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const dropZone = event.currentTarget;
    if (dropZone.hasChildNodes()) {
      const childNodes = Array.from(dropZone.childNodes).filter((node) => {
        return (
          node.nodeType === Node.ELEMENT_NODE &&
          node.nodeName === "DIV" &&
          node.classList.contains("box")
        );
      });

      let insertBeforeNodeAtIndex = Math.floor(event.offsetY / BOX_HEIGHT);

      if (insertBeforeNodeAtIndex > childNodes.length) {
        dropZone.appendChild(dragged);
      } else {
        dropZone.insertBefore(dragged, childNodes[insertBeforeNodeAtIndex]);
      }
    } else {
      dropZone.appendChild(dragged);
    }
  });
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) =>
  box.addEventListener("dragstart", (event) => {
    dragged = event.target;
  })
);
