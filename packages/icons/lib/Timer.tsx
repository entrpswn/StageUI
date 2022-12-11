/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m15 14.0001h-3c-.552 0-1-.447-1-1v-3c0-.55304.448-1.00004 1-1.00004s1 .447 1 1.00004v2h2c.552 0 1 .447 1 1s-.448 1-1 1m-2.012-9.9421c.002-.021.012-.037.012-.058v-1h1c.552 0 1-.447 1-1s-.448-1-1-1h-4c-.552 0-1 .447-1 1s.448 1 1 1h1v1c0 .021.01.037.012.058-4.499.494-8.012 4.314-8.012 8.942 0 4.963 4.038 9 9 9s9-4.037 9-9c0-4.628-3.513-8.448-8.012-8.942" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m15 12.0001h-2v-2c0-.55304-.448-1.00004-1-1.00004s-1 .447-1 1.00004v3c0 .553.448 1 1 1h3c.552 0 1-.447 1-1s-.448-1-1-1zm-3 7.7499c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75m.988-15.692c.002-.021.012-.037.012-.058v-1h1c.552 0 1-.447 1-1s-.448-1-1-1h-4c-.552 0-1 .447-1 1s.448 1 1 1h1v1c0 .021.01.037.012.058-4.499.494-8.012 4.314-8.012 8.942 0 4.963 4.038 9 9 9s9-4.037 9-9c0-4.628-3.513-8.448-8.012-8.942" fillRule="evenodd"/>,
    })
))