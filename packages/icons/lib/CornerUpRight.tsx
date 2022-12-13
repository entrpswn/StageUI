/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m52.7497 27.6681-10.6666-13.3333c-.9254-1.1494-2.6-1.3387-3.7494-.416-1.1493.9173-1.336 2.5973-.416 3.7466l7.2027 9.0027h-23.7867c-4.4133 0-8 3.5867-8 8v13.3333c0 1.472 1.1947 2.6667 2.6667 2.6667s2.6667-1.1947 2.6667-2.6667v-13.3333c0-1.472 1.1946-2.6667 2.6666-2.6667h23.7867l-7.2027 9c-.92 1.1494-.7333 2.8294.416 3.7467.4907.3947 1.08.5867 1.664.5867.784 0 1.5574-.344 2.0854-1.0027l10.6666-13.3333c.7787-.9734.7787-2.3574 0-3.3307z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m52.7498 27.6681-10.6667-13.3333c-.9253-1.1494-2.6-1.3387-3.7493-.416-1.1493.9173-1.336 2.5973-.416 3.7466l7.2027 9.0027h-23.7867c-4.4133 0-8 3.5867-8 8v13.3333c0 1.472 1.1947 2.6667 2.6667 2.6667s2.6666-1.1947 2.6666-2.6667v-13.3333c0-1.472 1.1947-2.6667 2.6667-2.6667h23.7867l-7.2027 9c-.92 1.1494-.7333 2.8294.416 3.7467.4907.3947 1.08.5867 1.664.5867.784 0 1.5573-.344 2.0853-1.0027l10.6667-13.3333c.7787-.9734.7787-2.3574 0-3.3307z" fillRule="evenodd"/>,
    })
))