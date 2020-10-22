import React, {useEffect} from 'react'
import { useSetRecoilState } from 'recoil'

import Home from './pages/Home'
import { AllQuestions } from './store/atoms'
// eslint-disable-next-line
import { mockQuestionArray } from './utils/mockData'

type Props = {
    fetchCards: () => Promise<FirebaseDocArray>
}

// eslint-disable-next-line react/prop-types
const App: React.FC<Props> = ({fetchCards}) => {
    const setAllQuestions = useSetRecoilState(AllQuestions)

    useEffect(() => {
        fetchCards().then(cards => setAllQuestions(cards))
        // setAllQuestions(mockQuestionArray)
    },[fetchCards, setAllQuestions])

    return (
        <Home />
    )
}

export default App
