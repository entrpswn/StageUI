/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m15 13h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-1.99997c-.55 0-1-.45-1-1s.45-1 1-1h1.99997v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1zm-3-11c-5.51397 0-9.99997 4.486-9.99997 10s4.486 10 9.99997 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m15 11h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-1.99997c-.55 0-1 .45-1 1s.45 1 1 1h1.99997v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-3 9.0001c-4.41095 0-7.99995-3.589-7.99995-8 0-4.41104 3.589-8.00003 7.99995-8.00003 4.411 0 8 3.58899 8 8.00003 0 4.411-3.589 8-8 8zm0-18.0001c-5.51397 0-9.99997 4.486-9.99997 10s4.486 10 9.99997 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z" fillRule="evenodd"/>,
    })
))