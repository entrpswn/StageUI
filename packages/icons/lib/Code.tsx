/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m45.2036 14.328 12.8746 16c.7974.9893.784 2.4027-.0293 3.3813l-13.3333 16c-.528.632-1.2854.9574-2.0507.9574-.6027 0-1.2053-.2027-1.7067-.616-1.1306-.944-1.2826-2.6267-.3413-3.76l11.9387-14.32-11.5094-14.2987c-.92-1.1493-.7413-2.8267.408-3.7493 1.1467-.928 2.824-.7414 3.7494.4053zm-25.9192-.0358c.9413-1.1306 2.6186-1.2826 3.7573-.3413 1.1307.944 1.2827 2.624.3413 3.7573l-11.9386 14.32 11.5093 14.3014c.92 1.1466.7413 2.824-.408 3.7493-.4907.3947-1.0827.5893-1.6693.5893-.7787 0-1.552-.3413-2.08-.9946l-12.87469-16c-.79733-.992-.784-2.4054.02934-3.3814z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m45.2034 14.328 12.8747 16c.7973.9893.784 2.4027-.0293 3.3813l-13.3334 16c-.528.632-1.2853.9574-2.0506.9574-.6027 0-1.2054-.2027-1.7067-.616-1.1307-.944-1.2827-2.6267-.3413-3.76l11.9386-14.32-11.5093-14.2987c-.92-1.1493-.7413-2.8267.408-3.7493 1.1467-.928 2.824-.7414 3.7493.4053zm-25.9191-.0358c.9413-1.1306 2.6186-1.2826 3.7573-.3413 1.1307.944 1.2827 2.624.3413 3.7573l-11.9386 14.32 11.5093 14.3014c.92 1.1466.7413 2.824-.408 3.7493-.4907.3947-1.0827.5893-1.6693.5893-.7787 0-1.552-.3413-2.08-.9946l-12.87471-16c-.79733-.992-.784-2.4054.02934-3.3814z" fillRule="evenodd"/>,
    })
))