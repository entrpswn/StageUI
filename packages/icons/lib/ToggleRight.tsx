/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m15 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 3.9999c-1.654 0-3-1.346-3-3s1.346-2.99997 3-2.99997 3 1.34597 3 2.99997-1.346 3-3 3zm0-9.9999h-5.99998c-3.859 0-7 3.141-7 7s3.141 7 7 7h5.99998c3.859 0 7-3.141 7-7s-3.141-7-7-7z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m15 13c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-4.00007c-1.654 0-3 1.34597-3 2.99997s1.346 3 3 3 3-1.346 3-3-1.346-2.99997-3-2.99997zm0 8.00017h-5.99998c-2.757 0-5-2.243-5-5 0-2.75704 2.243-5.00004 5-5.00004h5.99998c2.757 0 5 2.243 5 5.00004 0 2.757-2.243 5-5 5zm0-12.0001h-6c-3.859 0-7 3.141-7 7s3.141 7 7 7h6c3.859 0 7-3.141 7-7s-3.141-7-7-7z" fillRule="evenodd"/>,
    })
))