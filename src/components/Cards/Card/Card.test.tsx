import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer'
import 'jest-styled-components'

import { RecoilWrapper } from '../../../utils/Test.utils';
import Card from './Card'

const props = {
    question: 'test question',
    answer: 'test answer',
    remove: false,
    offset: 0,
    show: false,
    loading: false,
    code: 'test code'
}

afterEach(cleanup)

describe('Card Tests', () => {
    it('Matches Snapshot', () => {
        const component = create(<RecoilWrapper><Card {...props} /></RecoilWrapper>)

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Renders card correctly', () => {
        render(<RecoilWrapper><Card {...props} /></RecoilWrapper>)

        expect(screen.getByText(props.question).textContent).toBe(props.question)
        expect(screen.getByText(props.code).textContent).toBe(props.code)
        expect(screen.getByText(props.answer).textContent).toBe(props.answer)
    })

    it('Hides(blurs) answer', () => {
        render(<RecoilWrapper><Card {...props} /></RecoilWrapper>)

        expect(screen.getByText(props.answer)).toHaveStyleRule('filter', 'blur(5px)')
    })
})