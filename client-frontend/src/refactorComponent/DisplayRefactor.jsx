import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

const DisplayRefactor = (props) => {
  //ASK ABOUT DESTRUCTURING WITH PROPS
  const{products} = props;
  // console.log(props)

  //setup delete
  const handleDelete = (deleteId) =>{
    axios.delete(`http://localhost:8000/api/products/delete/${deleteId}`)
    .then(response=> //if theres an admin or login. can setup a condiitonal
      props.removeProduct(deleteId))
    .catch(err=>console.log(err))
  }
  

  return (
    <div>
      <h1>DisplayRefactor</h1>
      <table>
        <thead>
          <tr>
            <th>Title:</th>
            <th>Price:$</th>
            <th>Description:</th>
            <th>Actions: </th>
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
                                {/* <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/> */}
                                
                            </tr>
                        )
                    })
                }
            </tbody>
      </table>

    </div>
  )
}

export default DisplayRefactor