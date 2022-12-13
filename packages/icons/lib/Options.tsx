/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18.6667 37.8254v-29.8267c0-1.472-1.192-2.66667-2.6667-2.66667s-2.6667 1.19467-2.6667 2.66667v29.8267c-3.096 1.104-5.3333 4.0373-5.3333 7.5066 0 3.472 2.2373 6.4054 5.3333 7.5094v3.1573c0 1.4747 1.192 2.6667 2.6667 2.6667s2.6667-1.192 2.6667-2.6667v-3.1573c3.096-1.104 5.3333-4.0374 5.3333-7.5094 0-3.4693-2.2373-6.4026-5.3333-7.5066zm37.3333-3.1578c0-3.472-2.2373-6.4027-5.3333-7.5067v-19.15998c0-1.47467-1.192-2.66667-2.6667-2.66667s-2.6667 1.192-2.6667 2.66667v19.15998c-3.096 1.104-5.3333 4.0347-5.3333 7.5067s2.2373 6.4027 5.3333 7.5067v13.8266c0 1.4747 1.192 2.6667 2.6667 2.6667s2.6667-1.192 2.6667-2.6667v-13.8266c3.096-1.104 5.3333-4.0347 5.3333-7.5067zm-24-29.33335c4.4107 0 8 3.58934 8 8.00005 0 3.472-2.2373 6.4026-5.3333 7.5066v35.16c0 1.4747-1.192 2.6667-2.6667 2.6667s-2.6667-1.192-2.6667-2.6667v-35.16c-3.096-1.104-5.3333-4.0346-5.3333-7.5066 0-4.41071 3.5893-8.00005 8-8.00005z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m31.9999 16.0003c-1.472 0-2.6667-1.1946-2.6667-2.6666s1.1947-2.6667 2.6667-2.6667 2.6667 1.1947 2.6667 2.6667-1.1947 2.6666-2.6667 2.6666zm8.0001-2.6668c0-4.41067-3.5893-8-8-8s-8 3.58933-8 8c0 3.472 2.2373 6.4027 5.3333 7.5067v35.16c0 1.4746 1.192 2.6666 2.6667 2.6666s2.6667-1.192 2.6667-2.6666v-35.16c3.096-1.104 5.3333-4.0347 5.3333-7.5067zm-24.0001 34.6668c-1.472 0-2.6667-1.1946-2.6667-2.6666s1.1947-2.6667 2.6667-2.6667 2.6667 1.1947 2.6667 2.6667-1.1947 2.6666-2.6667 2.6666zm2.6668-10.1735v-29.82664c0-1.47466-1.192-2.66666-2.6667-2.66666s-2.6667 1.192-2.6667 2.66666v29.82664c-3.096 1.104-5.3333 4.0347-5.3333 7.5067s2.2373 6.4027 5.3333 7.5067v3.16c0 1.4746 1.192 2.6666 2.6667 2.6666s2.6667-1.192 2.6667-2.6666v-3.16c3.096-1.104 5.3333-4.0347 5.3333-7.5067s-2.2373-6.4027-5.3333-7.5067zm29.3332-.4935c-1.472 0-2.6667-1.1946-2.6667-2.6666s1.1947-2.6667 2.6667-2.6667 2.6667 1.1947 2.6667 2.6667-1.1947 2.6666-2.6667 2.6666zm8.0001-2.6665c0-3.472-2.2373-6.4026-5.3333-7.5066v-19.16004c0-1.47466-1.192-2.66666-2.6667-2.66666s-2.6667 1.192-2.6667 2.66666v19.16004c-3.096 1.104-5.3333 4.0346-5.3333 7.5066s2.2373 6.4027 5.3333 7.5067v13.8267c0 1.4746 1.192 2.6666 2.6667 2.6666s2.6667-1.192 2.6667-2.6666v-13.8267c3.096-1.104 5.3333-4.0347 5.3333-7.5067z" fillRule="evenodd"/>,
    })
))