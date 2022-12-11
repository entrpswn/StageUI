/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16 10h-8.91902l2.7-3.37496c.34502-.432.27502-1.061-.156-1.406-.431-.344-1.061-.276-1.406.156l-4 4.99996c-.292.366-.292.884 0 1.25l4 5c.198.247.488.375.781.375.22 0 .44-.072.625-.219.43102-.345.50102-.974.156-1.406l-2.7-3.375h8.91902c.551 0 1 .449 1 1v5c0 .552.448 1 1 1s1-.448 1-1v-5c0-1.654-1.346-3-3-3" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m16 10h-8.919l2.7-3.37496c.345-.432.275-1.061-.156-1.406-.431-.344-1.061-.276-1.406.156l-4 4.99996c-.292.366-.292.884 0 1.25l4 5c.198.247.488.375.781.375.22 0 .44-.072.625-.219.431-.345.501-.974.156-1.406l-2.7-3.375h8.919c.551 0 1 .449 1 1v5c0 .552.448 1 1 1s1-.448 1-1v-5c0-1.654-1.346-3-3-3" fillRule="evenodd"/>,
    })
))