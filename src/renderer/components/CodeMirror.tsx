// eslint-disable-next-line no-use-before-define
import React from 'react'

import CodeMirror from '@uiw/react-codemirror'

import 'codemirror/theme/monokai.css'

export default (props: {value: string, name: string, language: string}) => {
  return <CodeMirror value={props.value} options={{
    theme: 'monokai',
    language: props.language
  }} />
}
