import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CardOffset } from '../../store/atoms';
import { FiveQuestions, CurrentCategory } from '../../store/selectors';

import Card from './Card/Card';
import { CardCategory, CardsContainer, NextCard, ShowAnswer, StyledCards } from './styles';

const Cards = () => {
    const [cardOffset, setCardOffset] = useRecoilState(CardOffset)
    const [category, setCategory] = useState('Coding')
    const cardsArray = useRecoilValue(FiveQuestions({cardOffset, category}))
    const [removeCard, setRemoveCard] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [loading, setLoading] = useState(false)
    const currentCategory= useRecoilValue(CurrentCategory(cardOffset))

    const handleRemoveCard = () => {
        setRemoveCard(true)
        setShowAnswer(false)
        setLoading(true)
        setTimeout(async () => {
            setCardOffset(prev => prev + 1)
            setRemoveCard(false)
            setLoading(false)
        }, 1000)
    }

    const handleShowAnswer = () => {
        setShowAnswer(true)
    }

    let cardStack = cardsArray?.map((el, i) => {
        return (
            <Card
                key={el.id}
                loading={loading}
                question={el.q}
                code={el.code}
                answer={el.a}
                remove={i === 0 ? removeCard : false}
                show={showAnswer}
                rotation={i}
            />
        )
    }).reverse()

    return (
        <StyledCards>
            <CardsContainer>
                {cardStack}
                <CardCategory>Category: {currentCategory}</CardCategory>
                <ShowAnswer answer={showAnswer} onClick={handleShowAnswer}><p>Show Answer</p></ShowAnswer>
                <NextCard onClick={handleRemoveCard}>
                Next
                </NextCard>
            </CardsContainer>
        </StyledCards>
    )
}

export default Cards
