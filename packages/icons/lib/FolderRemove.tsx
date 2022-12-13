/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m37.3335 40.0003h-10.6667c-1.4667 0-2.6667-1.2-2.6667-2.6666 0-1.4667 1.2-2.6667 2.6667-2.6667h10.6667c1.4666 0 2.6666 1.2 2.6666 2.6667 0 1.4666-1.2 2.6666-2.6666 2.6666zm14.6667-21.2108h-18.736l-6.9307-8.4773c-.5067-.6187-1.2667-.9787-2.064-.9787h-12.2693c-3.6747 0-6.6667 2.9093-6.6667 6.4853v32.3627c0 3.576 2.992 6.4853 6.6667 6.4853h40c3.6746 0 6.6666-2.9093 6.6666-6.4853v-22.9067c0-3.576-2.992-6.4853-6.6666-6.4853z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m37.3333 34.6664h-10.6666c-1.4667 0-2.6667 1.2-2.6667 2.6667 0 1.4666 1.2 2.6666 2.6667 2.6666h10.6666c1.4667 0 2.6667-1.2 2.6667-2.6666 0-1.4667-1.2-2.6667-2.6667-2.6667zm16.0001 13.5162c0 .6347-.5973 1.152-1.3333 1.152h-40c-.736 0-1.3333-.5173-1.3333-1.152v-11.5013-20.864c0-.6347.5973-1.1493 1.3333-1.1493h11.0027l6.9333 8.4746c.5067.6214 1.264.9814 2.064.9814h20c.736 0 1.3333.5146 1.3333 1.152zm-1.3334-29.3921h-18.736l-6.9306-8.4774c-.5067-.62129-1.2667-.97863-2.064-.97863h-12.2694c-3.67463 0-6.66663 2.90663-6.66663 6.48263v32.3654c0 3.576 2.992 6.4853 6.66663 6.4853h40c3.6747 0 6.6667-2.9093 6.6667-6.4853v-22.9067c0-3.5787-2.992-6.4853-6.6667-6.4853z" fillRule="evenodd"/>,
    })
))