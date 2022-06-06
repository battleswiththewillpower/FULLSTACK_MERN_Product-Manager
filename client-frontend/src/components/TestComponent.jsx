import React, { useEffect, useState } from 'react';
import axios from 'axios'

// get info from backend: axios for info, useEffect, state
const TestComponent = () => {
    const [message, setMessage] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api`)
            .then(response => {
                setMessage(response.data)
                console.log(response.data)}) //successful
            .catch(err=>console.log(err)) //unsuccessful
    }, [])
  return (
    <div>TestComponent
    {
        message?
        <h1> {message} </h1>:
        <h1>Loading...</h1>
    }
    </div>
  )
}

export default TestComponent