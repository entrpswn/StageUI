/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M16.0187 10.6787L13.3237 7.98367L15.2717 6.03467L17.9657 8.72867L16.0187 10.6787ZM19.4037 7.33767L19.4027 7.33667L16.6647 4.59867C15.9237 3.85967 14.6507 3.82467 13.9487 4.52967L4.95265 13.5257C4.62665 13.8507 4.42465 14.2827 4.38265 14.7397L4.00365 18.9097C3.97765 19.2047 4.08265 19.4967 4.29265 19.7067C4.48165 19.8957 4.73665 19.9997 4.99965 19.9997C5.03065 19.9997 5.06065 19.9987 5.09065 19.9957L9.26065 19.6167C9.71865 19.5747 10.1497 19.3737 10.4747 19.0487L19.4717 10.0517C20.1997 9.32167 20.1687 8.10367 19.4037 7.33767Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M16.0187 10.6787L13.3237 7.98367L15.2717 6.03467L17.9657 8.72867L16.0187 10.6787ZM9.07965 17.6247L6.10265 17.8957L6.36665 14.9397L11.9837 9.32267L14.6797 12.0187L9.07965 17.6247ZM19.4037 7.33767L19.4027 7.33667L16.6647 4.59867C15.9237 3.85967 14.6507 3.82467 13.9487 4.52967L4.95265 13.5257C4.62665 13.8507 4.42465 14.2827 4.38265 14.7397L4.00365 18.9097C3.97765 19.2047 4.08265 19.4967 4.29265 19.7067C4.48165 19.8957 4.73665 19.9997 4.99965 19.9997C5.03065 19.9997 5.06065 19.9987 5.09065 19.9957L9.26065 19.6167C9.71865 19.5747 10.1497 19.3737 10.4747 19.0487L19.4717 10.0517C20.1997 9.32167 20.1687 8.10367 19.4037 7.33767Z"/>,
    })
))