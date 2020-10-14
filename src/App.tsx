import React from 'react';
import { useSetRecoilState } from 'recoil';
import Home from './pages/Home';
import { AllQuestions } from './store/atoms';
import { mockQuestionArray } from './utils/mockData';
import { FirebaseContext } from './Firebase/index';

const App = () => {
  const firebase = React.useContext(FirebaseContext)
  const fetchAllQuestions = useSetRecoilState(AllQuestions)

  React.useEffect(() => {
    firebase
      ?.firestore()
      .collection('cards')
      .get()
      .then(data => {
        let docArray: { id: string, Category: string, code: string, q: string, a: string }[] = []
        data.forEach(doc => {
          docArray.push({
            id: doc.id,
            Category: doc.data().Category,
            code: doc.data().code || '',
            q: doc.data().q,
            a: doc.data().a
          })
        })
        return docArray
      })
      .then(array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      })
      .then(cards => fetchAllQuestions(cards))
    // fetchAllQuestions(mockQuestionArray)
  }, [])

  return (
    <Home />
  )
}

export default App;
