import React from 'react'
import {unmountComponentAtNode, render} from 'react-dom'

import App from './App'
import { RecoilWrapper } from './utils/Test.utils'

// eslint-disable-next-line no-unused-vars
const fetchCards = jest.fn((_firebase: any): Promise<FirebaseDocArray> => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((res, _) => {
        res(
            [
                {
                    id: '1',
                    Category: 'test category',
                    q: 'question 1',
                    code: 'some code',
                    a: 'answer'
                },
                {
                    id: '2',
                    Category: 'test category',
                    q: 'question 2',
                    a: 'answer'
                }
            ]
        )
    })
})

let container: HTMLDivElement | null = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container as HTMLDivElement)
    container?.remove()
    container = null
})

describe('App Tests', () => {
    it('Matches Snapshot', () => {
        render(<RecoilWrapper><App fetchCards={fetchCards} /></RecoilWrapper>, container)

        expect(container?.innerHTML).toMatchSnapshot()
    })

    it('Calls firebase api', () => {
        render(<RecoilWrapper><App fetchCards={fetchCards} /></RecoilWrapper>, container)

        expect(fetchCards).toHaveBeenCalledTimes(1)
    })
})