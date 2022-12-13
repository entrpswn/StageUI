/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m47.4908 35.72c4.5466-3.7786 7.7066-9.1786 8.488-15.3893.184-1.4587-.8507-2.792-2.3147-2.976-1.44-.1973-2.7947.8507-2.976 2.312-1.1707 9.312-9.2053 16.3333-18.688 16.3333s-17.5173-7.0213-18.688-16.3333c-.1813-1.4613-1.5413-2.4987-2.9787-2.312-1.4613.184-2.49597 1.5173-2.31197 2.976.78134 6.2107 3.94137 11.6107 8.48797 15.3893l-6.1653 6.1654c-1.03733 1.0373-1.03733 2.7333 0 3.7706 1.0347 1.0374 2.7333 1.0374 3.7707 0l6.9413-6.9413c2.544 1.2853 5.336 2.1333 8.2773 2.456v9.496c0 1.4667 1.2 2.6667 2.6667 2.6667s2.6667-1.2 2.6667-2.6667v-9.496c2.9386-.3227 5.7333-1.1707 8.2746-2.456l6.944 6.9413c1.0374 1.0374 2.7334 1.0374 3.7707 0 1.0373-1.0373 1.0373-2.7333 0-3.7706z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m47.4908 35.72c4.5466-3.7786 7.7066-9.1786 8.488-15.3893.184-1.4587-.8507-2.792-2.3147-2.976-1.44-.1973-2.7947.8507-2.976 2.312-1.1707 9.312-9.2053 16.3333-18.688 16.3333s-17.5173-7.0213-18.688-16.3333c-.1813-1.4613-1.5413-2.4987-2.9787-2.312-1.4613.184-2.49597 1.5173-2.31197 2.976.78134 6.2107 3.94137 11.6107 8.48797 15.3893l-6.1653 6.1654c-1.03733 1.0373-1.03733 2.7333 0 3.7706 1.0347 1.0374 2.7333 1.0374 3.7707 0l6.9413-6.9413c2.544 1.2853 5.336 2.1333 8.2773 2.456v9.496c0 1.4667 1.2 2.6667 2.6667 2.6667s2.6667-1.2 2.6667-2.6667v-9.496c2.9386-.3227 5.7333-1.1707 8.2746-2.456l6.944 6.9413c1.0374 1.0374 2.7334 1.0374 3.7707 0 1.0373-1.0373 1.0373-2.7333 0-3.7706z" fillRule="evenodd"/>,
    })
))