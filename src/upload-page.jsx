// UploadPage.jsx
import { useState } from 'react';

const UploadPage = () => {
    // State to hold the selected file
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file selection
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    // Function to handle form submission
    const handleUpload = () => {
        // Perform the upload logic here (you can use a library like axios to send the file to the server)
        console.log('File uploaded:', selectedFile);
    };

    return (
        <div className="upload_page container">
            <h3>Upload Page</h3>
            <div className="file_input">
                <label htmlFor="file">Choose a file:</label>
                <input
                    type="file"
                    id="file"
                    accept=".jpg, .jpeg, .png" // Specify the allowed file types
                    onChange={handleFileSelect}
                />
            </div>
            <button onClick={handleUpload} className="upload_btn">
                Upload
            </button>
        </div>
    );
};

export default UploadPage;
