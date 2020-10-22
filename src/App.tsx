import React from 'react'
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

    React.useEffect(() => {
        fetchCards()
            .then(cards => {
                setAllQuestions(cards)
            })
    // setAllQuestions(mockQuestionArray)
    // eslint-disable-next-line
  }, [])

    return (
        <Home />
    )
}

export default App
