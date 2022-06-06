import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// grab the info from the backend when loading the compennet //we need to get that information from routes
// in order to grab from the backend we have to import axios
// in order to load the information we need useEffect
// import useParams to get the information displayed on the frontend

const Displayproduct = () => {
  const {id} = useParams()
  const [productInfo, setProductInfo] = useState()

  useEffect(()=>{
    // /api/product/:id - getOne
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response=>setProductInfo(response.data))
      .catch(err=>console.log(err))

  },[])
  return (
    <div>
      <h1>Display Product</h1>

      {
        productInfo&&
        <div>
          <h4>Title: {productInfo.title}</h4>
          <p>Price: ${productInfo.price}</p>
          <p>Description: {productInfo.description}</p>
        </div>
      }

    </div>
  )
}

export default Displayproduct
