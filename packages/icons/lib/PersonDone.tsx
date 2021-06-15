/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM21.6563 4.2456C21.2393 3.8836 20.6083 3.9266 20.2453 4.3436L18.3793 6.4886L17.7453 5.7796C17.3783 5.3676 16.7463 5.3326 16.3333 5.7016C15.9223 6.0696 15.8863 6.7026 16.2553 7.1136L17.6443 8.6666C17.8343 8.8786 18.1053 8.9996 18.3893 8.9996H18.3963C18.6833 8.9976 18.9563 8.8726 19.1443 8.6566L21.7553 5.6566C22.1173 5.2396 22.0733 4.6076 21.6563 4.2456ZM17 20C17 20.552 16.553 21 16 21H4C3.447 21 3 20.552 3 20C3 16.14 6.141 13 10 13C13.859 13 17 16.14 17 20Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M10 5C11.103 5 12 5.897 12 7C12 8.103 11.103 9 10 9C8.897 9 8 8.103 8 7C8 5.897 8.897 5 10 5ZM10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM21.6562 4.2456C21.2392 3.8836 20.6082 3.9266 20.2452 4.3436L18.3792 6.4886L17.7452 5.7796C17.3782 5.3676 16.7462 5.3326 16.3332 5.7016C15.9222 6.0696 15.8862 6.7026 16.2552 7.1136L17.6442 8.6666C17.8342 8.8786 18.1052 8.9996 18.3892 8.9996H18.3962C18.6832 8.9976 18.9562 8.8726 19.1442 8.6566L21.7552 5.6566C22.1172 5.2396 22.0732 4.6076 21.6562 4.2456ZM3 20C3 16.14 6.141 13 10 13C13.859 13 17 16.14 17 20C17 20.552 16.553 21 16 21C15.447 21 15 20.552 15 20C15 17.243 12.757 15 10 15C7.243 15 5 17.243 5 20C5 20.552 4.553 21 4 21C3.447 21 3 20.552 3 20Z"/>,
    })
))