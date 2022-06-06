import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


// getOne and create but togather
// get product id from Routes(params)
// use id to go to the backend: axios
// need state for chnage

const Updateproduct = () => {
  const [updateTitle, setUpdateTitle] = useState("")
  const [updatePrice, setUpdatePrice] = useState(500)
  const [updateDescription, setUpdateDescription] = useState("")
  const {id} = useParams()
  const navigate = useNavigate();

  useEffect(()=>{
    //gain access to the one product
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(reponse=>{
      const product = reponse.data //be able to access each key in the object to update the value
      setUpdateTitle(product.title)
      setUpdatePrice(product.price)
      setUpdateDescription(product.description)
  })
    .catch(err=>console.log(err))
    },[])

  const handleSubmit=(e)=>{
    //update the ID we wanted to access 
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/update/${id}`, {
      title:updateTitle,
      price:updatePrice,
      description:updateDescription
    })
    .then(response=>{
      console.log(response)
      navigate(`/api/products`)
      
    })

    .catch(err=>console.log(err))
  }

  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
    .then(response=>navigate(`/api/products`))
    .catch(err=>console.log(err))
  }

  return (
    <div>
     <h1> Update The Product </h1>
     <form onSubmit={handleSubmit}>
            <div>
        <label htmlFor='updateitle'>Title</label>
        <input type="text" name='updateTitle' value={updateTitle} 
            onChange={e=>setUpdateTitle(e.target.value)}/>
            </div>
            
            <div>
            <label htmlFor='updatePrice'>Price: </label>
            <input type="number" name="updatePrice" value={updatePrice} 
            onChange={e=>setUpdatePrice(e.target.value)}/>
            </div>

            <div>
            <label htmlFor="updateDescription">Description: </label><br />
            <textarea rows="4" cols="50" name="updateDescription" value={updateDescription} form="usrform"
            onChange={e=>setUpdateDescription(e.target.value)}
            >Enter text here...</textarea>
            </div>
            <button type='submit'>Update</button>
        </form>
            <button onClick={handleDelete} >Delete</button>


    </div>
  )
}

export default Updateproduct