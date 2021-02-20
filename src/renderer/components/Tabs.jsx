// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import '../styles/tabs.css'

import CodeMirror from './CodeMirror'
import Tab from './Tab'
import Explorer from './Explorer'

export default (props) => {
  const [tabs, setTabs] = useState([])
  const [active, setActive] = useState(null)
  const [fullpath, setFullpath] = useState(null)
  const [files, setFiles] = useState([])
  useEffect(() => api.onOpenFolder((evt, fullpath, files) => {
    setFiles(files)
    setFullpath(fullpath)
  }))
  return <div id="content">
    <Explorer files={files} onOpenFile={(file) => {
      const uuid = api.generateUUID()
      api.readFile(`${fullpath}/${file}`, (err, data) => {
        if (err) throw err
        setTabs([...tabs, { name: `${fullpath}/${file}`, uuid, value: data.toString() }])
      })
    }}/>
    <div>
    <div className="tabs">
    {
        tabs.map((val, index, arr) => {
          return <Tab onClick={() => setActive(val.uuid)} key={index} name={val.name} language={val.language} onClose={() => {
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
          return <CodeMirror key={val.uuid} name={val.name} value={val.value} language={val.language} />
        })
    }
    </div>
</div>
}
