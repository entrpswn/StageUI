/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M15.292 3.878L20.121 8.707C20.683 9.269 21 10.033 21 10.829V18C21 19.657 19.657 21 18 21H16V17C16 15.897 15.102 15 14 15H10C8.897 15 8 15.897 8 17V21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H8V10C8 10.552 8.447 11 9 11H15C15.553 11 16 10.552 16 10C16 9.448 15.553 9 15 9H10V3H13.172C13.967 3 14.73 3.316 15.292 3.878ZM9.9999 17H13.9999L14.0009 21H9.9999V17Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M19 18C19 18.551 18.552 19 18 19H16V16C16 15.448 15.553 15 15 15H9C8.447 15 8 15.448 8 16V19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H8V10C8 10.552 8.447 11 9 11H13C13.553 11 14 10.552 14 10C14 9.448 13.553 9 13 9H10V5H13.172C13.435 5 13.692 5.107 13.879 5.293L18.707 10.121C18.896 10.31 19 10.562 19 10.829V18ZM10 19H14V17H10V19ZM20.121 8.707L15.293 3.879C14.727 3.312 13.973 3 13.172 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H9H15H18C19.654 21 21 19.654 21 18V10.829C21 10.027 20.687 9.273 20.121 8.707Z"/>,
    })
))