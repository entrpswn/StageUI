/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m38.2111 53.3344c-.1787 0-.3627-.008-.5467-.0267-2.3467-.232-4.1867-1.888-4.6933-4.2213l-7.1547-33.0454-7.368 17.0187c-.424.976-1.3867 1.608-2.448 1.608h-7.99999c-1.47467 0-2.66667-1.1947-2.66667-2.6667 0-1.4746 1.192-2.6666 2.66667-2.6666h6.25069l6.6826-15.4374c.9467-2.1759 3.032-3.4426 5.4027-3.2053 2.3467.232 4.1867 1.888 4.6933 4.2213l7.1547 33.0454 7.368-17.0187c.424-.976 1.384-1.6053 2.448-1.6053h8c1.4747 0 2.6667 1.192 2.6667 2.6666 0 1.472-1.192 2.6667-2.6667 2.6667h-6.2507l-6.6826 15.4347c-.872 2.008-2.7414 3.232-4.856 3.232z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m38.211 53.3344c-.1787 0-.3627-.008-.5467-.0267-2.3467-.232-4.1867-1.888-4.6933-4.2213l-7.1547-33.0454-7.368 17.0187c-.424.976-1.3867 1.608-2.448 1.608h-7.99999c-1.47466 0-2.66666-1.1947-2.66666-2.6667 0-1.4746 1.192-2.6666 2.66666-2.6666h6.25069l6.6826-15.4374c.9467-2.1759 3.032-3.4426 5.4027-3.2053 2.3467.232 4.1867 1.888 4.6933 4.2213l7.1547 33.0454 7.368-17.0187c.424-.976 1.384-1.6053 2.448-1.6053h8c1.4747 0 2.6667 1.192 2.6667 2.6666 0 1.472-1.192 2.6667-2.6667 2.6667h-6.2507l-6.6826 15.4347c-.872 2.008-2.7414 3.232-4.856 3.232z" fillRule="evenodd"/>,
    })
))