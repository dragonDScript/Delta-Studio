import './tailwind.min.css'
import './styles/default.css'
import './styles/main.css'

import './styles/menu.css'
import './styles/tabs.css'

// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import StatusBar from './components/StatusBar'
import CodeMirror from './components/CodeMirror'
import Tab from './components/Tab'

const app = (props) => {
  const [tabs, setTabs] = useState([])
  useEffect(() => api.onNewFile(() => setTabs([...tabs, { name: 'Unnamed' }])))
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
    <div id="content">
        <div className="tabs">
            {
                tabs.map((val, index, arr) => {
                  return <Tab key={index} name={val.name} language="javascript" onClose={() => {
                    const newArr = tabs
                    delete newArr[index]
                    setTabs(newArr)
                  }} />
                })
            }
            <a href="#" className="plus-tab" onClick={() => setTabs([...tabs, { name: 'Unnamed' }]) }>+</a>
        </div>
    </div>
    <StatusBar />
</div>
}

ReactDOM.render(React.createElement(app), document.getElementById('root'))
