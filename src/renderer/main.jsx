import './tailwind.min.css'
import './styles/default.css'
import './styles/main.css'

import './styles/menu.css'

// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'

import StatusBar from './components/StatusBar'
import Tabs from './components/Tabs'

const app = (props) => {
  return <div id="app">
    <div id="menu">
        <section className="img">
            <img draggable="false" src="../build/icon.svg" onClick={() => api.triggerContextMenu()} />
        </section>
        <h3 className="centre">Delta Studio</h3>
        <section className="buttons">
            <button className="button" onClick={() => api.minimizeWindow()}>_</button>
            <button className="button" onClick={() => api.maximizeWindow()}>□</button>
            <button className="button cross" onClick={() => window.close()}>X</button>
        </section>
    </div>
    <Tabs />
    <StatusBar />
</div>
}

ReactDOM.render(React.createElement(app), document.getElementById('root'))
