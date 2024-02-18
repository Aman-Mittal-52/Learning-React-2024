function Pagination({ current, onChange, total }) {
  return (
    <div data-testid="page-container">
      {
        [...Array(total)].map((ele,index)=> <button key={index} style={{
          border:index+1==current && "1px solid red"
        }} onClick={() => { onChange(index+1) }}>{index+1}</button>)
      }
    </div>

  );
}

export default Pagination;