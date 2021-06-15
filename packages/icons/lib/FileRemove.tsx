/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M14.714 8C14.32 8 14 7.619 14 7.15V3.978L17.742 8H14.714ZM14 15H10C9.447 15 9 14.552 9 14C9 13.448 9.447 13 10 13H14C14.553 13 15 13.448 15 14C15 14.552 14.553 15 14 15ZM19.74 7.328L15.296 2.328C15.107 2.119 14.838 2 14.556 2H6.556C5.147 2 4 3.122 4 4.5V19.5C4 20.878 5.147 22 6.556 22H17.444C18.854 22 20 20.878 20 19.5V8C20 7.751 19.907 7.512 19.74 7.328Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M13.9999 13H9.99994C9.44694 13 8.99994 13.448 8.99994 14C8.99994 14.552 9.44694 15 9.99994 15H13.9999C14.5529 15 14.9999 14.552 14.9999 14C14.9999 13.448 14.5529 13 13.9999 13ZM17.4442 20H6.55524C6.24924 20 6.00024 19.776 6.00024 19.5V4.5C6.00024 4.224 6.24924 4 6.55524 4H12.0002V7.15C12.0002 8.722 13.2172 10 14.7142 10H18.0002V19.5C18.0002 19.776 17.7512 20 17.4442 20ZM14.0002 4.978L16.7422 8H14.7142C14.3202 8 14.0002 7.619 14.0002 7.15V4.978ZM19.7402 8.328L14.2962 2.328C14.1062 2.119 13.8382 2 13.5552 2H6.55524C5.14624 2 4.00024 3.122 4.00024 4.5V19.5C4.00024 20.878 5.14624 22 6.55524 22H17.4442C18.8532 22 20.0002 20.878 20.0002 19.5V9C20.0002 8.751 19.9072 8.512 19.7402 8.328Z"/>,
    })
))