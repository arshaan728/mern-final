import {Alert} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {Row, Col } from 'react-bootstrap';

export const Newsletter = ({onValidated,status,message}) => {

    const [email,setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf('@') > -1 && 
        onValidated ({
            EMAIL : email
        })
    }

    const clearFields = () =>{
       setEmail('');
    }
return (
    <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3> subscribe to our Newsletter</h3> 
                    {status=== 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                    {status === ' sending' && <Alert>Sending....</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='email address'/>
                            <button type='submit'>submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
    </Col>
)
}