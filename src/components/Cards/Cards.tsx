import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { CardOffset } from '../../store/atoms'
import { FiveQuestions, TotalQuestions } from '../../store/selectors'
import Card from './Card/Card'
import { CardCategory, CardsContainer, NextCard, ShowAnswer, StyledCards, QuestionCount, CardOptions } from './styles'

const Cards = () => {
    const [cardOffset, setCardOffset] = useRecoilState(CardOffset)
    const [category, setCategory] = useState('all')
    const totalQuestions = useRecoilValue(TotalQuestions)
    const cardsArray = useRecoilValue(FiveQuestions({ cardOffset, category }))
    const [removeCard, setRemoveCard] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (cardsArray[0]?.id !== '0') setLoading(false)
    }, [cardsArray])

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

    const handleDropdown = (e: React.SyntheticEvent) => {
        setCategory((e.target as HTMLSelectElement).value)
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
                offset={i}
            />
        )
    }).reverse()

    return (
        <StyledCards>
            <CardsContainer>
                {cardStack}
            </CardsContainer>
            <QuestionCount data-testid='questionCount'>Question# {cardOffset + 1} of {totalQuestions}</QuestionCount>
            <CardOptions>
                <CardCategory>
                    <label htmlFor='category'>Category:</label>
                    {/*eslint-disable-next-line jsx-a11y/no-onchange */}
                    <select name='category' onChange={handleDropdown}>
                        <option value='all'>All</option>
                        <option value='General'>General</option>
                        <option value='HTML'>HTML</option>
                        <option value='CSS'>CSS</option>
                        <option value='Javascript'>Javascript</option>
                        <option value='Networking'>Networking</option>
                        <option value='Testing'>Testing</option>
                    </select>
                </CardCategory>
                <ShowAnswer data-testid='showAnswer' answer={showAnswer} onClick={() => setShowAnswer(true)}><p>Show Answer</p></ShowAnswer>
                <NextCard data-testid='nextCard' onClick={handleRemoveCard}>
                    Next Card
                </NextCard>
            </CardOptions>
        </StyledCards>
    )
}

export default Cards
