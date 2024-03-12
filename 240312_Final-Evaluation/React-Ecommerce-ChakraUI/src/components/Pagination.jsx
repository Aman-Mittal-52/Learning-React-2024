import React from "react";
import { ButtonGroup, Button, Select } from '@chakra-ui/react'

const Pagination = ({ setPage, page, setLimit, totalPages, setTotalPages }) => {
  // TODO: Remove below const and instead import them from chakra


  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={() => {
        setPage(1)
      }}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={() => {
        setPage(page == 1? null : page--)
      }}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e) => {
        setLimit(e.target.value)
      }}>
        <option data-cy="pagination-limit-3" value='3'>3</option>
        <option data-cy="pagination-limit-6" value='6'>6</option>
        <option data-cy="pagination-limit-9" value='9'>9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={() => {
        setPage(page == totalPages? null : page++)
      }}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={() => {
        setPage(totalPages)
      }}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
