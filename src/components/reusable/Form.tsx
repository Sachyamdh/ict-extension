import React, { useState } from "react";
import { motion } from "framer-motion";
import LoadingIndicator from "./Loading";

const styles = {
  formContainer: {
    width: "175px",
    height: "45px",
    flexShrink: 0,
    borderRadius: "25px",
    border: "0.2px solid rgba(0, 0, 0, 0.35)",
    background: "#23C0CF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
  } as React.CSSProperties,
  svg: {
    marginRight: "8px",
  } as React.CSSProperties,
  uploadText: {
    color: "#FFF",
    fontFamily: "Lateef",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  } as React.CSSProperties,
  fileInput: {
    opacity: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  } as React.CSSProperties,
  loadingText: {
    color: "#FFF",
    fontSize: "12px",
  } as React.CSSProperties,
  aiImageContainer: {
    width: "175px",
    height: "45px",
    backgroundColor: "#F02C2C",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
  } as React.CSSProperties,
  successContainer: {
    width: "175px",
    height: "45px",
    backgroundColor: "#26B924",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
  } as React.CSSProperties,
};

const AIResponse = ({ isSuccess }: { isSuccess: boolean }) => {
  return isSuccess ? (
    <div style={styles.successContainer}>
      <span style={styles.uploadText}>Human</span>
    </div>
  ) : (
    <div style={styles.aiImageContainer}>
      <span style={styles.uploadText}>AI</span>
    </div>
  );
};

const ImageUploadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setUploadSuccess(result.success);
        } else {
          console.error("Image upload failed");
          setUploadSuccess(false);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        setUploadSuccess(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <motion.form
      style={styles.formContainer}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "45px", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : uploadSuccess !== null ? (
        <AIResponse isSuccess={uploadSuccess} />
      ) : (
        <>
          <input
            type="file"
            style={styles.fileInput}
            onChange={handleFileChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={styles.svg}
          >
            <path
              d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM2 16H16V2H2V16ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
              fill="white"
            />
          </svg>
          <span style={styles.uploadText}>Drop Image</span>
        </>
      )}
    </motion.form>
  );
};

export default ImageUploadForm;
