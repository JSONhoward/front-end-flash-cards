import { selectorFamily } from 'recoil'
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

export const TotalQuestions = selectorFamily({
    key: 'totalQuestions',
    get: (category: string) => ({get}) => {
        if (category === 'all') {
            const questions = get(AllQuestions).length
            return questions
        }
        const questions  = get(AllQuestions).filter(q => q.Category === category).length
        return questions
    }
})