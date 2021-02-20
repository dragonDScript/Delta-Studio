import './StatusBar.css'

// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'

export default (props) => {
  const [shown, setShown] = useState(() => false)
  const [list, setList] = useState(() => [])
  return <div style={{zIndex: '10'}} className="status-bar">
      <section></section>
      <section>
          <div id="notifications" style={{ display: shown ? 'block' : 'none' }}>
            <a href="#" onClick={() => setShown(!shown)}>Close</a>
            <br />
            <ul>
            {
                list.map((val, index, array) =>
                <li onClick={val.onClick} key={index}>{index + 1}. {val.content}</li>)
            }
            </ul>
          </div>
          <a href="#" onClick={() => setShown(!shown)}>Notifications</a>
      </section>
  </div>
}
