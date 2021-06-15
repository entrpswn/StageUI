/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M17.9999 5H12.9999C11.3459 5 9.99991 6.346 9.99991 8V16.919L6.62491 14.219C6.19391 13.875 5.56291 13.944 5.21891 14.375C4.87391 14.807 4.94391 15.436 5.37491 15.781L10.3749 19.781C10.5579 19.927 10.7789 20 10.9999 20C11.2209 20 11.4419 19.927 11.6249 19.781L16.6249 15.781C17.0559 15.436 17.1259 14.807 16.7809 14.375C16.4369 13.944 15.8069 13.874 15.3749 14.219L11.9999 16.919V8C11.9999 7.449 12.4489 7 12.9999 7H17.9999C18.5519 7 18.9999 6.552 18.9999 6C18.9999 5.448 18.5519 5 17.9999 5Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M18 5H13.0001C11.3461 5 10.0001 6.346 10.0001 8V16.919L6.62513 14.219C6.19414 13.875 5.56314 13.944 5.21915 14.375C4.87415 14.807 4.94415 15.436 5.37515 15.781L10.3751 19.781C10.5581 19.927 10.7791 20 11.0001 20C11.2211 20 11.4421 19.927 11.6251 19.781L16.625 15.781C17.056 15.436 17.126 14.807 16.781 14.375C16.437 13.944 15.807 13.874 15.375 14.219L12.0001 16.919V8C12.0001 7.449 12.4491 7 13.0001 7H18C18.552 7 19 6.552 19 6C19 5.448 18.552 5 18 5Z"/>,
    })
))