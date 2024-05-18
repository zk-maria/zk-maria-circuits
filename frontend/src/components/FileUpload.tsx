import React, { useState } from 'react';


const FileUpload = (props: any) => {
    // Component logic goes here

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
        console.log(selectedFile);
        if (selectedFile && (selectedFile.type !== 'image/png' && selectedFile.type !== 'image/jpeg')) {
            alert('Please select a PNG or JPEG image file.');
            return;
        }
        
        if (selectedFile && selectedFile.size > 1024 * 1024) {
            alert('File size should not exceed 1MB.');
            return;
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            console.log(selectedFile);
            // Perform the upload logic here
            
        }
    };

    return (
        // JSX markup goes here
        <div>
            <h2>KYC Verification</h2>
            <p>Upload a valid ID document to verify your identity.</p>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
};

export default FileUpload;