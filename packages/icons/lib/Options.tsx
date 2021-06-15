/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M7 14.1846V2.9996C7 2.4476 6.553 1.9996 6 1.9996C5.447 1.9996 5 2.4476 5 2.9996V14.1846C3.839 14.5986 3 15.6986 3 16.9996C3 18.3016 3.839 19.4016 5 19.8156V20.9996C5 21.5526 5.447 21.9996 6 21.9996C6.553 21.9996 7 21.5526 7 20.9996V19.8156C8.161 19.4016 9 18.3016 9 16.9996C9 15.6986 8.161 14.5986 7 14.1846ZM21 13.0001C21 11.6981 20.161 10.5991 19 10.1851V3.0001C19 2.4471 18.553 2.0001 18 2.0001C17.447 2.0001 17 2.4471 17 3.0001V10.1851C15.839 10.5991 15 11.6981 15 13.0001C15 14.3021 15.839 15.4011 17 15.8151V21.0001C17 21.5531 17.447 22.0001 18 22.0001C18.553 22.0001 19 21.5531 19 21.0001V15.8151C20.161 15.4011 21 14.3021 21 13.0001ZM12 2.0001C13.654 2.0001 15 3.3461 15 5.0001C15 6.3021 14.161 7.4011 13 7.8151V21.0001C13 21.5531 12.553 22.0001 12 22.0001C11.447 22.0001 11 21.5531 11 21.0001V7.8151C9.839 7.4011 9 6.3021 9 5.0001C9 3.3461 10.346 2.0001 12 2.0001Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M12 6C11.448 6 11 5.552 11 5C11 4.448 11.448 4 12 4C12.552 4 13 4.448 13 5C13 5.552 12.552 6 12 6ZM15 5C15 3.346 13.654 2 12 2C10.346 2 9 3.346 9 5C9 6.302 9.839 7.401 11 7.815V21C11 21.553 11.447 22 12 22C12.553 22 13 21.553 13 21V7.815C14.161 7.401 15 6.302 15 5ZM6 18C5.448 18 5 17.552 5 17C5 16.448 5.448 16 6 16C6.552 16 7 16.448 7 17C7 17.552 6.552 18 6 18ZM7 14.185V3C7 2.447 6.553 2 6 2C5.447 2 5 2.447 5 3V14.185C3.839 14.599 3 15.698 3 17C3 18.302 3.839 19.401 5 19.815V21C5 21.553 5.447 22 6 22C6.553 22 7 21.553 7 21V19.815C8.161 19.401 9 18.302 9 17C9 15.698 8.161 14.599 7 14.185ZM18 14C17.448 14 17 13.552 17 13C17 12.448 17.448 12 18 12C18.552 12 19 12.448 19 13C19 13.552 18.552 14 18 14ZM21 13C21 11.698 20.161 10.599 19 10.185V3C19 2.447 18.553 2 18 2C17.447 2 17 2.447 17 3V10.185C15.839 10.599 15 11.698 15 13C15 14.302 15.839 15.401 17 15.815V21C17 21.553 17.447 22 18 22C18.553 22 19 21.553 19 21V15.815C20.161 15.401 21 14.302 21 13Z"/>,
    })
))