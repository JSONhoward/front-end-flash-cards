import styled from 'styled-components';

export const StyledCards = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
overflow: hidden;
`

export const CardsContainer = styled('div')`
position: relative;
height: 40vw;
width: 50vw;
min-height: 250px;
min-width: 280px;
`

export const CardCategory = styled('div')`
position: absolute;
left: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
height: 3rem;
/* width: 10rem; */
font-size: 3vw;
color: whitesmoke;
text-shadow: 2px 2px 10px rgba(0,0,0,.5);


select {
    display: block;
    height: 75%;
    text-align: center;
    appearance: none;
    margin: 0 5px;
    font-size: 1rem;
    padding: .6em 1.4em .5em .8em;
    box-shadow: 2px 2px 10px rgba(0,0,0,.5);
}

select:hover {
    border: 2px solid #888;
    cursor:pointer;
}

select option {
    text-align: center;
}

@media screen and (min-width: 600px) {
    font-size: 1.5rem
}
`

export const NextCard = styled('div')`
position: absolute;
bottom: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
height: 3rem;
font-size: 3vw;
color: whitesmoke;
text-shadow: 2px 2px 10px rgba(0,0,0,.5);
cursor: pointer;

@media screen and (min-width: 600px) {
    font-size: 1.5rem
}
`

export const ShowAnswer = styled('div')<{answer: boolean}>`
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
display: flex;
align-items: center;
height: 3rem;
color: ${({answer}) => answer ? 'grey' : 'whitesmoke'};
font-size: 3vw;
cursor: ${({answer}) => answer ? 'not-allowed' : 'pointer'};
text-shadow: 2px 2px 10px rgba(0,0,0,.5);
text-decoration: ${({answer}) => answer ? 'line-through' : 'none'};
font-style: ${({answer}) => answer ? 'italic' : 'none'};
transition: color .25s ease-in-out;

&:hover {
    color: ${({answer}) => answer ? 'grey' : 'green'};
}

@media screen and (min-width: 600px) {
    font-size: 1.5rem
}
`