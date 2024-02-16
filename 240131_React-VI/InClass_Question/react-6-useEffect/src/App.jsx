import { useState } from "react";
import "./App.css";

function App() {
  const [data , setData] = useState([]);
  async function fetchAndDisplayData(){
    try {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      setData(data.products);
    } catch (error) {
    console.log(error);
    }
  }
  return (
    <>
      <button onClick={fetchAndDisplayData}>GET ALL Products</button>
      <div className="products-container">
        {
          data && data.map((ele)=>{
            return(
              <div className="card"key={ele.id}>
                <h4>{ele.title}</h4>
                <p>{ele.brand}</p>
                <p>{ele.category}</p>
                <img src={ele.images[4]} alt="photo" />
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
