const demos = {
  "collision": {
    path: "./crates/collision-debug/pkg/collision_debug.js",
    label: "Collision Debug Demo",
  },
  "samples": {
    path: "./crates/samples/pkg/samples.js",
    label: "Samples Demo",
  },
};

const url = new URL(document.location.href);
const id = url.searchParams.get("id") ?? "collision"; // default

const demo = demos[id];

if (!demo) {
  console.error(`Unknown Demo-ID: "${id}"`);
  // Optional: UI-Fallback oder Redirect
} else {
  import(demo.path).then(async ({ default: nannou }) => {
    document.title = demo.label; // z. B. Seitentitel setzen
    await nannou().then((s) => s.main_web());
  });
}


document.getElementById("demo-select").addEventListener("change", (e) => {
  const selected = e.target.value;
  const url = new URL(window.location.href);
  url.searchParams.set("id", selected);
  window.location.href = url.toString();
});
