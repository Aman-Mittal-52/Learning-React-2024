import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import CountriesRow from "./CountriesRow";
function Countries() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setLoading] = useState(false)

  async function fetchCountriesData() {
    setLoading(true)
    try {
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?limit=10&page=${currentPage}&orderBy=desc`);
      let data = await res.json();
      setData(data.data)
      setTotalPages(data.totalPages)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchCountriesData()
  }, [currentPage])

  return (
    <div>
      {isLoading ? <LoadingIndicator /> :
        <>
          <h1 data-testid="countries-header">Countries List</h1>
          <table>
            <thead>
              <tr id="theadBox">
                <th>ID</th>
                <th>COUNTRY</th>
                <th>POPULATION</th>
                <th>RANK</th>
              </tr>
            </thead>
            <tbody data-testid="countries-container">
              {/* Show the CountriesRow here */}
              {
                data.map((ele) =>
                  <CountriesRow key={ele.id} id={ele.id} country={ele.country} rank={ele.Rank} population={ele.population} />
                )
              }
            </tbody>
          </table>
          <div>{/* Pagination */}
            <Pagination
              current={currentPage}
              onChange={setCurrentPage} 
              total={totalPages}
            />

          </div>
        </>
      }
    </div>
  );
}

export default Countries;