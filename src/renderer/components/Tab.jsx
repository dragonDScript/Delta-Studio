// eslint-disable-next-line no-use-before-define
import React from 'react'

export default (props) => {
  return <section onClick={props.onClick}>
    <p>{api.basename(props.name)}</p> <a href="#" className="cross" onClick={props.onClose}>x</a>
  </section>
}
