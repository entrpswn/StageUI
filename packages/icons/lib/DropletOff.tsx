/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M18.9688 16.1406C20.0018 13.4316 19.4678 10.2346 17.3418 8.0326L12.7828 3.3056C12.5968 3.1136 12.3408 3.0026 12.0718 2.9996C11.8028 2.9976 11.5448 3.1046 11.3548 3.2946L8.74381 5.9156L18.9688 16.1406ZM5.98781 8.8164C3.81181 11.7774 4.01381 16.0014 6.63481 18.7154C8.03981 20.1714 9.91781 20.9824 11.9248 21.0004H11.9268C13.6308 21.0134 15.2478 20.4484 16.5728 19.4014L5.98781 8.8164ZM4.70701 3.293L20.707 19.293C21.098 19.684 21.098 20.316 20.707 20.707C20.512 20.902 20.256 21 20 21C19.744 21 19.488 20.902 19.293 20.707L3.29301 4.707C2.90201 4.316 2.90201 3.684 3.29301 3.293C3.68401 2.902 4.31601 2.902 4.70701 3.293Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M11.9966 5.42869L15.8806 9.38769C17.2526 10.7847 17.7446 12.7397 17.3716 14.5427L18.9796 16.1517C20.0266 13.4187 19.4706 10.1907 17.3086 7.98769L12.7096 3.29969C12.5216 3.10869 12.2646 2.99969 11.9966 2.99969H11.9956C11.7266 2.99969 11.4696 3.10869 11.2816 3.30069L8.73161 5.90369L10.1456 7.31869L11.9966 5.42869ZM12.0024 19H12.0004C10.5354 19 9.15641 18.418 8.11841 17.36C6.22741 15.434 5.99641 12.445 7.42541 10.254L5.99341 8.82199C3.80741 11.804 4.03441 16.055 6.69141 18.761C8.10841 20.205 9.99341 21 12.0004 21H12.0024C13.6824 20.999 15.2724 20.436 16.5784 19.406L15.1474 17.976C14.2304 18.635 13.1454 18.999 12.0024 19ZM4.70701 3.29299L20.707 19.293C21.098 19.684 21.098 20.316 20.707 20.707C20.512 20.902 20.256 21 20 21C19.744 21 19.488 20.902 19.293 20.707L3.29301 4.70699C2.90201 4.31599 2.90201 3.68399 3.29301 3.29299C3.68401 2.90199 4.31601 2.90199 4.70701 3.29299Z"/>,
    })
))