/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m11 4.17193v1.828c0 .553.448 1 1 1s1-.447 1-1v-1.828c.923.326 1.651 1.095 1.907 2.099.063.221.093.461.093.729 0 1.654-1.346 3-3 3s-3-1.346-3-3c0-.262.031-.495.091-.712.003-.012.004-.023.007-.035l.004-.015c.252-.982.978-1.742 1.898-2.066m7 .82807h-1.422c-.779-1.799-2.561-3-4.578-3-2.023 0-3.809 1.209-4.58 3h-1.42c-1.654 0-3 1.346-3 3v11c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-11c0-1.654-1.346-3-3-3" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m19 19.0001c0 .552-.449 1-1 1h-11.99998c-.551 0-1-.448-1-1v-11.00004c0-.552.449-1 1-1h1c0 2.757 2.243 5.00004 4.99998 5.00004 2.757 0 5-2.24304 5-5.00004h1c.551 0 1 .448 1 1zm-8-14.82817v1.828c0 .553.448 1 1 1s1-.447 1-1v-1.828c.923.326 1.651 1.095 1.907 2.099.063.221.093.46.093.729 0 1.654-1.346 3-3 3s-3-1.346-3-3c0-.262.031-.495.091-.712.003-.012.004-.023.007-.035l.004-.015c.252-.982.978-1.742 1.898-2.066zm7 .82807h-1.422c-.779-1.799-2.561-3-4.578-3-2.023 0-3.809 1.209-4.58 3h-1.42c-1.654 0-3 1.346-3 3v11c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-11c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))