/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17.8091 13.395c1.705-1.417 2.89-3.44202 3.183-5.77102.069-.547-.319-1.047-.868-1.116-.54-.074-1.048.319-1.116.867-.439 3.49202-3.452 6.12502-7.008 6.12502-3.55605 0-6.56905-2.633-7.00805-6.12502-.068-.548-.578-.937-1.117-.867-.548.069-.936.569-.867 1.116.293 2.329 1.478 4.35402 3.183 5.77102l-2.312 2.312c-.389.389-.389 1.025 0 1.414.388.389 1.025.389 1.414 0l2.603-2.603c.954.482 2.001.8 3.10405.921v3.561c0 .55.45 1 1 1s1-.45 1-1v-3.561c1.102-.121 2.15-.439 3.103-.921l2.604 2.603c.389.389 1.025.389 1.414 0s.389-1.025 0-1.414z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17.8091 13.395c1.705-1.417 2.89-3.44202 3.183-5.77102.069-.547-.319-1.047-.868-1.116-.54-.074-1.048.319-1.116.867-.439 3.49202-3.452 6.12502-7.008 6.12502-3.55603 0-6.56903-2.633-7.00803-6.12502-.068-.548-.578-.937-1.117-.867-.548.069-.936.569-.867 1.116.293 2.329 1.478 4.35402 3.183 5.77102l-2.312 2.312c-.389.389-.389 1.025 0 1.414.388.389 1.025.389 1.414 0l2.603-2.603c.954.482 2.001.8 3.10403.921v3.561c0 .55.45 1 1 1s1-.45 1-1v-3.561c1.102-.121 2.15-.439 3.103-.921l2.604 2.603c.389.389 1.025.389 1.414 0s.389-1.025 0-1.414z" fillRule="evenodd"/>,
    })
))