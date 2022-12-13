/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m50.6666 10.6665c-1.4667 0-2.6667 1.2-2.6667 2.6667v40c0 1.4666 1.2 2.6666 2.6667 2.6666 1.4666 0 2.6666-1.2 2.6666-2.6666v-40c0-1.4667-1.2-2.6667-2.6666-2.6667zm-18.6668 10.6665c-1.4667 0-2.6667 1.2-2.6667 2.6667v29.3333c0 1.4667 1.2 2.6667 2.6667 2.6667s2.6667-1.2 2.6667-2.6667v-29.3333c0-1.4667-1.2-2.6667-2.6667-2.6667zm-21.3333 13.3337c0-1.4667 1.2-2.6667 2.6667-2.6667 1.4666 0 2.6666 1.2 2.6666 2.6667v18.6666c0 1.4667-1.2 2.6667-2.6666 2.6667-1.4667 0-2.6667-1.2-2.6667-2.6667z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m50.6667 10.6665c-1.4667 0-2.6667 1.2-2.6667 2.6667v40c0 1.4666 1.2 2.6666 2.6667 2.6666 1.4666 0 2.6666-1.2 2.6666-2.6666v-40c0-1.4667-1.2-2.6667-2.6666-2.6667zm-18.6668 10.6665c-1.4666 0-2.6666 1.2-2.6666 2.6667v29.3333c0 1.4667 1.2 2.6667 2.6666 2.6667 1.4667 0 2.6667-1.2 2.6667-2.6667v-29.3333c0-1.4667-1.2-2.6667-2.6667-2.6667zm-21.3333 13.3337c0-1.4667 1.2-2.6667 2.6667-2.6667s2.6667 1.2 2.6667 2.6667v18.6666c0 1.4667-1.2 2.6667-2.6667 2.6667s-2.6667-1.2-2.6667-2.6667z" fillRule="evenodd"/>,
    })
))