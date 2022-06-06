
import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const CreateUpdate = (props) => {
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState(500);
    // const [description, setDescription] = useState("");
    const [inputs, setInputs] = useState({
        "title": "",
        "price":500,
        "description":""
    }) 
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        if(props.action === "update"){
            axios.get(`http://localhost:8000/api/products/${id}`)
            .then(results=>setInputs(results.data))
        }
    },[props.action,id])

    const handleSubmit=(e)=>{
        e.preventDefault();
        //post means creating something
        //takes two args: the POST, and information that you want to send - pass the obj
        axios[props.action==="create"?"post":"put"](`http://localhost:8000/api/products/${props.action}/${id?id:""}`, inputs)
        .then(response=>{
            console.log(response) 
            props.handleSuccess?
            props.handleSuccess(response.data): navigate("/")
            setInputs({
                "title": "",
                "price":500,
                "description":""
            });
        })
        .catch(err=>console.log(err))
        
        
    }
    const handleChange = (e) =>{
        setInputs({...inputs,[e.target.name]: e.target.value})
    }

    

  return (
    <div>
       <h1>CreateUpdate Section</h1>

       <form onSubmit={handleSubmit}>
            <div>
        <label htmlFor='title'>Title</label>
        <input type="text" placeholder='Title' name='title' value={inputs.title} 
            onChange={handleChange}/>
            </div>
            
            <div>
            <label htmlFor='price'>Price: </label>
            <input type="number" placeholder='Price' name="price" value={inputs.price} 
            onChange={handleChange}/>
            </div>

            <div>
            <label htmlFor="description">Description: </label><br />
            <textarea rows="4" cols="50" name="description" placeholder='Add Details' value={inputs.description} form="usrform"
            onChange={handleChange}
            >Enter text here...</textarea>
            </div>
            <button type='submit'>{props.action}</button>
        </form> 

    </div>
  )
}

export default CreateUpdate