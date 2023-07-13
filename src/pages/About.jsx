import React from 'react'
import { Outlet } from 'react-router-dom';
import Wrapper from '../wrappers/About';

const About = () => {
  return (
    <Wrapper>
        <h1>this is about page</h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima repellat tenetur nam quos dicta voluptatum, commodi cum iusto harum impedit tempora ex corporis reprehenderit eveniet ratione cumque libero explicabo ipsum nulla est dolorum magni. A ipsa id eveniet esse hic. Esse repellendus sapiente officiis, quia labore similique eligendi dignissimos vero voluptatibus! Aut, fugiat? Cum, excepturi. Soluta.
          
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate possimus, provident dolorem tempora officiis ipsa rem maxime similique neque, obcaecati incidunt inventore explicabo aspernatur.</p>

        <Outlet />
    </Wrapper>
  )
}

export default About
