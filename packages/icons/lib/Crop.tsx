/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m22.8152 42.6668c-.816 0-1.4827-.664-1.4827-1.4826v-19.8507h19.8534c.816 0 1.48.664 1.48 1.4827v19.8506zm33.184 0h-8v-19.8506c0-3.76-3.056-6.816-6.8134-6.816h-19.8533v-8.00004c0-1.47466-1.192-2.66666-2.6666-2.66666-1.472 0-2.6667 1.192-2.6667 2.66666v8.00004h-8.00001c-1.472 0-2.66667 1.192-2.66667 2.6666 0 1.4747 1.19467 2.6667 2.66667 2.6667h8.00001v19.8507c0 3.76 3.0587 6.816 6.816 6.816h19.8507v8c0 1.4746 1.1946 2.6666 2.6666 2.6666 1.4747 0 2.6667-1.192 2.6667-2.6666v-8h8c1.4747 0 2.6666-1.192 2.6666-2.6667s-1.1919-2.6667-2.6666-2.6667z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m22.8152 42.6668c-.816 0-1.4826-.664-1.4826-1.4826v-19.8507h19.8533c.816 0 1.48.664 1.48 1.4827v19.8506zm33.184 0h-8v-19.8506c0-3.76-3.056-6.816-6.8133-6.816h-19.8534v-8.00004c0-1.47466-1.192-2.66666-2.6666-2.66666-1.472 0-2.6667 1.192-2.6667 2.66666v8.00004h-7.99998c-1.472 0-2.66667 1.192-2.66667 2.6666 0 1.4747 1.19467 2.6667 2.66667 2.6667h7.99998v19.8507c0 3.76 3.0587 6.816 6.816 6.816h19.8507v8c0 1.4746 1.1946 2.6666 2.6666 2.6666 1.4747 0 2.6667-1.192 2.6667-2.6666v-8h8c1.4747 0 2.6667-1.192 2.6667-2.6667s-1.192-2.6667-2.6667-2.6667z" fillRule="evenodd"/>,
    })
))