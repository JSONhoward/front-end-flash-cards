import React from 'react'
import { FaEyeSlash, FaEye, FaArrowRight } from 'react-icons/fa'

import { AnswerText, FlashCard, RemoveCardButton, ShowAnswerButton, Loading } from './styles';

type Props = {
    question: string,
    answer: string,
    remove: boolean,
    handleRemove: () => void,
    handleShow: () => void
    rotation: number,
    show: boolean,
    loading: boolean
}

const Card: React.FC<Props> = ({ question, answer, rotation, handleRemove, handleShow, remove, show, loading }) => {
    return (
        <>
            <FlashCard done={remove} rotation={rotation}>
                {
                    loading ? <Loading rotation={rotation}>Loading...</Loading> : (
                        <>
                            <p>{question}</p>
                            <AnswerText show={show}>{answer}</AnswerText>
                            <RemoveCardButton onClick={handleRemove}>
                                <FaArrowRight size={'2rem'} />
                            </RemoveCardButton>
                            <ShowAnswerButton show={show} onClick={handleShow}>
                                {
                                    show ? <FaEye size={'2rem'} /> : <FaEyeSlash size={'2rem'} />
                                }
                            </ShowAnswerButton>
                        </>
                    )
                }
            </FlashCard>
        </>
    )
}

export default Card
