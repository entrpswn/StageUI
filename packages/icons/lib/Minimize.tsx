/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13 11.9999h-3.99998c-.55 0-1-.45-1-1s.45-.99997 1-.99997h3.99998c.55 0 1 .44997 1 .99997s-.45 1-1 1zm7.707 7.2931-3.395-3.396c1.053-1.354 1.688-3.051 1.688-4.897 0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8c1.846 0 3.543-.635 4.897-1.688l3.396 3.395c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m13 9.99993h-4.00003c-.55 0-1 .44997-1 .99997s.45 1 1 1h4.00003c.55 0 1-.45 1-1s-.45-.99997-1-.99997zm-8.00003 1.00017c0-3.30904 2.691-6.00003 6.00003-6.00003 3.309 0 6 2.69099 6 6.00003 0 3.309-2.691 6-6 6-3.30903 0-6.00003-2.691-6.00003-6zm15.70703 8.2929-3.395-3.396c1.053-1.354 1.688-3.051 1.688-4.897 0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8c1.846 0 3.543-.635 4.897-1.688l3.396 3.395c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414z" fillRule="evenodd"/>,
    })
))