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
            const newArr = arr
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
          setTabs[index] = val
          console.log({ val })
          api.onSaveFile(() => {
            api.writeFileSecure(val.name, val.value.text.join('\n'), (err) => {
              if (err) throw err
            })
          })
          return <CodeMirror key={val.uuid} name={val.name} value={val.value} onChange={(instance, change) => { val.value = change }} language={val.language} />
        })
    }
    </div>
</div>
}
