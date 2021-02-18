import './tailwind.min.css'
import './styles/default.css'

import './styles/menu.css'

// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'

const app = <div id="app">
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
</div>

ReactDOM.render(app, document.getElementById('root'))
