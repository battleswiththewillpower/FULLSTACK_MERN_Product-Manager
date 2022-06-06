import axios from 'axios'
import React, { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

//dashboard for all products
const Main = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(reponse=>{
                console.log(reponse.data)
                setProducts(reponse.data)
            })
            .catch(err=>console.log(err))
    }, [])

    const handleDelete =(deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${deleteId}`)
            .then(response=>{
                const filterProducts = products.filter((product, i)=>product._id != deleteId)
                setProducts(filterProducts)
            })
            .catch(err=>console.log(err))

    }

  return (
    <div>
        <h1>All Products</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, i)=>{
                        return (
                            <tr key={i}>
                                {/* /api/product/:id */}
                                <td> <Link to={`/api/products/${product._id}`}>{product.title}</Link></td>
                                <td>${product.price}</td>
                                <td>{product.description}</td>
                                {/* /product/update/:id */}
                                <td> <Link to={`/api/products/update/${product._id}`}>Edit</Link></td>
                                <td><button onClick={()=>handleDelete(product._id)}>Delete</button></td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default Main