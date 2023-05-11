import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Axios from 'axios';

export const MailchimpForm = () => {
const [msg,setmsg] = useState('');

const message = (evt)=>{
    if(evt.key=='Enter') {
        console.log(msg);
        Axios.post('http://localhost:3001/insert',{comment:msg});
        setmsg('');
        console.log(msg);

    }
}

return (
<>
    {/* <MailchimpSubscribe 
    url={postUrl}
    render = {({subscribe,status,message})=> (
        <Newsletter
        status={status}
        message={message}
        onValidated= {formData => subscribe(formData)}
        />
    )}
    /> */}
    <Form className="formcc">
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control className="ta" value={msg} onChange={e=>setmsg(e.target.value)} as="textarea" onKeyPress={message} rows={3} placeholder="you can tell me anything here and press enter to send me the message?" />
      </Form.Group>
    </Form>

</>
)

}