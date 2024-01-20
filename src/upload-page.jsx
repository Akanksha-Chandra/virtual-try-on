// UploadPage.js
import React, { useState } from 'react';

const UploadPage = ({ onUpload, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upload Image</h1>
      <input type="file" onChange={handleFileChange} style={styles.fileInput} />
      <div style={styles.buttonContainer}>
        <button onClick={handleUpload} style={styles.uploadButton}>
          Upload
        </button>
        <button onClick={onCancel} style={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',  // Set minimum height to cover the entire viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  fileInput: {
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  uploadButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    marginRight: '10px',
    cursor: 'pointer',
    border: 'none',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
  },
};

export default UploadPage;
