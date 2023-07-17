import React from 'react';
import Wrapper from '../wrappers/Cocktail';
import axios from 'axios';
import { useLoaderData, Link, Navigate } from 'react-router-dom';

const singleUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

import { useQuery } from '@tanstack/react-query';

const getSingleQuery = (id) => {

  return {
    queryKey : ["cocktail", id],
    queryFn : async () => {
      const {data} = await axios.get(`${singleUrl}${id}`)
      return data
    }
  }

}

export const loader = 
(queryClient) => 
async({params}) => {
  const {id} = params

  await queryClient.ensureQueryData(getSingleQuery(id))
  return { id}

}


const Cocktail = () => {
 const {id} = useLoaderData()

 const {data} = useQuery(getSingleQuery(id))

 console.log(data)

 if(!data) {
  return <Navigate to='/' />
 }
 
 const singleItem = data.drinks[0];


 const {

  idDrink:getId,
  strAlcoholic:info, 
  strCategory:category, 
  strDrink:name, 
  strDrinkThumb : img, 
  strGlass:glass, 
  strInstructions: instruction
} = singleItem;





const validIncredients = Object.keys(singleItem).filter((key) => key.startsWith("strIngredient") && singleItem[key] !== null).map(item => singleItem[item]);



const getAllingredients = validIncredients.map((item, index) => {
 return <h4 key={index}>{item} {index < validIncredients.length - 1 ? ',' : ''} </h4>
})

  return (
    <Wrapper key={getId}>
      <div className="content">
      <img src={img} alt="single-image" />
      <div className="details">
        <p>
        <span className='name'>Name :</span>
        {name}
        </p>
        <p>
        <span className='category'>Category :</span>
        {category}
        </p>
        <p>
        <span className='info'>Info :</span>
        {info}
        </p>
        <p>
        <span className='glass'>Glass :</span>
        {glass}
        </p>
        <p>
        <span className='instructors'>Instruction :</span>
        {instruction}
        </p>

        <p className='ingredients'>
          <span>Ingredients : </span>
          {getAllingredients}
        </p>

        <button>
          <Link to={'/'}>
          Back to home
          </Link>
        </button>
      </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
