/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m42.6668 34.667h-10.6666c-1.472 0-2.6667-1.192-2.6667-2.6667v-10.6666c0-1.4747 1.1947-2.6667 2.6667-2.6667s2.6666 1.192 2.6666 2.6667v8h8c1.4747 0 2.6667 1.192 2.6667 2.6666 0 1.4747-1.192 2.6667-2.6667 2.6667zm-10.6666-29.3335c-14.704 0-26.6667 11.9627-26.6667 26.6667s11.9627 26.6666 26.6667 26.6666 26.6666-11.9626 26.6666-26.6666-11.9626-26.6667-26.6666-26.6667z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m42.6667 29.3337h-8v-8c0-1.4747-1.1947-2.6667-2.6667-2.6667s-2.6666 1.192-2.6666 2.6667v10.6666c0 1.4747 1.1946 2.6667 2.6666 2.6667h10.6667c1.4747 0 2.6667-1.192 2.6667-2.6667 0-1.4746-1.192-2.6666-2.6667-2.6666zm-10.6666 24c-11.7627 0-21.3333-9.5707-21.3333-21.3334 0-11.7626 9.5706-21.3333 21.3333-21.3333 11.7626 0 21.3333 9.5707 21.3333 21.3333 0 11.7627-9.5707 21.3334-21.3333 21.3334zm-.0001-48.0002c-14.704 0-26.66663 11.9627-26.66663 26.6667s11.96263 26.6666 26.66663 26.6666 26.6667-11.9626 26.6667-26.6666-11.9627-26.6667-26.6667-26.6667z" fillRule="evenodd"/>,
    })
))