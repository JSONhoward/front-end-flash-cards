import React from 'react'
import {create} from 'react-test-renderer'
import {render, screen, cleanup, fireEvent} from '@testing-library/react'

import App from './App'
import { RecoilWrapper } from './utils/Test.utils'

const fetchCards = jest.fn((firebase: any): Promise<FirebaseDocArray> => {
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

afterEach(cleanup)

describe('App Tests', () => {
    it('Matches Snapshot', () => {
        const component = create(<RecoilWrapper><App fetchCards={fetchCards} /></RecoilWrapper>)

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Calls firebase api', () => {
        render(<RecoilWrapper><App fetchCards={fetchCards} /></RecoilWrapper>)

        expect(fetchCards).toHaveBeenCalledTimes(1)
    })

    it('Updates atom to fetched firebase documents', async () => {
        render(<RecoilWrapper><App fetchCards={fetchCards} /></RecoilWrapper>)

        expect(await screen.findByText('question 1'))
        fireEvent.click(screen.getByText('Next Card'))
        expect(await screen.findByText('question 2'))
    })
})