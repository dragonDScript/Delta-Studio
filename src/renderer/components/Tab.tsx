// eslint-disable-next-line no-use-before-define
import React from 'react'

export default (props: {name: string, language: string, onClose: any}) => {
  return <section>
    <p>{props.name}</p> <a href="#" className="cross" onClick={props.onClose}>x</a>
  </section>
}
