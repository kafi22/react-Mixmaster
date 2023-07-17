import { styled } from "styled-components";

const Wrapper = styled.div`

display : flex;
justify-content : center;
flex-direction : column;
align-items : center;
gap : 1em;
background : #f3f3f3;
padding : 0.5em;
border-radius : 10px;

img {
    height: auto;
    width: 100%;
    object-cover: cover;
    border-radius : 10px;
}

.details {
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    gap : 10px;


    h3 {

    }

    h1 {

    }

    p {

    }

    .info-btns {
        padding : 10px 26px;
        background : gray;
        color : white;
        border-radius : 5px;
        cursor : pointer;
        margin : 10px 0;
    }
}

`;

export default Wrapper;