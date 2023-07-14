import React from 'react'
import { Form } from 'react-router-dom';
import Wrapper from '../wrappers/Searchitem';

const SearchList = ({searchItem}) => {
  console.log(searchItem)
  return (
    <Wrapper>
      <Form>
        <input type="search" name='search' defaultValue='vodka' />
        <button type='submit' className='search-btn'>Search here</button>
      </Form>
    </Wrapper>
  )
}

export default SearchList