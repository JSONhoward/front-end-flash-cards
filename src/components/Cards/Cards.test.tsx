import React from 'react'
import { create } from 'react-test-renderer'
import { fireEvent, cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { RecoilWrapper } from '../../utils/Test.utils'
import Cards from './Cards'

afterEach(cleanup)

describe('Cards Tests', () => {
    it('Matches Snapshot', () => {
        const component = create(<RecoilWrapper><Cards /></RecoilWrapper>)

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Shows answer style changes upon clicking "Show Answer"', () => {
        render(<RecoilWrapper><Cards /></RecoilWrapper>)

        const showAnswerButton = screen.getByTestId('showAnswer')

        expect(showAnswerButton).not.toHaveStyleRule('text-decoration', 'line-through')
        expect(showAnswerButton).toHaveStyleRule('color', 'whitesmoke')
        fireEvent.click(showAnswerButton)
        expect(showAnswerButton).toHaveStyleRule('text-decoration', 'line-through')

    })

    it('Increments Question Number', async () => {
        render(<RecoilWrapper><Cards /></RecoilWrapper>)

        console.log(screen.getByTestId('questionCount').textContent)
    })
})