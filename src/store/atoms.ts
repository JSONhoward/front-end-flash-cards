import {atom} from 'recoil'

export const AllQuestions = atom({
    key: 'allQuestions',
    default: [{id: 0, q: '', a: ''}]
})

export const CardOffset = atom({
    key: 'cardOffset',
    default: 0
})