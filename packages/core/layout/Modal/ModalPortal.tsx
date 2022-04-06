import React from 'react'

import ReactDOM from 'react-dom'

export default (props: { children: React.ReactNode }) =>
  ReactDOM.createPortal(
    props.children,
    document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364') || document.body,
  )
