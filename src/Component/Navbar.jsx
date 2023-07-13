import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Wrapper from '../wrappers/Navbar';


const Navbar = () => {
  return (
    <Wrapper>

    <div className="nav-center">

      <Link to={'/'} className='nav-logo'>
      <h3 className=' text-[44px] font-semibold text-[#10B981] '>MixMaster</h3>
      </Link>

      <div className="nav-links">

        <NavLink to={'/'} className="nav-link" >
          Home
        </NavLink>

        <NavLink to={'/about'} className="nav-link" >
          About
        </NavLink>

        <NavLink to={'/Newsletter'} className="nav-link">
          Newsletter
        </NavLink>

      </div>

    </div>

    </Wrapper>
  )

}

export default Navbar