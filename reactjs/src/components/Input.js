import { useState } from "react";
import Axios from 'axios';

export const Input = () =>{
    const [language , setlanguagename] = useState('');
    const [description, setdescription] = useState(0);

    const [skill,setskill] = useState(0);

    const addtodb = () => {
       Axios.post('https://localhost:3001/insert',{
        language: language,
        description:description,
        skill : skill,

       });
    }
    return (
        <div className="Input">
            <h1>Crud app with mern</h1>
             <label>language:</label>
             <input type="text" onChange={(event)=> {
                setlanguagename(event.target.value);
             }}/>
            <label>description:</label> 
            <input type="text" onChange={(event)=> {
                setdescription(event.target.value);
             }}/>
            <label>Skill:</label>
            <input type="text" onChange={(event)=> {
                setskill(event.target.value);
             }}/>
            <button onClick={addtodb}>add to list</button>
        </div>
    )

}