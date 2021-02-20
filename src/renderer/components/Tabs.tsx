// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'

import '../styles/tabs.css'

import CodeMirror from './CodeMirror'
import Tab from './Tab'
import Explorer from './Explorer'

export default (props: any) => {
  const [tabs, setTabs] = useState([])
  const [active, setActive] = useState(null)
  const [fullpath, setFullpath] = useState(null)
  const [files, setFiles]: any = useState([])
  useEffect(() => api.onOpenFolder((fullpath) => {
    setFiles(['hola.tsx', 'b.tsx'])
    setFullpath(fullpath)
  }))
  return <div id="content">
    <Explorer files={files} onOpenFile={(name) => {
      setTabs([...tabs, fullpath + name])
      return null
    }}/>
    <div className="tabs">
    {
        tabs.map((val, index, arr) => {
          return <Tab onClick={() => setActive(val.uuid)} key={val.uuid} name={val.name} language={val.language} onClose={() => {
            const newArr = tabs
            delete newArr[index]
            setTabs(newArr)
          }} />
        })
    }
    </div>
    {
        tabs.map((val, index, arr) => {
          if (val.uuid !== active) {
            return null
          }
          return <CodeMirror key={val.uuid} name={val.name} value="" language={val.language} />
        })
    }
</div>
}
