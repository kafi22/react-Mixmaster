import { styled } from "styled-components";

const Wrapper = styled.div`

display : grid;
place-content : center;
align-items : center;
height : 100%;
margin : 30px 0;

Form {
    max-width : 600px;
    height : 50px;
    display : flex;
    align-items : center;
    gap : 2rem;

    input {
        height : 100%;
        width : 100%;
        background-color : #FAF3F0;
        padding : 5px;
        
    }

    .search-btn {
       
        display : flex;
        text-align : center;
        border-radius : 5px;
        background-color : black;
        color : white;
        height : 40px;
        width : 140px;
        padding : 5px;
        display : flex;
        align-items : center;
    }
}

`;

export default Wrapper