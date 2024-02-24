function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages, currentPage, onchange }) {
  let pages = createArrayOfSize(totalPages).map((a,i) => {
    return <button key={i} data-testid="page-btn" onClick={()=>{onchange(currentPage+1)}}>{i+1}</button>;
  });
  console.log(pages);
  return <div>
    {pages}
  </div>;
}

export default Pagination;