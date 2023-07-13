import { styled } from "styled-components";

const Wrapper = styled.div`

width: 100%;
margin: 0 auto;
padding: 3rem 5rem;
text-align: center;
line-height : 2rem;
min-height : 100vh;

img {
    min-height : 60vh;
    width: 50%;
    margin: 0 auto;
    object-fit: cover;
    display: block;
}

h3 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.8rem;
    margin: 1.8rem 0;
}

h1 {
    font-size: 2rem;
    color : red;
    line-height : 1.6rem;
    margin : 20px 0;
}
 
a{
    font-size: 1rem;
    color : red;
    line-height : 1.8rem;
    text-decoration : underline;

}
`;

export default Wrapper;