/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path d="m9.7071 15.493c-.39052.3905-1.02369.3905-1.41421 0l-2.7929-2.7929c-.3866-.3866-1.0134-.3866-1.4 0-.3866.3866-.3866 1.0134 0 1.4l4.1929 4.1929c.39052.3905 1.02369.3905 1.41421 0l10.5929-10.5929c.3866-.3866.3866-1.0134 0-1.4-.3866-.3866-1.0134-.3866-1.4 0z"/>,
        outline: <path d="m9.7071 15.493c-.39052.3905-1.02369.3905-1.41421 0l-2.7929-2.7929c-.3866-.3866-1.0134-.3866-1.4 0-.3866.3866-.3866 1.0134 0 1.4l4.1929 4.1929c.39052.3905 1.02369.3905 1.41421 0l10.5929-10.5929c.3866-.3866.3866-1.0134 0-1.4-.3866-.3866-1.0134-.3866-1.4 0z"/>,
    })
))