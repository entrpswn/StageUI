/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18.6665 50.6668c-1.4693 0-2.6666-1.1973-2.6666-2.6666 0-1.4694 1.1973-2.6667 2.6666-2.6667h29.3334v5.3333zm32-42.6668h-32c-4.4107 0-8 3.5893-8 8v32c0 4.4107 3.5893 8 8 8h29.3333 2.6667c1.472 0 2.6667-1.1947 2.6667-2.6667v-2.6666-5.3334-34.6666c0-1.47203-1.1947-2.6667-2.6667-2.6667z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18.6667 50.6668c-1.4694 0-2.6667-1.1973-2.6667-2.6666 0-1.4694 1.1973-2.6667 2.6667-2.6667h29.3333v5.3333zm0-37.3333h29.3333v26.6667h-29.3333c-.9414 0-1.8294.192-2.6667.4906v-24.4906c0-1.4694 1.1973-2.6667 2.6667-2.6667zm31.9999-5.3335h-32c-4.4106 0-8 3.5893-8 8v32c0 4.4107 3.5894 8 8 8h29.3334 2.6666c1.472 0 2.6667-1.1947 2.6667-2.6667v-2.6666-5.3334-34.6666c0-1.47203-1.1947-2.6667-2.6667-2.6667z" fillRule="evenodd"/>,
    })
))