import { selectorFamily } from 'recoil'
import { AllQuestions } from './atoms';

export const FiveQuestions = selectorFamily({
    key: 'fiveQuestions',
    get: ({cardOffset, category}: {cardOffset: number, category: string}) => ({ get }) => {
        let questions: {id: string, Category: string, q: string, code: string, a: string}[] = []
        if(category === 'all') {
            questions = get(AllQuestions)
        }else {
            questions = get(AllQuestions).filter(q => q.Category === category)
        }

        return questions.slice(cardOffset, cardOffset + 5)
    }
})

export const CurrentCategory = selectorFamily({
    key: 'currentCategory',
    get: (start: number) => ({ get }) => {
        let category = get(AllQuestions)[start].Category
        return category
    }
})