const selectElement = document.getElementById("demo-select");
selectElement.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
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
      break;
    default:
      console.log("Unknown selection:", selectedOption);
  }
});
