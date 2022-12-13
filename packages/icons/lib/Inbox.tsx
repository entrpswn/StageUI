/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m22.2449 14.8074c.4506-.904 1.376-1.4746 2.3866-1.4746h14.7387c1.0107 0 1.9333.5706 2.384 1.4746l7.264 14.5254h-6.352c-1.472 0-2.6667 1.1946-2.6667 2.6666v5.3334c0 1.4746-1.1946 2.6666-2.6666 2.6666h-10.6667c-1.472 0-2.6667-1.192-2.6667-2.6666v-5.3334c0-1.472-1.1946-2.6666-2.6666-2.6666h-6.352zm33.1919 15.4372-8.912-17.824c-1.3626-2.72533-4.104-4.42133-7.1546-4.42133h-14.7414c-3.0506 0-5.7893 1.696-7.1546 4.42133l-8.91202 17.824c-.368.736-.56267 1.5627-.56267 2.3867v15.368c0 4.4133 3.58929 8 7.99999 8h32c4.4133 0 8-3.5867 8-8v-15.368c0-.824-.1947-1.6507-.5627-2.3867z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m48 50.6665h-32c-1.4693 0-2.6666-1.1947-2.6666-2.6667v-13.3333h5.3333v8c0 1.4747 1.1947 2.6667 2.6667 2.6667h21.3333c1.472 0 2.6667-1.192 2.6667-2.6667v-8h5.3333v13.3333c0 1.472-1.1973 2.6667-2.6667 2.6667zm-25.7546-35.8583c.4533-.9094 1.368-1.4747 2.384-1.4747h14.7413c1.016 0 1.9307.5653 2.384 1.4747l7.264 14.5253h-6.352c-1.472 0-2.6667 1.192-2.6667 2.6667v8h-16v-8c0-1.4747-1.1946-2.6667-2.6666-2.6667h-6.352zm33.1919 15.4371-8.912-17.824c-1.3626-2.7253-4.104-4.4213-7.1546-4.4213h-14.7414c-3.0506 0-5.792 1.696-7.1546 4.4213l-8.91203 17.824c-.368.736-.56267 1.5627-.56267 2.384v15.3707c0 4.4107 3.5893 8 8 8h32c4.4107 0 8-3.5893 8-8v-15.3707c0-.8213-.1947-1.648-.5627-2.384z" fillRule="evenodd"/>,
    })
))