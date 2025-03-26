const selectElement = document.getElementById("demo-select");
let count = 0;
function removePreviousCanvas() {
  const existingCanvas = document.querySelector("canvas");
  if (existingCanvas) {
    console.log(existingCanvas);
    existingCanvas.remove();
    count += 1;
  }
  if (count == 2) {
    window.location.reload();
  }
}

selectElement.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  removePreviousCanvas();
  switch (selectedOption) {
    case "collision":
      import("./crates/collision-debug/pkg/collision_debug.js")
        .then(({ default: nannou }) => {
          nannou().then((s) => {
            s.main_web();
          });
        })
        .catch((error) => {
          console.error("Error loading collision-debug:", error);
        });

      const collisionCanvas = document.querySelector("canvas");
      collisionCanvas.id = 'collision';
      break;
    case "samples":
      import("./crates/samples/pkg/samples.js")
        .then(({ default: nannou }) => {
          nannou().then((s) => {
            s.main_web();
          });
        })
        .catch((error) => {
          console.error("Error loading samples:", error);
        });
      const samplesCanvas = document.querySelector("canvas");
      samplesCanvas.id = 'samples';

      break;
    default:
      console.log("Unknown selection:", selectedOption);
  }
});
