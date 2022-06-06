import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

//form that send information to the backend once submitted
// need axios for backend
// need useState for forms


const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(500);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    //post means creating something
    //takes two args: the POST, and information that you want to send - pass the obj
    axios.post(`http://localhost:8000/api/products/create`, {title,price,description})
    .then(response=>navigate(`/api/products`))
    .catch(err=>console.log(err))
    
    clearForm();
}

const clearForm=()=>{
    setTitle('');
    setDescription('');
    
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
        <label htmlFor='title'>Title</label>
        <input type="text" placeholder='Title' name='title' value={title} 
            onChange={e=>setTitle(e.target.value)}/>
            </div>
            
            <div>
            <label htmlFor='price'>Price: </label>
            <input type="number" placeholder='Price' name="price" value={price} 
            onChange={e=>setPrice(e.target.value)}/>
            </div>

            <div>
            <label htmlFor="description">Description: </label><br />
            <textarea rows="4" cols="50" name="description" placeholder='Add Details' value={description} form="usrform"
            onChange={e=>setDescription(e.target.value)}
            >Enter text here...</textarea>
            </div>
            <button type='submit'>Create</button>
        </form>

    </div>
  )
}

export default Form