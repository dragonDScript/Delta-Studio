// eslint-disable-next-line no-use-before-define
import React from 'react'

export default (props: {name: string, language: string, onClose: any, onClick: any}) => {
  return <section onClick={props.onClick}>
    <p>{props.name}</p> <a href="#" className="cross" onClick={props.onClose}>x</a>
  </section>
}
