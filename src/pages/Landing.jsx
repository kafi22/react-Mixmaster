import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../Component/CocktailList';
import SearchList from '../Component/SearchList';

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

export const Loader = async () => {

  const searchItem = '';
  const response = await axios.get(`${url}${searchItem}`)
  return {drinks: response.data.drinks, searchItem}
  
}

const Landing = () => {

 const {drinks, searchItem}  = useLoaderData()

 

  return (
    <div>
      <SearchList searchItem={searchItem} />
      <CocktailList drinks={drinks} />
    </div>
  )
}

export default Landing;