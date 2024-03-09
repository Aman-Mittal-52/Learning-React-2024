import React, { useEffect, useState } from 'react'

export default function Products() {
  const [data, setData] = useState([]);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products");
      const data = await res.json();
      setData(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h2>All Products</h2>
      <div className="products-wrapper">
        {/* Map the below div against product data */}
        {data.map((ele) => {
          return (
            <div key={ele.id} style={{ border: "1px solid black", margin: "10px" }}>
              <h3 className="name">{ele.title} </h3>
              <div className="brand">{ele.brand}</div>
              <div className="price">{ele.price}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}