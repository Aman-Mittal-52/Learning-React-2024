import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import ProductTable from '../Components/ProductsTable';
import Loader from '../Components/Loader';
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  
  const {authState, logout} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  async function fetchpProducts(){
    setLoading(true);
    try {
      const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
      const resData = await res.json();
      if(res.ok){
        setData(resData.data);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{fetchpProducts()},[])

  if(loading){
    return <Loader/>
  }

  if (error) {
    return <h1>ERROR FETCH</h1>
  }

  if(!authState.isAuth){
    return <Navigate to="/login"/>
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductTable data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;
