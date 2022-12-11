/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 14c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 3.9999c-1.654 0-3.00001-1.346-3.00001-3s1.34601-3 3.00001-3 3 1.346 3 3-1.346 3-3 3zm5-9.9999h-7.00003v-2c0-1.103.89703-2 2.00003-2s2 .897 2 2c0 .553.447 1 1 1s1-.447 1-1c0-2.206-1.794-4-4-4-2.20603 0-4.00003 1.794-4.00003 4v2h-1c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h10.00003c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 16c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-4.0001c-1.654 0-3.00003 1.346-3.00003 3s1.34603 3 3.00003 3 3-1.346 3-3-1.346-3-3-3zm6 7.0002c0 .552-.448 1-1 1h-10.00003c-.552 0-1-.448-1-1v-8c0-.552.448-1 1-1h10.00003c.552 0 1 .448 1 1zm-1-11.0001h-7v-2c0-1.103.897-2 2-2s2 .897 2 2c0 .553.447 1 1 1s1-.447 1-1c0-2.206-1.794-4-4-4s-4 1.794-4 4v2h-1c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))