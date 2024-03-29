import { useParams } from "react-router-dom";
import  { useState, useEffect } from 'react'

function SingleRestaurantPage() {
  const {user_id} = useParams()
  const [ data, setData] = useState([]);

  async function fetchRestaurants(){
    try {
      const res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${user_id}`);
      const data = await res.json();
      res.ok ? setData(data.data) : console.error("Error fetching")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchRestaurants()
    console.log(user_id);
  },[])

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={data.image}/>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
