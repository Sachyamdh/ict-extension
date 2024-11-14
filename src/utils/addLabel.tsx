export const Addlabel = (resultMap: Record<string, boolean>) => {
  const images = Array.from(document.querySelectorAll("div.wIjY0d img.YQ4gaf"))
    .filter((img) => img.classList.length === 1)
    .slice(0, 20);

  images.forEach((img) => {
    const htmlImg = img as HTMLImageElement;
    const label = document.createElement("div");
    label.textContent = resultMap[htmlImg.src] ? "OG" : "AI";

    // Label styles
    label.style.position = "absolute";
    label.style.top = "5px";
    label.style.right = "5px";
    label.style.backgroundColor = resultMap[htmlImg.src]
      ? "#26B924"
      : "#F02C2C";
    label.style.color = "#FFF";
    label.style.width = "35.185px";
    label.style.height = "35.185px";
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.justifyContent = "center";
    label.style.fontFamily = "Lateef";
    label.style.fontSize = "23px";
    label.style.fontWeight = "800";
    label.style.lineHeight = "normal";
    label.style.borderRadius = "50%";
    label.style.zIndex = "10";
    label.style.flexShrink = "0";

    // Container styles
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.display = "inline-block";
    container.style.width = "fit-content";

    if (htmlImg.parentNode) {
      htmlImg.parentNode.insertBefore(container, htmlImg);
      container.appendChild(htmlImg);
    }
    container.appendChild(label);
  });
};

export const AddSingleLable = (result: boolean) => {
  // Query all anchor elements with the class 'YsLeY'
  console.log("label", result);
  const targetElements = document.querySelectorAll("a.YsLeY");

  const appendLabel = (targetElement: HTMLElement) => {
    // Create the label div
    const label = document.createElement("div");
    label.textContent = result ? "OG" : "AI";

    // Label styles
    label.style.position = "absolute";
    label.style.top = "10px";
    label.style.right = "10px";
    label.style.backgroundColor = result ? "#26B924" : "#F02C2C";
    label.style.color = "#FFF";
    label.style.width = "37.185px";
    label.style.height = "37.185px";
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.justifyContent = "center";
    label.style.fontFamily = "Lateef";
    label.style.fontSize = "21px";
    label.style.fontWeight = "800";
    label.style.lineHeight = "normal";
    label.style.borderRadius = "50%";
    label.style.zIndex = "20";
    label.style.flexShrink = "0";

    // Ensure the anchor tag has position relative
    targetElement.style.position = "relative";

    // Append the label to the anchor tag
    targetElement.appendChild(label);
  };

  if (targetElements.length > 0) {
    targetElements.forEach((targetElement) => {
      appendLabel(targetElement as HTMLElement); // Type cast here
    });

    console.log("Label appended to all anchor tags.");
  } else {
    console.log("No target elements with 'a.YsLeY' found.");
  }

  // MutationObserver to handle dynamically loaded content
  const observer = new MutationObserver(() => {
    const newTargetElements = document.querySelectorAll(
      "a.YsLeY:not([data-label-applied])"
    );

    newTargetElements.forEach((newTargetElement) => {
      appendLabel(newTargetElement as HTMLElement); // Type cast here
      newTargetElement.setAttribute("data-label-applied", "true"); // Mark label as applied
    });
  });

  // Start observing changes to the DOM
  observer.observe(document.body, { childList: true, subtree: true });
};
