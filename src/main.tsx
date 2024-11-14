import ReactDOM from "react-dom/client";
import App from "./App";

function initializeExtension() {
  const targetSpan = document.querySelector("span.gb") as HTMLElement | null;

  if (targetSpan && getComputedStyle(targetSpan).display === "none") {
    const targetDiv = document.createElement("div");
    targetDiv.className = targetSpan.className;
    targetDiv.style.display = "flex";
    targetDiv.style.position = "relative";
    targetDiv.style.visibility = "visible";
    targetDiv.style.opacity = "1";
    targetDiv.style.zIndex = "1000";

    while (targetSpan.firstChild) {
      targetDiv.appendChild(targetSpan.firstChild);
    }

    targetSpan.parentNode?.replaceChild(targetDiv, targetSpan);

    const rootDiv = document.createElement("div");
    rootDiv.style.display = "flex";
    rootDiv.style.justifyContent = "center";
    rootDiv.style.alignItems = "center";
    rootDiv.style.width = "100%";
    rootDiv.style.height = "100%";

    const root = ReactDOM.createRoot(rootDiv);
    root.render(<App />);

    targetDiv.appendChild(rootDiv);
  } else {
    console.error("Target span element not found or display is not 'none'");
  }
}

setTimeout(initializeExtension, 1000);
