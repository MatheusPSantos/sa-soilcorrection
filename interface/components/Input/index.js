import styled from "styled-components";

export const Input = styled.input`
    position: relative;
    width: 90%;
    height: 30px;
    margin: 0px 5px;
    &:hover {
        border: blue 1px solid;
    }
`;

export const InputField = styled.span`
    margin: 5px 2px;
    display: flex;
    flex-direction: column;
`;