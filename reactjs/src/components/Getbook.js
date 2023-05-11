import { exp } from '@tensorflow/tfjs';
import React from 'react';
import Card from 'react-bootstrap/Card';
const Getbook= ({book})=>{
    return (
        <>
        {
            book.map((item)=>{
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
                let amount = item.volumeInfo.title;
                return (
                    <>
                     {/* <div className="card"   >
                        <img src={thumbnail}  alt="" />
<div className="bottom">
    <h3 className="title">{amount}</h3>
    <p className="amount">{item.volumeInfo.authors}</p>
</div>
</div> */}
  <Card  style={{ width: '18rem'  }}>
      <Card.Img  variant="top" src={thumbnail} />
      <Card.Body className='ct'>
     
       
        <Card.Text className='tw' >
          <h1></h1>
          <p>{amount}</p>
          <p>{item.volumeInfo.authors}</p>
        </Card.Text>
       
      </Card.Body>
      </Card>
                    </>
                )
            })
        }
        </>
    )
}
export default Getbook;