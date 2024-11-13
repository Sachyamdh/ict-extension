export const Addlabel = (resultMap: Record<string, boolean>) => {
  const images = Array.from(document.querySelectorAll("div.wIjY0d img.YQ4gaf"))
    .filter((img) => img.classList.length === 1)
    .slice(0, 15);
  images.forEach((img) => {
    const htmlImg = img as HTMLImageElement;
    const label = document.createElement("div");
    label.textContent = resultMap[htmlImg.src] ? "Organic" : "AI-generated";
    label.style.position = "absolute";
    label.style.top = "0";
    label.style.left = "0";
    label.style.backgroundColor = resultMap[htmlImg.src]
      ? "rgba(33, 197, 216, 1)"
      : "rgba(255, 0, 0, 0.75)";
    label.style.color = resultMap[htmlImg.src] ? "black" : "white";
    label.style.padding = "5px 5px";
    label.style.zIndex = "10";
    label.style.fontSize = "8px";
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.display = "inline-block";
    if (htmlImg.parentNode) {
      htmlImg.parentNode.insertBefore(container, htmlImg);
      container.appendChild(htmlImg);
    }
    container.appendChild(label);
  });
};

export const AddSingleLable = (result: boolean) => {
  const targeElement = document.querySelector("a.YsLeY");
  if (targeElement) {
    const imageElement = targeElement.querySelector("img") as HTMLImageElement;
    const label = document.createElement("div");
    label.textContent = result ? "Organic" : "AI-generated";
    label.style.position = "absolute";
    label.style.top = "0";
    label.style.left = "0";
    label.style.backgroundColor = result
      ? "rgba(33, 197, 216, 1)"
      : "rgba(255, 0, 0, 0.75)";
    label.style.color = result ? "black" : "white";
    label.style.padding = "5px 5px";
    label.style.zIndex = "10";
    label.style.fontSize = "8px";
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.display = "inline-block";
    if (imageElement.parentNode) {
      imageElement.parentNode.insertBefore(container, imageElement);
      container.appendChild(imageElement);
    }
    container.appendChild(label);
  }
};
