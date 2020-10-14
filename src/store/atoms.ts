import {atom} from 'recoil'

export const AllQuestions = atom({
    key: 'allQuestions',
    default: [{id: '0', Category: '', q: '', code: '', a: ''}]
})

export const CardOffset = atom({
    key: 'cardOffset',
    default: 0
})