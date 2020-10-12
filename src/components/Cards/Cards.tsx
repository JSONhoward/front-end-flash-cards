import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CardOffset } from '../../store/atoms';
import { FiveQuestions } from '../../store/selectors';

import Card from './Card/Card';
import { CardsContainer } from './styles';

const Cards = () => {
    const [cardOffset, setCardOffset] = useRecoilState(CardOffset)
    const cardsArray = useRecoilValue(FiveQuestions(cardOffset))
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

    const handleShowAnswer = () => {
        setShowAnswer(prev => !prev)
    }

    let cardStack = cardsArray.map((el, i) => {
        return (
            <Card
                key={el.id}
                loading={loading}
                handleRemove={handleRemoveCard}
                handleShow={handleShowAnswer}
                question={el.q}
                answer={el.a}
                remove={i === 0 ? removeCard : false}
                show={showAnswer}
                rotation={i}
            />
        )
    }).reverse()

    return (
        <CardsContainer>
            {cardStack}
        </CardsContainer>
    )
}

export default Cards
