import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../Component/CocktailList';
import SearchList from '../Component/SearchList';


const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
import { useQuery } from '@tanstack/react-query';


const searchCocktailQuery = (searchItem) => {

  return {
    queryKey : ["search", searchItem || "all"],
    queryFn : async () => {
      const response = await axios.get(`${url}${searchItem}`)
      return response.data.drinks
    }
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const urls = new URL(request.url);

    const searchItem = urls.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailQuery(searchItem));
    return { searchItem };
  };

const Landing = () => {

 const {searchItem}  = useLoaderData()
 const {data : drinks} = useQuery(searchCocktailQuery(searchItem))
 console.log(drinks)


 
  return (
    <div>
      <SearchList searchItem={searchItem} />
      <CocktailList drinks={drinks} />
    </div>
  )
}

export default Landing;