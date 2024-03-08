import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const [data, setData] = useState([]);
  const { product_id } = useParams();

  async function fetchSingle() {
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${product_id}`);
      let data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    fetchSingle()
  },[])
  return (
    <div data-testid="product-details" >
      <div>
        <p>{data.id}</p>
        <h2 data-testid ='product_name'>{data.name}</h2>
        <h1 data-testid = 'product_price'>{data.price}</h1>
        {/* show product details here */}
      </div>
    </div>
  )
}
