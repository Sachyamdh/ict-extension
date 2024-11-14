export const sendImageToBackend = async (imageUrl: string) => {
  try {

    const response = await fetch("http://localhost:5000/upload-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image_url: imageUrl }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.is_ai_image; // Assuming this returns true/false
  } catch (error) {
    console.error("Error while fetching from backend:", error);
    return null;
  }
};
