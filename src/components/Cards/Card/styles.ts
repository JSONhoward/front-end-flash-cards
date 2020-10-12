import styled, {keyframes, css} from 'styled-components';

const cardToBack = keyframes`
from {
    transform: translate(-50%, -50%);
}
to {
    transform: translate(-400%, -50%) rotate(-90deg);
}
`

export const Loading = styled('div')<{rotation: number}>`
position: absolute;
top: 50%;
left: 50%;
transform: ${({rotation}) => `translate(-50%, -50%) rotate(${rotation}deg)`};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 25vw;
width: 50vw;
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
`

export const ShowAnswerButton = styled('button')<{show: boolean}>`
position: absolute;
bottom: 0;
right: 0;
display: grid;
place-items: center;
border: none;
margin: .5rem;
padding: .75rem;
border-radius: 50%;
background-color: whitesmoke;
cursor: pointer;

&::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: '${({show}) => show ? 'hide' : 'show'}';
}

&::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    content: 'answer'
}
`

export const RemoveCardButton = styled('button')`
position: absolute;
bottom: 0;
left: 0;
display: grid;
place-items: center;
height: 4rem;
width: 4rem;
border: none;
margin: .5rem;
border-radius: 50%;
background-color: whitesmoke;
cursor: pointer;

&::before {
position: absolute;
top: 0;
content: 'next';
font-size: 1rem;
}
`

export const FlashCard = styled('div')<{rotation: number, done: boolean}>`
position: absolute;
top: 50%;
left: 50%;
transform: ${({rotation}) => `translate(-50%, -50%) rotate(${rotation}deg)`};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 25vw;
width: 50vw;
padding: 4rem;
background-color: whitesmoke;
box-shadow: 2px 2px 10px rgba(0,0,0,.5);
animation: ${({done}) => done ? css`${cardToBack} 1s linear` : 'none'};
font-family: 'Permanent Marker', cursive;
font-size: 1.5rem;

p {
    text-align: center;
}
`

