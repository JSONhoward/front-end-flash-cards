import React from 'react';
import { useSetRecoilState } from 'recoil';
import Home from './pages/Home';
import { AllQuestions } from './store/atoms';
import { mockQuestionArray } from './utils/mockData';
import { FirebaseContext } from './Firebase/index';

type Props = {
  fetchCards: (firebase: firebase.app.App) => Promise<FirebaseDocArray>
}

const App: React.FC<Props> = ({fetchCards}) => {
  const firebase = React.useContext<firebase.app.App | null>(FirebaseContext)
  const fetchAllQuestions = useSetRecoilState(AllQuestions)

  React.useEffect(() => {
    fetchCards(firebase as firebase.app.App)
      .then(cards => fetchAllQuestions(cards))
    // fetchAllQuestions(mockQuestionArray)
    // eslint-disable-next-line
  }, [])

  return (
    <Home />
  )
}

export default App;
