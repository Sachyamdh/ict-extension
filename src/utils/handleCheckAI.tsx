import { sendImageToBackend } from "./backenFunction";

export const handleBulkImages = async () => {
  try {
    const images = Array.from(
      document.querySelectorAll("div.wIjY0d img.YQ4gaf")
    )
      .filter((img) => img.classList.length === 1)
      .slice(0, 20)
      .map((img) => (img as HTMLImageElement).src);

    const resultMap: Record<string, boolean> = {};

    for (const imageUrl of images) {
      const isAI = await sendImageToBackend(imageUrl);

      // const isAI = false;

      if (isAI !== null) {
        resultMap[imageUrl] = isAI;
      }
    }
    return resultMap;
  } catch (error) {
    console.log(error);
  }
};

export const handleSingleImage = async (imageUrl: string) => {
  try {
    const isAI = await sendImageToBackend(imageUrl);

    return isAI;
  } catch (error) {
    console.error("Error processing single image:", error);
    return null;
  }
};
