/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m53.3333 10.6665h-42.6666c-1.4747 0-2.6667 1.192-2.6667 2.6667v8c0 1.4746 1.192 2.6666 2.6667 2.6666 1.4746 0 2.6666-1.192 2.6666-2.6666v-5.3334h16v34.6667h-5.3333c-1.4747 0-2.6667 1.192-2.6667 2.6667 0 1.4746 1.192 2.6666 2.6667 2.6666h16c1.4747 0 2.6667-1.192 2.6667-2.6666 0-1.4747-1.192-2.6667-2.6667-2.6667h-5.3333v-34.6667h16v5.3334c0 1.4746 1.192 2.6666 2.6666 2.6666 1.4747 0 2.6667-1.192 2.6667-2.6666v-8c0-1.4747-1.192-2.6667-2.6667-2.6667z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m53.3333 10.6665h-42.6666c-1.4747 0-2.6667 1.192-2.6667 2.6667v8c0 1.4746 1.192 2.6666 2.6667 2.6666 1.4746 0 2.6666-1.192 2.6666-2.6666v-5.3334h16v34.6667h-5.3333c-1.4747 0-2.6667 1.192-2.6667 2.6667 0 1.4746 1.192 2.6666 2.6667 2.6666h16c1.4747 0 2.6667-1.192 2.6667-2.6666 0-1.4747-1.192-2.6667-2.6667-2.6667h-5.3333v-34.6667h16v5.3334c0 1.4746 1.192 2.6666 2.6666 2.6666 1.4747 0 2.6667-1.192 2.6667-2.6666v-8c0-1.4747-1.192-2.6667-2.6667-2.6667z" fillRule="evenodd"/>,
    })
))