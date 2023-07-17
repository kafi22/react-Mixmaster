import React from 'react';
import Wrapper from '../wrappers/CocktailCard';
import { Link } from 'react-router-dom';

const CocktailCard = ({id, img, name, info, glass}) => {

  return (
    <Wrapper key={id}>
      <img src={img} alt="image" />
      <div className="details">
        <h3>{name}</h3>
        <p>{glass}</p>
        <h1>{info}</h1>
        <Link to={`/cocktail/${id}`} className='btn'>
          <button className='info-btns'>Details</button>
        </Link>
      </div>
    </Wrapper>
  )
}

export default CocktailCard