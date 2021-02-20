// eslint-disable-next-line no-use-before-define
import React from 'react'

import CodeMirror from '@uiw/react-codemirror'

import 'codemirror/theme/monokai.css'

export default (props) => {
  return <CodeMirror onChange={props.onChange} value={props.value} options={{
    theme: 'monokai',
    language: props.language
  }} />
}
