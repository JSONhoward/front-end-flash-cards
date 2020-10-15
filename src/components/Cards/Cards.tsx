import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { CardOffset } from '../../store/atoms';
import { FiveQuestions } from '../../store/selectors';
import Card from './Card/Card';
import { CardCategory, CardsContainer, NextCard, ShowAnswer, StyledCards } from './styles';

const Cards = () => {
    const [cardOffset, setCardOffset] = useRecoilState(CardOffset)
    const [category, setCategory] = useState('all')
    const cardsArray = useRecoilValue(FiveQuestions({cardOffset, category}))
    const [removeCard, setRemoveCard] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [loading, setLoading] = useState(false)

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

    let cardStack = cardsArray?.map((el, i) => {
        return (
            <Card
                data-testid={`cardTest${i}`}
                key={el.id}
                loading={loading}
                question={el.q}
                code={el.code}
                answer={el.a}
                remove={i === 0 ? removeCard : false}
                show={showAnswer}
                offset={i}
            />
        )
    }).reverse()

    return (
        <StyledCards>
            <CardsContainer>
                {cardStack}
                <CardCategory>Category: {cardsArray[0]?.Category || ''}</CardCategory>
                <ShowAnswer data-testid='showAnswer' answer={showAnswer} onClick={() => setShowAnswer(true)}><p>Show Answer</p></ShowAnswer>
                <NextCard data-testid='nextCard' onClick={handleRemoveCard}>
                Next Card
                </NextCard>
            </CardsContainer>
        </StyledCards>
    )
}

export default Cards
