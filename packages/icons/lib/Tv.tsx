/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M19 18.9999C19 19.5529 18.553 19.9999 18 19.9999H6C5.447 19.9999 5 19.5529 5 18.9999V11.9999C5 11.4469 5.447 10.9999 6 10.9999H18C18.553 10.9999 19 11.4469 19 11.9999V18.9999ZM18 5.99991H14.414L16.707 3.70691C17.098 3.31591 17.098 2.68391 16.707 2.29291C16.316 1.90191 15.684 1.90191 15.293 2.29291L12 5.58591L8.707 2.29291C8.316 1.90191 7.684 1.90191 7.293 2.29291C6.902 2.68391 6.902 3.31591 7.293 3.70691L9.586 5.99991H6C4.346 5.99991 3 7.34591 3 8.99991V18.9999C3 20.6539 4.346 21.9999 6 21.9999H18C19.654 21.9999 21 20.6539 21 18.9999V8.99991C21 7.34591 19.654 5.99991 18 5.99991Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M19 19C19 19.552 18.552 20 18 20H6C5.448 20 5 19.552 5 19V9.00001C5 8.44801 5.448 8.00001 6 8.00001H18C18.552 8.00001 19 8.44801 19 9.00001V19ZM18 6.00001H14.414L16.707 3.70701C17.098 3.31601 17.098 2.68401 16.707 2.29301C16.316 1.90201 15.684 1.90201 15.293 2.29301L12 5.58601L8.707 2.29301C8.316 1.90201 7.684 1.90201 7.293 2.29301C6.902 2.68401 6.902 3.31601 7.293 3.70701L9.586 6.00001H6C4.346 6.00001 3 7.34601 3 9.00001V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V9.00001C21 7.34601 19.654 6.00001 18 6.00001Z"/>,
    })
))