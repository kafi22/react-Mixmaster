import React from 'react';
import Wrapper from '../wrappers/Error';
import { Link, useRouteError } from 'react-router-dom';
import error_img from '../assets/not-found.svg'

const Error = () => {
 const error =  useRouteError()

 if(error.status === 404) {
  return <Wrapper>
    <img src={error_img} alt="error-image" />
    <h3>Ohh!!</h3>
    <h1>your page is not found</h1>
    <Link to={'/'}>Back to home page</Link>
  </Wrapper>
 }

 return (
  <Wrapper>
    <div>
      <h1>something went wrong</h1>
    </div>
  </Wrapper>
 )
  
}

export default Error