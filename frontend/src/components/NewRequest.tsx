import { ethers } from 'ethers';
import React, { useState } from 'react';

interface NewRequestProps {
    // Define the props
    props: any;
}


const NewRequest = ({ props }: NewRequestProps) => {
    console.log({ ...props });
    const [legalName, setLegalName] = useState(''); 
    const [idNumber, setIdNumber] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [selectedForm, setSelectedForm] = useState(null as any);

    const cofePrisData = {
        "title": "CofePris Permission Form: Request Marihuana Possession for personal use",
        "description": `Submit a new request for a zk-Maria proof Lorem. \b${legalName}\b Request a persmission to port up to 0.15 Oz of Marihuana, I ${legalName} declare that I'm Mexican.\n
        With ID Number ${idNumber} whit expiry date: ${expiryDate}, who is of legal age ${age} and email ${email} to request a permission to possess up to 0.15 Oz of Marihuana for personal use.\n
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. \nIt was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    };

    const handleSubmit = () => {
        console.log('Submitting form');
        // convert strings to bytes
        const legalNameBytes = ethers.toUtf8Bytes(legalName, 'NFC');
        console.log("Legal Name \n", legalNameBytes);
        console.log(ethers.toUtf8Bytes("Mexican", 'NFC'));
        const idNumberToNumber = Number(idNumber);
        const ageToNumber = Number(age);
        const expiryDateTimestamp = new Date(expiryDate).getTime();
    };

    return (
        <div>
            <h2>New Request</h2>
            <p>Submit a new request for a zk-Maria proof.</p>
            <div>
                <h5>* Complete the fields</h5>
                <input type="text" placeholder="Legal Name" value={legalName} onChange={(e) => setLegalName(e.target.value)} />
                <input type="text" placeholder="ID Number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
                <input type="date" placeholder="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button onClick={() => setSelectedForm(cofePrisData)}>+ New Request</button>
            </div>
            <div>
                {selectedForm && (
                    <div>
                        <h3>{selectedForm.title}</h3>
                        <p>{selectedForm.description}</p>
                        <button onClick={handleSubmit}>Sign & Submit</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewRequest;