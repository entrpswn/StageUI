/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m40.0002 29.3335c-1.472 0-2.6667 1.1947-2.6667 2.6667s1.1947 2.6666 2.6667 2.6666 2.6666-1.1946 2.6666-2.6666-1.1946-2.6667-2.6666-2.6667zm-.0001 10.6665c-4.4106 0-8-3.5893-8-8s3.5894-8 8-8c4.4107 0 8 3.5893 8 8s-3.5893 8-8 8zm.0001-26.6665h-16c-10.2907 0-18.6667 8.376-18.6667 18.6667 0 10.2906 8.376 18.6666 18.6667 18.6666h16c10.2906 0 18.6666-8.376 18.6666-18.6666 0-10.2907-8.376-18.6667-18.6666-18.6667z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m40 34.6668c-1.472 0-2.6666-1.1946-2.6666-2.6666s1.1946-2.6667 2.6666-2.6667 2.6667 1.1947 2.6667 2.6667-1.1947 2.6666-2.6667 2.6666zm0-10.6668c-4.4107 0-8 3.5893-8 8s3.5893 8 8 8 8-3.5893 8-8-3.5893-8-8-8zm.0001 21.3337h-16c-7.352 0-13.3333-5.9814-13.3333-13.3334s5.9813-13.3333 13.3333-13.3333h16c7.352 0 13.3333 5.9813 13.3333 13.3333s-5.9813 13.3334-13.3333 13.3334zm-.0001-32.0002h-16c-10.2906 0-18.66663 8.376-18.66663 18.6667 0 10.2906 8.37603 18.6666 18.66663 18.6666h16c10.2907 0 18.6667-8.376 18.6667-18.6666 0-10.2907-8.376-18.6667-18.6667-18.6667z" fillRule="evenodd"/>,
    })
))