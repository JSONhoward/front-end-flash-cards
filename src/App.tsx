import React from 'react';
import { useSetRecoilState } from 'recoil';
import Home from './pages/Home';
import { AllQuestions } from './store/atoms';
import { mockQuestionArray } from './utils/mockData';
import { FirebaseContext } from './Firebase/index';

type Props = {
  fetchCards: (firebase: any) => Promise<FirebaseDocArray>
}

const App: React.FC<Props> = ({fetchCards}) => {
  const firebase = React.useContext(FirebaseContext)
  const fetchAllQuestions = useSetRecoilState(AllQuestions)

  React.useEffect(() => {
    fetchCards(firebase)
      .then(cards => fetchAllQuestions(cards))
    // fetchAllQuestions(mockQuestionArray)
  }, [])

  return (
    <Home />
  )
}

export default App;
