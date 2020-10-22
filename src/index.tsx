import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { RecoilRoot } from 'recoil'
import { fetchCards } from './utils/fetchCards'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App fetchCards={fetchCards}/>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
