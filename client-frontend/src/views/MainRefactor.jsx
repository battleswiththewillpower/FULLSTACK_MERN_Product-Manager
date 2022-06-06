import React, { useEffect, useState } from 'react'
import DisplayRefactor from '../refactorComponent/DisplayRefactor'
import CreateUpdate from '../refactorComponent/CreateUpdate'
import axios from 'axios'

// 1. grab info from backend automaically
//we need useEffect, useState, axios

const MainRefactor = () => {
  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(true)
  // const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products`)
      .then(response=>{
        console.log(response.data)
          setProducts(response.data)
          // setLoaded(true)

      })
      .catch(err=>console.log(err))
  },[refresh])

  const reload =()=>{
    setRefresh(!refresh)
  }

 const removeProduct = (productId) =>{
   setProducts(products.filter(product => product._id !== productId))
 }

 const addProduct =(product)=>{
  setProducts([...products, product])
 }
  return (
    <div>
      
        <CreateUpdate action = "create" handleSuccess={addProduct}/>
        
          <DisplayRefactor products={products} removeProduct={removeProduct}/>
       
        
    </div>
  )
}

export default MainRefactor