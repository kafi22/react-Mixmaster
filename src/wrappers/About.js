import { styled } from 'styled-components';

const Wrapper = styled.div`
padding : 20px 0;
display : flex;
flex-direction : column;
justify-content : space-between;
align-items : center;
gap : 2rem;

h1 {
    font-size : 3rem;
    line-height : 1rem;
    font-weight : 700;
    margin-bottom : 1.5rem;

}

p {
    font-size : 1rem;
    line-height : 1.85rem;
    font-weight : 400;
}
`

export default Wrapper