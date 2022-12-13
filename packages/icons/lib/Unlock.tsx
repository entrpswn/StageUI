/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m31.9999 37.3335c-1.472 0-2.6666 1.1947-2.6666 2.6667s1.1946 2.6666 2.6666 2.6666 2.6667-1.1946 2.6667-2.6666-1.1947-2.6667-2.6667-2.6667zm.0001 10.6665c-4.4107 0-8-3.5893-8-8s3.5893-8 8-8 8 3.5893 8 8-3.5893 8-8 8zm13.3333-26.6665h-18.6667v-5.3333c0-2.9414 2.392-5.3334 5.3334-5.3334 2.9413 0 5.3333 2.392 5.3333 5.3334 0 1.4746 1.192 2.6666 2.6667 2.6666 1.4746 0 2.6666-1.192 2.6666-2.6666 0-5.8827-4.784-10.6667-10.6666-10.6667-5.8827 0-10.6667 4.784-10.6667 10.6667v5.3333h-2.6667c-4.4106 0-8 3.5893-8 8v21.3333c0 4.4107 3.5894 8 8 8h26.6667c4.4107 0 8-3.5893 8-8v-21.3333c0-4.4107-3.5893-8-8-8z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m32.0002 42.6668c-1.472 0-2.6667-1.1946-2.6667-2.6666s1.1947-2.6667 2.6667-2.6667 2.6666 1.1947 2.6666 2.6667-1.1946 2.6666-2.6666 2.6666zm-.0002-10.6668c-4.4107 0-8 3.5893-8 8s3.5893 8 8 8 8-3.5893 8-8-3.5893-8-8-8zm16 18.667c0 1.472-1.1947 2.6667-2.6667 2.6667h-26.6666c-1.472 0-2.6667-1.1947-2.6667-2.6667v-21.3333c0-1.472 1.1947-2.6667 2.6667-2.6667h26.6666c1.472 0 2.6667 1.1947 2.6667 2.6667zm-2.6666-29.3335h-18.6667v-5.3333c0-2.9414 2.392-5.3334 5.3334-5.3334 2.9413 0 5.3333 2.392 5.3333 5.3334 0 1.4746 1.192 2.6666 2.6667 2.6666 1.4746 0 2.6666-1.192 2.6666-2.6666 0-5.8827-4.784-10.6667-10.6666-10.6667-5.8827 0-10.6667 4.784-10.6667 10.6667v5.3333h-2.6667c-4.4106 0-8 3.5893-8 8v21.3333c0 4.4107 3.5894 8 8 8h26.6667c4.4107 0 8-3.5893 8-8v-21.3333c0-4.4107-3.5893-8-8-8z" fillRule="evenodd"/>,
    })
))