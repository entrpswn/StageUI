/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 22c-3.309 0-6-2.557-6-5.698v-10.17c0-2.278 1.944-4.132 4.333-4.132 2.39 0 4.334 1.854 4.334 4.132l-.006 10.177c0 1.414-1.197 2.565-2.667 2.565s-2.666-1.151-2.666-2.566l.005-9.391c.001-.552.449-.999 1-.999h.001c.552 0 1 .448.999 1.001l-.005 9.39c0 .311.298.565.666.565s.667-.254.667-.566l.006-10.177c0-1.175-1.047-2.131-2.334-2.131-1.286 0-2.333.956-2.333 2.132v10.17c0 2.039 1.794 3.698 4 3.698s4-1.659 4-3.698v-10.17c0-.553.448-1 1-1s1 .447 1 1v10.17c0 3.141-2.691 5.698-6 5.698" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 22c-3.309 0-6-2.557-6-5.698v-10.17c0-2.278 1.944-4.132 4.333-4.132 2.39 0 4.334 1.854 4.334 4.132l-.006 10.177c0 1.414-1.197 2.565-2.667 2.565s-2.666-1.151-2.666-2.566l.005-9.391c.001-.552.449-.999 1-.999h.001c.552 0 1 .448.999 1.001l-.005 9.39c0 .311.298.565.666.565s.667-.254.667-.566l.006-10.177c0-1.175-1.047-2.131-2.334-2.131-1.286 0-2.333.956-2.333 2.132v10.17c0 2.039 1.794 3.698 4 3.698s4-1.659 4-3.698v-10.17c0-.553.448-1 1-1s1 .447 1 1v10.17c0 3.141-2.691 5.698-6 5.698" fillRule="evenodd"/>,
    })
))