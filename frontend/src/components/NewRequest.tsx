import { ethers } from 'ethers';
import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';

import ModalProof from './ModalProf';

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
        "description": `Submit a new request for a zk-Maria proof Lorem. ${legalName} Request a persmission to port up to 0.15 Oz of Marihuana, I ${legalName} declare that I'm Mexican.\n
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
        <div className='my-3'>
            <h2>New Request</h2>
            <p>Submit a new request for a zk-Maria proof.</p>
            <div>
                <h5>* Complete the fields</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Legal Names</Form.Label>
                        <Form.Control type="text" placeholder="Legal Name" value={legalName} onChange={(e) => setLegalName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>ID Number</Form.Label>
                        <Form.Control type="text" placeholder="ID Number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="date" placeholder="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </Form>
                
                <br />
                <Button onClick={() => setSelectedForm(cofePrisData)}>+ New Request</Button>
            </div>
            <div className='my-4'>
                {selectedForm && (
                    <div className='my-4'>
                        <h3 className='my-3'>{selectedForm.title}</h3>
                        <p>{selectedForm.description}</p>
                        {/* <Button className='mx-auto' ></Button> */}
                        <ModalProof />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewRequest;