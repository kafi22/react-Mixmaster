import React from 'react';
import Wrapper from '../wrappers/Cocktail';
import axios from 'axios';
import { useLoaderData, Link, Navigate } from 'react-router-dom';

const singleUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

export const Loader = async(data) => {

  const id = data.params.id
  const response = await axios.get(`${singleUrl}${id}`)
  return {response, id}

}


const Cocktail = () => {
 const {id, response} = useLoaderData()

 if(!response.data) {
  return <Navigate to='/' />
 }
 
 const singleItem = response.data.drinks[0];


 const {
  dateModified:data, 
  idDrink:getId,
  strAlcoholic:info, 
  strCategory:category, 
  strDrink:name, 
  strDrinkThumb : img, 
  strGlass:glass, 
  strInstructions: instruction
} = singleItem;



console.log(singleItem)

const validIncredients = Object.keys(singleItem).filter((key) => key.startsWith("strIngredient") && singleItem[key] !== null).map(item => singleItem[item]);

console.log(validIncredients)

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
