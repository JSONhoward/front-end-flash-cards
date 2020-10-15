import styled, {keyframes, css} from 'styled-components';

const animation = keyframes`
from {
    transform: translate(-50%, -50%);
}
to {
    transform: translate(-400%, -50%) rotate(-90deg);
}
`

export const Loading = styled('div')`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 30vw;
width: 50vw;
min-height: 168px;
min-width: 280px;
padding: 4rem;
background-color: whitesmoke;
box-shadow: 2px 2px 10px rgba(0,0,0,.5);
font-family: 'Permanent Marker', cursive;
font-size: 1.5rem;

p {
    text-align: center;
}
`

export const AnswerText = styled('p')<{show: boolean}>`
filter: ${({show}) => !show ? `blur(5px)` : 'none'};
font-size: 2.5vw;
font-style: italic;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

@media screen and (min-width: 600px) {
 font-size: 1.25rem;
}
`

export const FlashCard = styled('div')<{offset: number, done: boolean}>`
position: absolute;
top: 50%;
left: 50%;
transform: ${({offset}) => `translate(${-50 + offset}%, ${-50 + offset}%)`};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 30vw;
width: 50vw;
min-height: 168px;
min-width: 280px;
padding: .5rem;
background-color: whitesmoke;
box-shadow: 2px 2px 10px rgba(0,0,0,.5);
animation: ${({done}) => done ? css`${animation} 1s linear` : 'none'};
font-family: 'Permanent Marker', cursive;
font-size: 1.5rem;

p {
    text-align: center;
    font-size: 3vw;
    white-space: pre-wrap;
}

code {
    background-color: black;
    max-height: 50%;
    width: fit-content;
    min-width: 75%;
    color: white;
    font-family: monospace;
    font-size: .5rem;
    white-space: pre-wrap;
    overflow: auto;
}

@media screen and (min-width: 600px) {
    p {
        font-size: 1.5rem;
    }
    code {
        font-size: 1.25rem;
    }
}
`

