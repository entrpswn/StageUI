/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m37.3333 10.6084 9.9786 10.7254h-8.0747c-1.0506 0-1.9039-1.016-1.9039-2.2667zm15.3093 8.9331-11.8533-13.33334c-.504-.55733-1.2213-.87466-1.9733-.87466h-21.3334c-3.76 0-6.816 2.992-6.816 6.6667v40c0 3.6746 3.056 6.6666 6.816 6.6666h29.0347c3.76 0 6.816-2.992 6.816-6.6666v-30.6667c0-.664-.2453-1.3013-.6907-1.792z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m46.5179 53.3337h-29.0373c-.816 0-1.48-.5974-1.48-1.3334v-40c0-.736.664-1.3333 1.48-1.3333h11.8533v11.0667c0 4.192 3.2454 7.6 7.2374 7.6h11.4293v22.6666c0 .736-.6667 1.3334-1.4827 1.3334zm.5468-29.3334h-10.4933c-1.0507 0-1.904-1.016-1.904-2.2666v-11.0667h.2986zm5.576-1.7921-14.5173-16.00004c-.504-.55733-1.2214-.87466-1.976-.87466h-18.6667c-3.7573 0-6.8133 2.992-6.8133 6.6667v40c0 3.6746 3.056 6.6666 6.8133 6.6666h29.0373c3.7574 0 6.816-2.992 6.816-6.6666v-28c0-.664-.248-1.3014-.6933-1.792z" fillRule="evenodd"/>,
    })
))