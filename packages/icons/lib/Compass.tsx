/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M10.7968 13.2129L12.4888 12.5289L13.2028 10.7869L11.5108 11.4709L10.7968 13.2129ZM15.9252 9.41989L14.1792 13.6779C14.0772 13.9279 13.8792 14.1249 13.6292 14.2269L9.41624 15.9279C9.29324 15.9769 9.16624 15.9999 9.04224 15.9999C8.77124 15.9999 8.51724 15.8829 8.32924 15.6899C8.31124 15.6729 8.29224 15.6589 8.27524 15.6419C8.26624 15.6309 8.26024 15.6179 8.25224 15.6069C8.01424 15.3309 7.92624 14.9409 8.07424 14.5799L9.82024 10.3219C9.92224 10.0719 10.1212 9.87489 10.3712 9.77389L14.5842 8.07189C14.9782 7.91589 15.4092 8.02789 15.6832 8.31789C15.9742 8.59389 16.0862 9.02589 15.9252 9.41989ZM12.0002 1.99989C6.48624 1.99989 2.00024 6.48589 2.00024 11.9999C2.00024 17.5139 6.48624 21.9999 12.0002 21.9999C17.5142 21.9999 22.0002 17.5139 22.0002 11.9999C22.0002 6.48589 17.5142 1.99989 12.0002 1.99989Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M10.7969 13.2129L11.5109 11.4709L13.2029 10.7869L12.4889 12.5289L10.7969 13.2129ZM15.6829 8.3179C15.4089 8.0279 14.9789 7.9159 14.5839 8.0719L10.3709 9.7739C10.1209 9.8749 9.9219 10.0719 9.8199 10.3219L8.0749 14.5799C7.9269 14.9409 8.0139 15.3309 8.2529 15.6079C8.2609 15.6179 8.2669 15.6309 8.2759 15.6419C8.2919 15.6589 8.3109 15.6729 8.3289 15.6899C8.5169 15.8829 8.7719 15.9999 9.0419 15.9999C9.1669 15.9999 9.2939 15.9769 9.4159 15.9279L13.6289 14.2269C13.8789 14.1249 14.0779 13.9279 14.1799 13.6779L15.9249 9.4199C16.0869 9.0259 15.9749 8.5939 15.6829 8.3179ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
    })
))