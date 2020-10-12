import {selectorFamily} from 'recoil'
import { AllQuestions } from './atoms';

export const FiveQuestions = selectorFamily({
    key: 'fiveQuestions',
    get: (start: number) => ({get}) => {
        let questions = get(AllQuestions)
        return questions.slice(start, start + 5)
    }
})