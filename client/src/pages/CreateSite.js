import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateSite() {
    return (
    <div className="site-page">
        <div className="create-container">
            <h2>CreateSite</h2>
            <div className="form-div">
                <Form className="d-flex align-center">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> 
            </div>
        </div>
    </div>
    )
}

export default CreateSite