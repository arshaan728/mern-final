import react, { useState } from 'react';
import axios from 'axios';
import Getbook from './Getbook';
export const CardAPI = () =>{
    const [search , setSearch] = useState('');
    const [bookData,setData] = useState([]);
    const searchBook= (evt)=> {
        if (evt.key==='Enter') {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBeTDWBh0n8BKzmfQI2SWPfoA3Z1jcVwSs'+'&maxResults=10')
            .then(
                (res=>setData(res.data.items))
            ).catch(err=>console.log(err))
        }
    }
    return (
        <>
        <div className='header'>
            <div className='row1'>
             
            </div>
            <div className='row2'>
             
                <div className='search'>
                    <input type='text' placeholder='enter your book name' value={search} 
                    onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                    <button className='bs'>search</button>
                </div>
                <img src="../bg2.png" alt="" />
            </div>
        </div>
        <div className='container3'>
             {
               <Getbook book={bookData}/>
             }
        </div>
        </>
    )
}