/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m11.0028 12.076c-.0019-.0251-.0028-.0504-.0028-.076v-8c0-.552.447-1 1-1s1 .448 1 1v7.9999l2.4-1.7998c.442-.333 1.069-.242 1.4.2.332.442.242 1.069-.2 1.4l-4 3c-.177.133-.389.2-.6.2-.201 0-.402-.061-.575-.182l-4.00002-2.814c-.452-.318-.561-.942-.243-1.393.318-.452.941-.561 1.393-.243zm-5.00282 4.9239v1.0001h12.00002v-1.0001c0-.55.45-1 1-1s1 .45 1 1v2c0 .0688-.007.136-.0204.201-.0175.0849-.0459.166-.0836.2417-.164.3296-.5047.5574-.896.5574h-14.00002c-.55 0-1-.45-1-1v-.0001-2c0-.55.45-1 1-1s1 .45 1 1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m11.0028 12.076c-.0019-.0251-.0028-.0504-.0028-.076v-8c0-.552.447-1 1-1s1 .448 1 1v7.9999l2.4-1.7998c.442-.333 1.069-.242 1.4.2.332.442.242 1.069-.2 1.4l-4 3c-.177.133-.389.2-.6.2-.201 0-.402-.061-.575-.182l-4.00001-2.814c-.452-.318-.561-.942-.243-1.393.318-.452.941-.561 1.393-.243zm-5.0028 4.9239v1.0001h12v-1.0001c0-.55.45-1 1-1s1 .45 1 1v2c0 .0688-.007.136-.0204.201-.0175.0849-.0459.166-.0835.2417-.1641.3296-.5048.5574-.8961.5574h-14c-.55 0-1-.45-1-1v-.0001-2c0-.55.45-1 1-1s1 .45 1 1z" fillRule="evenodd"/>,
    })
))