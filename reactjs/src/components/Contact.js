import {useState} from 'react';
import { Container} from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () =>{
    const formInitialDetails = {
        firstName :'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText] = useState('Send');
    const [status , setStatus] = useState({});

    const onFormupdate = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('https://mern-final-m6de.onrender.com',{
            method:'POST',
            headers: {
                'Content-Type':'Application/json;charset=utf-8',

            },
            body: JSON.stringify(formDetails),

        });
        setButtonText('send');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code ===200) {
            setStatus({success:true ,message:'message sent successfully'});

        }
        else {
            setStatus({success:false , message:'something went wrong , try again later'})
        }

    }
        return (
           <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us'/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormupdate('firstName',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.lastName} placeholder='First Name' onChange={(e) => onFormupdate('lastName',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormupdate('email',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.phone} placeholder='phone' onChange={(e) => onFormupdate('phone',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <textarea rows='6' value={formDetails.message} placeholder='message' onChange={(e)=> onFormupdate('message',e.target.value)}/>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            status.message &&
                            <Col>
                            <p className={status.success === false ? 'dnager' : 'sucesss'}>{status.message}</p>
                            </Col>
                        </Row>
                    </form>
                </Col>
                </Row>
            </Container>
           </section>
    )
}