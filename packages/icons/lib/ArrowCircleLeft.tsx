/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M10.1388 15.6904L7.27676 12.6904C7.23376 12.6454 7.21276 12.5894 7.17976 12.5394C7.14376 12.4854 7.10076 12.4374 7.07576 12.3774C7.02676 12.2564 6.99976 12.1284 6.99976 12.0004C6.99976 11.8694 7.02676 11.7394 7.07676 11.6174C7.12776 11.4954 7.20076 11.3844 7.29376 11.2924L10.2928 8.29343C10.6838 7.90243 11.3168 7.90243 11.7068 8.29343C12.0978 8.68343 12.0978 9.31643 11.7068 9.70743L10.4138 11.0004H15.9998C16.5528 11.0004 16.9998 11.4474 16.9998 12.0004C16.9998 12.5524 16.5528 13.0004 15.9998 13.0004H10.3368L11.5858 14.3094C11.9668 14.7094 11.9528 15.3414 11.5528 15.7234C11.1528 16.1054 10.5198 16.0894 10.1388 15.6904ZM21.9998 12.0004C21.9998 6.48543 17.5138 2.00043 11.9998 2.00043C6.48576 2.00043 1.99976 6.48543 1.99976 12.0004C1.99976 17.5144 6.48576 22.0004 11.9998 22.0004C17.5138 22.0004 21.9998 17.5144 21.9998 12.0004Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M16 11H10.336L11.586 9.69C11.967 9.291 11.952 8.658 11.553 8.276C11.153 7.896 10.521 7.91 10.139 8.31L7.276 11.31C7.238 11.35 7.221 11.4 7.19 11.445C7.149 11.504 7.103 11.558 7.076 11.626C7.039 11.717 7.027 11.812 7.019 11.909C7.016 11.94 7 11.968 7 12C7 12.002 7.001 12.003 7.001 12.005C7.002 12.135 7.027 12.264 7.078 12.386C7.128 12.507 7.202 12.616 7.293 12.708L10.293 15.707C10.488 15.902 10.744 16 11 16C11.256 16 11.512 15.902 11.707 15.707C12.098 15.316 12.098 14.684 11.707 14.293L10.414 13H16C16.552 13 17 12.552 17 12C17 11.448 16.552 11 16 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
    })
))