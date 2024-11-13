async function sendRequestToBackend(data) {
  try {
    const response = await fetch("http://localhost:3000/api/endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Received response from backend:", result);
    return result;
  } catch (error) {
    console.error("Error while fetching from backend:", error);
    return null; 
  }
}

// Listen for messages from content scripts or popup scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in background:", message);

  // Check if the message is intended for the backend request
  if (message.type === "REQUEST_BACKEND") {
    // Call the function to send data to the backend and return the response
    sendRequestToBackend(message.data)
      .then((response) => {
        sendResponse({ success: true, data: response });
      })
      .catch((error) => {
        sendResponse({ success: false, error: error.message });
      });

    // Indicate that we will respond asynchronously
    return true;
  }
});
