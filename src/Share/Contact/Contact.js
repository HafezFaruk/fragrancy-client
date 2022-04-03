import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <Container>
            <div className='row update-news my-5'>
                <div className='col-md-6 team-contact'>
                    <button><i className="fas fa-envelope-open"></i></button>
                    <input type="text" name="" id="" placeholder='Your Email Address' />
                </div>
                <div className='col-md-6'>
                    <h2>Latest news and update</h2>
                    <p> <i className="fas fa-envelope-open"></i> Subscribe Our News later ,Get In Touch With Us.</p>
                </div>
            </div>
        </Container>
    );
};

export default Contact;