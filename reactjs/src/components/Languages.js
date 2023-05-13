import Card from 'react-bootstrap/Card';
import React , {useEffect, useState}from 'react';
import Axios from 'axios';


export const Languages = () => {

  const [skilllist,setskilllist] = useState([]);


  useEffect(()=>{
    Axios.get('https://localhost:3001/read').then((response)=>{
      setskilllist(response.data);
    })
  })

    return (
        <div className='skills-languages'>
          {skilllist.map((val,key)=>{
            return <div key={key}>
            <Card className='cardskill' style={{ width: '15rem' , height: '25rem'}}>
      <Card.Img variant="top" src={val.url} classname='imgcard' />
      <Card.Body>
     
        
        <Card.Text className='ctext'>
          <h1></h1>
          <p>{val.description}</p>
          <p> Rating:{val.skill}</p>
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
          })}
             
{/*     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card> */}



        </div>
        
      );
}

