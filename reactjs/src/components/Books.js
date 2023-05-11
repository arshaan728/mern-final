import Card from 'react-bootstrap/Card';
import React , {useEffect, useState}from 'react';
import Axios from 'axios';


export const Books =()=> {
const [bookData,setData] = useState([]);

useEffect(()=>{
 
})

    return (
        <>
        <div className='book'>
            {setData.map((val,key)=>{
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
                let amount = item.volumeInfo.title;
                return <div key={key}>
                     <Card className='cardskill' style={{ width: '15rem' , height: '25rem'}}>
      <Card.Img variant="top" src={val.thumbnail} classname='imgcard' />
      <Card.Body>
     
        
        <Card.Text className='ctext'>
          <h1></h1>
          <p>{val.amount}</p>
     
        </Card.Text>
       
      </Card.Body>
      </Card>
                </div>
               
            })}
        </div>

        </>
    )
}
