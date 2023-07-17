import { styled } from "styled-components";


const Wrapper = styled.div`
height : 100vh;
display : flex;
width : 100%;
justify-content : center;
align-items : center;
flex-direction : column;
gap : 2rem;

h1 {
    font-size : 2.6rem;
    line-height : 1.6rem;
    font-weight : bold;
    color : #3F2E3E;
    text-transform : capitalize;
    margin : 30px 0;
}

.form {
    width : 430px;
    margin : 0 auto;
    padding : 20px 30px;
    display : flex;
    flex-direction : column;
    gap : 1rem;
    background : #F5F5F5;

    .form-group {
        display : flex;
        item-align : center;
        flex-direction : column;
    }

    input {
        padding : 10px;
        font-size : 16px;
        width : 100%;
    }

    .submit-btn {
        background : red;
        padding : 10px 24px;
        border-radius : 10px;
        color : white;
        font-weight : 500;
        margin-top : 20px;
    }
}

`;

export default Wrapper