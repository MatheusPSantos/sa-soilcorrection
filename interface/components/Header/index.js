import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    top: 0;
    height: 80px;
    width: 100%;
    padding: 20px 10vw;
    background: #b5308b;
    color: white;
    font-size: 18px;
    justify-items:center;
    justify-content: space-between;

    svg {
        color: white;
        font-size: 30px;
        margin: 0 10px;

        &:hover {
            opacity: 0.7;
            cursor:pointer;
        }
    }
`;