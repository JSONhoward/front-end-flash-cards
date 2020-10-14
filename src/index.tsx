import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import Firebase, {FirebaseContext} from './Firebase';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <FirebaseContext.Provider value={Firebase}>
        <App />
      </FirebaseContext.Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
