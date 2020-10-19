import styled from 'styled-components';

export const StyledCards = styled('div')`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
`

export const CardOptions = styled('div')`
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
height: 5rem;
width: 50vw;
min-width: 280px;
`

export const QuestionCount = styled('p')`
color: whitesmoke;
`

export const CardsContainer = styled('div')`
position: relative;
height: 40vw;
width: 50vw;
min-height: 250px;
min-width: 280px;
`

export const CardCategory = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 2rem;
font-size: 1.5vw;
color: whitesmoke;
text-shadow: 2px 2px 10px rgba(0,0,0,.5);

select {
    display: block;
    height: 2rem;
    width: 6rem;
    text-align: center;
    margin: 0 5px;
    font-size: 1.5rem;
    padding-left: 5px;
    box-shadow: 2px 2px 10px rgba(0,0,0,.5);
    background-color: whitesmoke;
}

select:hover {
    border: 2px solid #888;
    cursor:pointer;
}

@media screen and (max-width: 600px) {
    font-size: .75rem;

    select {
        height: 1.5rem;
        font-size: 1rem;
        padding: 2px;
    }
}
`

export const NextCard = styled('div')`
display: flex;
align-items: center;
justify-content: flex-end;
font-size: 3vw;
color: whitesmoke;
text-shadow: 2px 2px 10px rgba(0,0,0,.5);
cursor: pointer;

@media screen and (min-width: 600px) {
    font-size: 1.5rem
}
`

export const ShowAnswer = styled('div')<{answer: boolean}>`
display: flex;
align-items: center;
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