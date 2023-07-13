import React from 'react'
import { styled } from 'styled-components'


const Wrapper = styled.nav`
background : white;
box-shadow : 1px 2px 3px 0px rgba(0, 0, 0, 0.3);

.nav-center {
    width : 90%;
    max-width : 100%;
    margin : 0 auto;
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : start;
}

.logo {
    font-size : clamp (1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0 ;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }


`

export default Wrapper