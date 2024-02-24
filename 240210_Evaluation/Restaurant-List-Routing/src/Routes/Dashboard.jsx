import { useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useState } from "react";

import { AuthContext } from "../Context/AuthContext";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from '../Components/Pagination'

function Dashboard() {
  const { authState, loginUser, logoutUser } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [data , setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchRestaurants(){
    try {
      const res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${currentPage}&limit=10`);
      const data = await res.json();
      res.ok ? setData(data.data) : console.error("Error fetching")
      setTotalPages(data.totalPages)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchRestaurants()
  },[])

  if (!authState.isAuth && !authState.token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={loginUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data}/>
      </div>
      <div data-testid="pagination-container">
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage}/>
      </div>
    </div>
  );
}

export default Dashboard;
