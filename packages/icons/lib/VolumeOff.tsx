/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M14.9999 3.9999V12.1719L9.0259 6.1979L13.4349 3.1749C13.7399 2.9649 14.1369 2.9419 14.4659 3.1149C14.7939 3.2879 14.9999 3.6289 14.9999 3.9999ZM20.9999 12.0001C20.9999 13.5991 20.3699 15.1211 19.2219 16.3941L20.6369 17.8091C22.1629 16.1551 22.9999 14.1371 22.9999 12.0001C22.9999 9.4311 21.8059 7.0251 19.6379 5.2291C19.2119 4.8781 18.5819 4.9371 18.2299 5.3621C17.8769 5.7871 17.9369 6.4181 18.3619 6.7711C20.0629 8.1801 20.9999 10.0361 20.9999 12.0001ZM16.9105 14.0821L18.3485 15.5211C19.9065 13.4831 19.8885 10.3741 18.2795 8.3731C17.9325 7.9431 17.3035 7.8761 16.8725 8.2211C16.4425 8.5671 16.3745 9.1961 16.7205 9.6271C17.6835 10.8231 17.7385 12.7781 16.9105 14.0821ZM4.743 7.5714H2C1.448 7.5714 1 8.0184 1 8.5714V15.4284C1 15.9814 1.448 16.4284 2 16.4284H7.023L13.434 20.8254C13.604 20.9414 13.802 21.0004 14 21.0004C14.16 21.0004 14.32 20.9624 14.466 20.8844C14.794 20.7124 15 20.3714 15 20.0004V17.8284L4.743 7.5714ZM3.2929 3.293C3.6839 2.902 4.3159 2.902 4.7069 3.293L20.7069 19.293C21.0979 19.684 21.0979 20.316 20.7069 20.707C20.5119 20.902 20.2559 21 19.9999 21C19.7439 21 19.4879 20.902 19.2929 20.707L3.2929 4.707C2.9019 4.316 2.9019 3.684 3.2929 3.293Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M13.5 10.6714V5.89841L10.668 7.83941L9.229 6.40141L13.935 3.17441C14.24 2.96441 14.637 2.94141 14.966 3.11541C15.294 3.28841 15.5 3.62841 15.5 4.00041V12.6714L13.5 10.6714ZM4.707 3.29301C4.316 2.90201 3.684 2.90201 3.293 3.29301C2.902 3.68401 2.902 4.31601 3.293 4.70701L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293L4.707 3.29301ZM16.9106 14.082L18.3486 15.521C19.9066 13.483 19.8886 10.374 18.2796 8.37301C17.9326 7.94301 17.3036 7.87601 16.8726 8.22101C16.4426 8.56701 16.3746 9.19601 16.7206 9.62701C17.6836 10.823 17.7386 12.778 16.9106 14.082ZM19.222 16.394C20.37 15.121 21 13.599 21 12C21 10.036 20.063 8.18001 18.362 6.77101C17.937 6.41801 17.877 5.78701 18.23 5.36201C18.582 4.93701 19.212 4.87801 19.638 5.22901C21.806 7.02501 23 9.43101 23 12C23 14.137 22.163 16.155 20.637 17.809L19.222 16.394ZM13.5 18.1016L8.399 14.6036C8.232 14.4906 8.035 14.4286 7.833 14.4286H3.5V9.57161H6.743L4.743 7.57161H2.5C1.948 7.57161 1.5 8.01861 1.5 8.57161V15.4286C1.5 15.9816 1.948 16.4286 2.5 16.4286H7.523L13.935 20.8256C14.104 20.9416 14.302 20.9996 14.5 20.9996C14.66 20.9996 14.82 20.9616 14.966 20.8846C15.294 20.7116 15.5 20.3716 15.5 19.9996V18.3286L13.5 16.3286V18.1016Z"/>,
    })
))