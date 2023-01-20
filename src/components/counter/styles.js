import styled from "styled-components"

export const CounterContainer = styled.div`
    background-color: #ffc107;
    padding: 15px;
    border-radius: 5px;
    font-family: sans-serif;
    box-shadow: 0 4px 12px #333;
    h1 {
        margin-bottom: 10px;
    }

    button {
        :hover{
            transform: scale(1.04);

        }
        :active {
            transform: scale(.96);
        }
        transition: transform .2s;
        border: none;
        padding: 5px 8px;
        border-radius: 7px;
        margin: 0 .5rem;
        box-shadow: 0 3px 6px #333;
    }
    
`