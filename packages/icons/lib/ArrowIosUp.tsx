/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m47.9985 39.9996c-.6026 0-1.208-.2027-1.7066-.6187l-14.3227-11.936-14.2987 11.5067c-1.144.9253-2.824.744-3.7493-.4054-.9227-1.1466-.7413-2.824.408-3.7493l16-12.8747c.9867-.7973 2.4027-.7867 3.3787.0293l16 13.3334c1.1306.9413 1.2826 2.624.3413 3.7547-.528.632-1.2853.96-2.0507.96z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m47.9986 39.9996c-.6026 0-1.208-.2027-1.7066-.6187l-14.3227-11.936-14.2987 11.5067c-1.144.9253-2.824.744-3.7493-.4054-.9227-1.1466-.7413-2.824.408-3.7493l16-12.8747c.9867-.7973 2.4027-.7867 3.3787.0293l16 13.3334c1.1306.9413 1.2826 2.624.3413 3.7547-.528.632-1.2853.96-2.0507.96z" fillRule="evenodd"/>,
    })
))