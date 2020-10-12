import React from 'react';
import { useSetRecoilState } from 'recoil';
import Home from './pages/Home';
import { AllQuestions } from './store/atoms';
import { mockQuestionArray } from './utils/mockData';

const App = () => {
  const fetchAllQuestions = useSetRecoilState(AllQuestions)

  React.useEffect(() => {
    fetchAllQuestions(mockQuestionArray)
  }, [])

  return (
      <Home />
  )
}

export default App;
