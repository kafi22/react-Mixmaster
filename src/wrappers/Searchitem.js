import { styled } from "styled-components";

const Wrapper = styled.div`

display : grid;
place-content : center;
align-items : center;
height : 100%;

Form {
    max-width : 600px;
    height : 50px;

    input {
        height : 100%;
        width : 100%;
    }

    .search-btn {
        width : 160px;
        display : flex;
        text-align : center;
        border-radius : 5px;
        background-color : black;
        color : white;
    }
}

`;

export default Wrapper