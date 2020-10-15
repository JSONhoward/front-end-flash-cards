import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import Firebase, {FirebaseContext} from './Firebase';
import { fetchCards } from './Firebase/fetchCards';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <FirebaseContext.Provider value={Firebase}>
        <App fetchCards={fetchCards} />
      </FirebaseContext.Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
