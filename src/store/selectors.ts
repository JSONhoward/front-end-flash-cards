import { selector, selectorFamily } from 'recoil'
import { AllQuestions } from './atoms'

export const FiveQuestions = selectorFamily({
    key: 'fiveQuestions',
    get: ({ cardOffset, category }: FiveQuestionsType) => ({ get }) => {
        if (category === 'all') {
            const questions = get(AllQuestions).slice(cardOffset, cardOffset + 5)
            return questions
        }
        const questions = get(AllQuestions).filter(q => q.Category === category).slice(cardOffset, cardOffset + 5)
        return questions

    }
})

export const TotalQuestions = selector({
    key: 'totalQuestions',
    get: ({get}) => get(AllQuestions).length
})