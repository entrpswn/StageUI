/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m52.6391 11.3618c-.9253-.928-2.4267-.928-3.352 0l-37.9253 37.9253c-.464.464-.696 1.0693-.696 1.6773 0 .6054.232 1.2134.696 1.6747.9253.9253 2.424.9253 3.352 0l37.9253-37.9253c.9253-.928.9253-2.4267 0-3.352zm-9.9725 39.3048c-2.2053 0-4-1.7947-4-4 0-2.2054 1.7947-4 4-4s4 1.7946 4 4c0 2.2053-1.7947 4-4 4zm-.0001-13.333c-5.1466 0-9.3333 4.1867-9.3333 9.3333 0 5.1467 4.1867 9.3334 9.3333 9.3334 5.1467 0 9.3334-4.1867 9.3334-9.3334 0-5.1466-4.1867-9.3333-9.3334-9.3333zm-21.3333-21.3335c2.2054 0 4 1.7946 4 4 0 2.2053-1.7946 4-4 4-2.2053 0-4-1.7947-4-4 0-2.2054 1.7947-4 4-4zm.0001 13.3345c5.1467 0 9.3333-4.1867 9.3333-9.3334 0-5.1466-4.1866-9.3333-9.3333-9.3333s-9.3333 4.1867-9.3333 9.3333c0 5.1467 4.1866 9.3334 9.3333 9.3334z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m52.6391 11.3618c-.9253-.928-2.4267-.928-3.352 0l-37.9253 37.9253c-.464.464-.696 1.0693-.696 1.6773 0 .6054.232 1.2134.696 1.6747.9253.9253 2.424.9253 3.352 0l37.9253-37.9253c.9253-.928.9253-2.4267 0-3.352zm-9.9725 39.3048c-2.2053 0-4-1.7947-4-4 0-2.2054 1.7947-4 4-4s4 1.7946 4 4c0 2.2053-1.7947 4-4 4zm-.0001-13.333c-5.1466 0-9.3333 4.1867-9.3333 9.3333 0 5.1467 4.1867 9.3334 9.3333 9.3334 5.1467 0 9.3334-4.1867 9.3334-9.3334 0-5.1466-4.1867-9.3333-9.3334-9.3333zm-21.3333-21.3335c2.2054 0 4 1.7946 4 4 0 2.2053-1.7946 4-4 4-2.2053 0-4-1.7947-4-4 0-2.2054 1.7947-4 4-4zm.0001 13.3345c5.1467 0 9.3333-4.1867 9.3333-9.3334 0-5.1466-4.1866-9.3333-9.3333-9.3333s-9.3333 4.1867-9.3333 9.3333c0 5.1467 4.1866 9.3334 9.3333 9.3334z" fillRule="evenodd"/>,
    })
))