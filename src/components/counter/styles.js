import styled from "styled-components"

export const CounterContainer = styled.div`

    width: 60%;
    aspect-ratio: 4/2;
    backdrop-filter: blur(30px);
    padding: 15px;
    border-radius: 5px;
    font-family: sans-serif;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    h1 {
        margin-bottom: 10px;
        color: white;
        font-size: 12vw;
    }

    button {
        :hover{
            transform: scale(1.04);

        }
        :active {
            transform: scale(.96);
        }
        font-size: 3vw;
        width: 15%;
        color: #444;
        aspect-ratio: 1;
        transition: transform .2s;
        border: none;
        padding: 5px;
        border-radius: 50%;
        margin: 0 1.5rem;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
    
`