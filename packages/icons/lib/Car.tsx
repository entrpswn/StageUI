/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M18.9795 17.9999C18.9795 18.5519 18.5315 18.9999 17.9795 18.9999C17.4275 18.9999 16.9795 18.5519 16.9795 17.9999C16.9795 17.4479 17.4275 16.9999 17.9795 16.9999C18.5315 16.9999 18.9795 17.4479 18.9795 17.9999ZM6.97949 17.9999C6.97949 18.5519 6.53149 18.9999 5.97949 18.9999C5.42749 18.9999 4.97949 18.5519 4.97949 17.9999C4.97949 17.4479 5.42749 16.9999 5.97949 16.9999C6.53149 16.9999 6.97949 17.4479 6.97949 17.9999ZM19.9795 12.4799V14.9999H16.9795V10.0809L19.9795 12.4799ZM21.6045 11.2189L16.9795 7.51891V4.99991C16.9795 3.89691 16.1665 2.99991 15.1665 2.99991H3.79149C2.79249 2.99991 1.97949 3.89691 1.97949 4.99991V14.9999C1.97949 15.8729 2.49249 16.6089 3.20049 16.8819C3.06049 17.2279 2.97949 17.6039 2.97949 17.9999C2.97949 19.6539 4.32549 20.9999 5.97949 20.9999C7.63349 20.9999 8.97949 19.6539 8.97949 17.9999C8.97949 17.6469 8.90749 17.3139 8.79449 16.9999H11.9795H15.1645C15.0515 17.3139 14.9795 17.6469 14.9795 17.9999C14.9795 19.6539 16.3255 20.9999 17.9795 20.9999C19.6335 20.9999 20.9795 19.6539 20.9795 17.9999C20.9795 17.6469 20.9075 17.3139 20.7945 16.9999H20.9795C21.5325 16.9999 21.9795 16.5529 21.9795 15.9999V11.9999C21.9795 11.6959 21.8415 11.4089 21.6045 11.2189Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M19 18C19 18.552 18.552 19 18 19C17.448 19 17 18.552 17 18C17 17.448 17.448 17 18 17C18.552 17 19 17.448 19 18ZM12 15H4L4.016 5H15L14.984 15H12ZM7 18C7 18.552 6.552 19 6 19C5.448 19 5 18.552 5 18C5 17.448 5.448 17 6 17C6.552 17 7 17.448 7 18ZM20 12.48V15H17V10.081L20 12.48ZM21.625 11.219L17 7.519V5C17 3.897 16.187 3 15.187 3H3.812C2.813 3 2 3.897 2 5V15C2 15.873 2.513 16.609 3.221 16.882C3.081 17.228 3 17.604 3 18C3 19.654 4.346 21 6 21C7.654 21 9 19.654 9 18C9 17.647 8.928 17.314 8.815 17H12H15.185C15.072 17.314 15 17.647 15 18C15 19.654 16.346 21 18 21C19.654 21 21 19.654 21 18C21 17.647 20.928 17.314 20.815 17H21C21.553 17 22 16.553 22 16V12C22 11.696 21.862 11.409 21.625 11.219Z"/>,
    })
))