import React from 'react'

import { AnswerText, FlashCard, Loading } from './styles';

type Props = {
    question: string,
    answer: string,
    remove: boolean,
    offset: number,
    show: boolean,
    loading: boolean,
    code?: string
}

const Card: React.FC<Props> = ({ question, answer, offset, remove, show, loading, code }) => {
    return (
        <FlashCard done={remove} offset={offset}>
            {
                loading ? <Loading>Loading...</Loading> : (
                    <>
                        <p>{question}</p>
                        <code>{code?.replace(/\\n/g, '\n')}</code>
                        <AnswerText show={show}>{answer.replace(/\\n/g, '\n')}</AnswerText>
                    </>
                )
            }
        </FlashCard>
    )
}

export default Card
