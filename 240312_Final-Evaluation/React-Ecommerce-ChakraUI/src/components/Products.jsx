import React, { useEffect, useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import axios from "axios";
import Pagination from "./Pagination";
import Product from "./Product";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(3)
  const [totalPages, setTotalPages] = useState(1)
  const [data, setData] = useState([])

  async function getProducts() {
    try {
      const res = await axios({
        method: "get",
        baseURL: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products",
        params: {
          page: page,
          limit: limit,
        }
      })
      setData(res.data.data)
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts()
  }, [page,limit])

  return (
    <Flex flexDirection={'column'}>
      <Grid  templateColumns='repeat(3, 1fr)' grid-gap={10}>
          {data.map((ele)=>{
            return <Product key={ele.id} src={ele.img} category={ele.category} brand={ele.brand} detail={ele.details} price={ele.price} />
          })}
      </Grid>
      <Pagination setPage={setPage} page={page} setLimit={setLimit} totalPages={totalPages} setTotalPages={setTotalPages}/>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
