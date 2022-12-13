/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m32.0002 10.667c-11.7627 0-21.3333 9.5707-21.3333 21.3333 0 11.7627 9.5706 21.3334 21.3333 21.3334s21.3333-9.5707 21.3333-21.3334c0-11.7626-9.5706-21.3333-21.3333-21.3333zm0 47.9998c-14.704 0-26.6667-11.9626-26.6667-26.6666s11.9627-26.6667 26.6667-26.6667 26.6666 11.9627 26.6666 26.6667-11.9626 26.6666-26.6666 26.6666z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m32.0001 10.667c-11.7627 0-21.3333 9.5707-21.3333 21.3333 0 11.7627 9.5706 21.3334 21.3333 21.3334 11.7626 0 21.3333-9.5707 21.3333-21.3334 0-11.7626-9.5707-21.3333-21.3333-21.3333zm-.0001 47.9998c-14.704 0-26.66663-11.9626-26.66663-26.6666s11.96263-26.6667 26.66663-26.6667 26.6667 11.9627 26.6667 26.6667-11.9627 26.6666-26.6667 26.6666z" fillRule="evenodd"/>,
    })
))