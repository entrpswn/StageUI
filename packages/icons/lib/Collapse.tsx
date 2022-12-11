/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16.4155 8.99901 2.585.001c.552 0 1 .448 1 1.00099-.001.552-.449.999-1 .999h-.001l-4.975-.003c-.55 0-.997-.445-1-.995l-.024-4.99699c-.003-.552.442-1.002.995-1.005h.005c.55 0 .997.444 1 .995l.012 2.578 3.28-3.28c.391-.391 1.024-.391 1.415 0 .39.391.39 1.023 0 1.414zm-11.41101 4.00119 4.99701.025c.55.003.995.449.995.999l.004 4.975c0 .552-.448 1.001-1 1.001-.55301 0-1.00001-.448-1.00001-.999l-.002-2.585-3.291 3.291c-.196.195-.452.293-.707.293-.256 0-.512-.098-.707-.293-.391-.391-.391-1.024 0-1.414l3.279-3.28-2.577-.013c-.553-.003-.998-.454-.995-1.005.002-.551.45-.995 1-.995z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m16.4155 8.99901 2.585.001c.552 0 1 .448 1 1.00099-.001.552-.449.999-1 .999h-.001l-4.975-.003c-.55 0-.997-.445-1-.995l-.024-4.99699c-.003-.552.442-1.002.995-1.005h.005c.55 0 .997.444 1 .995l.012 2.578 3.28-3.28c.391-.391 1.024-.391 1.415 0 .39.391.39 1.023 0 1.414zm-11.41101 4.00119 4.99701.025c.55.003.995.449.995.999l.004 4.975c0 .552-.448 1.001-1 1.001-.55301 0-1.00001-.448-1.00001-.999l-.002-2.585-3.291 3.291c-.196.195-.452.293-.707.293-.256 0-.512-.098-.707-.293-.391-.391-.391-1.024 0-1.414l3.279-3.28-2.577-.013c-.553-.003-.998-.454-.995-1.005.002-.551.45-.995 1-.995z" fillRule="evenodd"/>,
    })
))