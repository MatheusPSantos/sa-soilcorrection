import styled from "styled-components";

export const ButtonSubmit = styled.input`
    border: 1px solid #0e90ed;
    color: #0e90ed;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 25px;
    background-color: white;

    &:hover {
        cursor: pointer;
        color: white;
        background: #0e90ed;
    }
`;

export const ButtonLink = styled.a`
    border: 1px solid gray;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 20px;
    background-color: white;
    color: gray;
    text-align: center;
    &:hover {
        cursor: pointer;
        border: 1px solid #0e90ed;
        color: #0e90ed
    }
`;