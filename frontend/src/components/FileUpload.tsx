import React, { useState } from 'react';

import { Button, InputGroup, Form } from 'react-bootstrap';

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
        <div className='mx-auto my-4'>
            <h2 className='my-4'>KYC Verification</h2>
            <p className=''>Upload a valid ID document to verify your identity.</p>
            <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="File"
                    aria-label="file"
                    aria-describedby="basic-addon1"
                    type="file" onChange={handleFileChange}
                    />
                    <InputGroup.Text id="basic-addon1">
                    <Button className='btn btn-primary' onClick={handleUpload}>Upload</Button>
                </InputGroup.Text>
                </InputGroup>
        </div>
    );
};

export default FileUpload;