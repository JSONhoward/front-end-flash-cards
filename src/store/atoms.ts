import {atom} from 'recoil'

export const AllQuestions = atom<FirebaseDocArray>({
    key: 'allQuestions',
    default: [{id: '0', Category: 'none', q: 'question', code: 'code', a: 'answer'}]
})

export const CardOffset = atom<number>({
    key: 'cardOffset',
    default: 0
})