import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AllProducts() {
  const [data, setData] = useState([]);

  async function fetchProducts() {
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`);
      let data = await res.json();
      setData(data);
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
      <div>All Products</div>
      <div data-testid="products-wrapper">
        {data.map((ele) => {
          return (
            <Link key={ele.id} to={`/${ele.id}`}>
              <div style={{ border: "1px solid red" }} >
                <h3>{ele.name}</h3>
                <p>{ele.id} {"  - "} {ele.price}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
