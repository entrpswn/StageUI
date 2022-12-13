/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m26.3022 47.9999c-.736 0-1.44-.304-1.944-.84l-12.968-13.8107c-1.0107-1.072-.9547-2.76.1173-3.768 1.0747-1.008 2.7627-.9546 3.768.1174l11 11.7093 22.4213-24.5387c.9974-1.0906 2.6827-1.1626 3.7707-.1706 1.0853.992 1.16 2.68.168 3.7653l-24.3653 26.6667c-.4987.5493-1.208.864-1.9493.8693z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m26.3021 47.9999c-.736 0-1.44-.304-1.944-.84l-12.968-13.8107c-1.0107-1.072-.9547-2.76.1173-3.768 1.0747-1.008 2.7627-.9546 3.768.1174l11 11.7093 22.4213-24.5387c.9974-1.0906 2.6827-1.1626 3.7707-.1706 1.0853.992 1.16 2.68.168 3.7653l-24.3653 26.6667c-.4987.5493-1.208.864-1.9494.8693z" fillRule="evenodd"/>,
    })
))