import LoadingIndicator from "./LoadingIndicator";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
import "./Restaurants.css"
import { useEffect, useState } from "react";

function Restaurants() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchAndSisplayData() {
    try {
      setLoading(true);
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${pageNum}`)
      let data = await res.json();
      setData(data.data);
      setTotalPages(data.totalPages)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchAndSisplayData()
  }, [pageNum])

  function handleChange(){
    setPageNum(value)
    fetchAndSisplayData()

  }
  return (
    <>
      {
        isLoading ? <LoadingIndicator /> : (
          <div>
            <h1 data-testid="restaurants-header">Restaurants List</h1>
            <div data-testid="restaurants-container">
              {/* Restaurant Card */}
              {data.map((card,index)=>{
                return (
                  <RestaurantCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  image={card.image}
                  type={card.type}
                  rating={card.rating}
                  price_starts_from={card.price_starts_from}
                  number_of_votes={card.number_of_votes}
                />

                )
              })}
            </div>
            <div>
              {/* Pagination Component */}
              <Pagination current={pageNum} onClick={handleChange} onChange={setPageNum} total={totalPages}/>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Restaurants;