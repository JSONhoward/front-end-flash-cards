import React from 'react'

import { AnswerText, FlashCard, Loading } from './styles';

type Props = {
    question: string,
    answer: string,
    remove: boolean,
    rotation: number,
    show: boolean,
    loading: boolean,
    code?: string
}

const Card: React.FC<Props> = ({ question, answer, rotation, remove, show, loading, code }) => {
    return (
        <FlashCard done={remove} rotation={rotation}>
            {
                loading ? <Loading rotation={rotation}>Loading...</Loading> : (
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
