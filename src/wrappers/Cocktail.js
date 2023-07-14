import { styled } from "styled-components";

const Wrapper = styled.div`
display : flex;
height : 100vh;

.content {
    display : flex;
    justify-content : space-between;
    align-items : center;
    gap : 4rem;
    height : 100%;


    img {
        width : 50%;
        height : auto;
        object-cover : cover;
        border-radius : 20px;
    }
}

.details {
    display : flex;
    flex-direction : column;
    gap : 1.5rem;
    width : 50%;
    align-items : start;

    .name {

    }

    .category {

    }

    .info {

    }

    .glass {

    }

    .instructors {

    }

    .ingredients {
        display: flex;
        gap: .5rem;
        align-items : center;
    }

    span {
        background-Color : #A8A196;
        padding : 05px;
        color : #000;
        border-radius : 5px;
        margin-right : 10px;
    }

   
    button {

        background-color : black;
        color : white;
        padding : 12px 25px;
        border : none;
        border-radius : 5px;
        cursor : pointer;
    }
}
`;

export default Wrapper