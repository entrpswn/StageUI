/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M18 14C16.897 14 16 13.103 16 12C16 10.897 16.897 10 18 10C19.103 10 20 10.897 20 12C20 13.103 19.103 14 18 14ZM4 12C4 10.897 4.897 10 6 10C7.103 10 8 10.897 8 12C8 13.103 7.103 14 6 14C4.897 14 4 13.103 4 12ZM18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z"/>,
    })
))