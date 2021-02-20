// eslint-disable-next-line no-use-before-define
import React from 'react'

import './Explorer.css'

export default (props) => {
  return <div className="explorer">
      {
          props.files.map((val, index, arr) => {
            return <a href="#" onClick={() => props.onOpenFile(val)}>{val}</a>
          })
      }
    </div>
}
