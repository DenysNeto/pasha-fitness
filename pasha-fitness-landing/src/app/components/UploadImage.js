// components/UploadImage.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const UploadImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedImages.length > 0) {
      console.log("Selected Images:", selectedImages);
    } else {
      console.log("Please select images.");
    }
  };

  const clearImages = () => {
    setSelectedImages([]);
  };

  return (
    <div style={styles.container}>
      <h2>Upload Images</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.fileInput}
          id="file-input"
          multiple
        />

        <div style={{ display: "flex", gap: "20px" }}>
          <label htmlFor="file-input" style={styles.uploadButton}>
            ADD
          </label>

          {selectedImages.length > 0 && (
            <label onClick={clearImages} style={styles.clearButton}>
              CLEAR
            </label>
          )}
        </div>
      </form>
      {selectedImages.length > 0 && (
        <div style={styles.previewContainer}>
          <h3>Preview:</h3>
          <div style={styles.preview}>
            {selectedImages.map((image, index) => (
              <div key={index} style={styles.imageContainer}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                  style={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <button type="submit" style={styles.submitButton}>
        SAVE
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fileInput: {
    display: "none",
  },
  uploadButton: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  clearButton: {
    display: "inline-block",
    backgroundColor: "#dc3545",
    padding: "10px 20px",

    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  },

  submitButton: {
    backgroundColor: "#28a745",
    width: "100%",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  },

  previewContainer: {
    marginTop: "20px",
    overflowY: "auto",
    maxHeight: "300px",
    overflow: "auto",
    marginBottom: "50px",
  },
  preview: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
  imageContainer: {
    position: "relative",
    display: "inline-block",
  },
  image: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "5px",
    maxWidth: "250px",
    maxHeight: "250px",
    height: "auto",
  },
};

export default UploadImage;
