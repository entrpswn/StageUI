/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m35.6327 45.3333c-.6987 0-1.3947-.272-1.9174-.8133l-10.3013-10.6667c-1.008-1.048-.9947-2.7093.0347-3.7386l10.6666-10.6667c1.04-1.0427 2.728-1.0427 3.7707 0 1.04 1.0427 1.04 2.728 0 3.7707l-8.8133 8.8133 8.4773 8.7814c1.024 1.0613.9947 2.7493-.064 3.7706-.52.5013-1.1867.7493-1.8533.7493z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m35.6328 45.3333c-.6987 0-1.3947-.272-1.9174-.8133l-10.3013-10.6667c-1.008-1.048-.9947-2.7093.0347-3.7386l10.6666-10.6667c1.04-1.0427 2.728-1.0427 3.7707 0 1.04 1.0427 1.04 2.728 0 3.7707l-8.8133 8.8133 8.4773 8.7814c1.024 1.0613.9947 2.7493-.064 3.7706-.52.5013-1.1867.7493-1.8533.7493z" fillRule="evenodd"/>,
    })
))