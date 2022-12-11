/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m8 4c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-15c0-.55-.45-1-1-1zm4 3c-.55 0-1 .38077-1 .84615v9.30765c0 .4654.45.8462 1 .8462s1-.3808 1-.8462v-9.30765c0-.46538-.45-.84615-1-.84615zm-9 2c0-.55.45-1 1-1s1 .45 1 1v7c0 .55-.45 1-1 1s-1-.45-1-1zm17 0c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1v-7c0-.55-.45-1-1-1zm-5-4c0-.55.45-1 1-1s1 .45 1 1v15c0 .55-.45 1-1 1s-1-.45-1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m8 4c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-15c0-.55-.45-1-1-1zm4 3c-.55 0-1 .38077-1 .84615v9.30765c0 .4654.45.8462 1 .8462s1-.3808 1-.8462v-9.30765c0-.46538-.45-.84615-1-.84615zm-9 2c0-.55.45-1 1-1s1 .45 1 1v7c0 .55-.45 1-1 1s-1-.45-1-1zm17 0c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1v-7c0-.55-.45-1-1-1zm-5-4c0-.55.45-1 1-1s1 .45 1 1v15c0 .55-.45 1-1 1s-1-.45-1-1z" fillRule="evenodd"/>,
    })
))