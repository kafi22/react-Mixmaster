import React from 'react'
import CocktailCard from './CocktailCard';
import Wrapper from '../wrappers/CocktailList';

const CocktailList = ({drinks}) => {


  if(!drinks) {
    return <h3>Something went wrong</h3>
  }

  const formatDrinks = drinks.map(item => {
    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;

    return {id : idDrink, name: strDrink, img : strDrinkThumb, info : strAlcoholic, glass : strGlass}
  })

 const getDrinksItems = formatDrinks.map(item => {
 
  return (
    <CocktailCard key={item.id} {...item} />
  )
 })

  return (
    <Wrapper>
      {getDrinksItems}
    </Wrapper>
  )
}

export default CocktailList