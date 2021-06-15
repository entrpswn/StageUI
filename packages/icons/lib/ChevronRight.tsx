/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M10.5 17C10.244 17 9.98801 16.902 9.79301 16.707C9.40201 16.316 9.40201 15.684 9.79301 15.293L13.098 11.988L9.91801 8.695C9.53501 8.297 9.54601 7.664 9.94301 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M10.5 17C10.244 17 9.98801 16.902 9.79301 16.707C9.40201 16.316 9.40201 15.684 9.79301 15.293L13.098 11.988L9.91801 8.695C9.53501 8.297 9.54601 7.664 9.94301 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"/>,
    })
))