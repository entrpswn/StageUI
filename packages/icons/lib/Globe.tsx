/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m38.9788 52.139c2.7974-3.9947 5.7067-9.8693 6.288-17.472h7.8801c-1.0214 8.1387-6.6374 14.8533-14.1681 17.472zm-28.128-17.472h7.9786c.5494 7.632 3.4214 13.4827 6.256 17.496-7.5653-2.6053-13.208-9.3333-14.2346-17.496zm14.3173-22.8559c-2.8053 3.9947-5.7413 9.888-6.328 17.5227h-7.9893c1.0293-8.192 6.712-14.9414 14.3173-17.5227zm-.9573 17.522c.816-8.7254 5.28-14.8 7.8587-17.608 2.6666 2.856 7.0613 8.8746 7.8213 17.608zm.0026 5.3339h15.6853c-.816 8.7387-5.2906 14.8133-7.8666 17.6213-2.792-2.96-7.0747-8.896-7.8187-17.6213zm28.9335-5.3335h-7.872c-.5466-7.5973-3.3866-13.4293-6.208-17.4373 7.488 2.64 13.064 9.3306 14.08 17.4373zm5.5199 2.6667c0-14.6774-11.9226-26.6187-26.592-26.66137-.0106 0-.0213-.00267-.0346-.00267-.0107 0-.0267-.00266-.04-.00266-14.704 0-26.6667 11.9653-26.6667 26.6667 0 14.704 11.9627 26.6666 26.6667 26.6666.016 0 .0293-.0026.04-.0026.0053 0 .008.0026.0133.0026.008 0 .016-.0053.0213-.0053 14.6694-.04 26.592-11.984 26.592-26.6613z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m38.9787 52.139c2.7974-3.9947 5.7067-9.8693 6.288-17.472h7.88c-1.0213 8.1387-6.6373 14.8533-14.168 17.472zm-28.1281-17.472h7.9787c.5493 7.632 3.4213 13.4827 6.256 17.496-7.5653-2.6053-13.208-9.3333-14.2347-17.496zm14.3174-22.8559c-2.8054 3.9947-5.7414 9.888-6.328 17.5227h-7.9894c1.0294-8.192 6.712-14.9414 14.3174-17.5227zm-.9573 17.522c.816-8.7254 5.28-14.8 7.8586-17.608 2.6667 2.856 7.0614 8.8746 7.8214 17.608zm.0026 5.3339h15.6853c-.816 8.7387-5.2906 14.8133-7.8666 17.6213-2.792-2.96-7.0747-8.896-7.8187-17.6213zm28.9335-5.3335h-7.872c-.5467-7.5973-3.3867-13.4293-6.208-17.4373 7.488 2.64 13.064 9.3306 14.08 17.4373zm5.5199 2.6667c0-14.6774-11.9227-26.6187-26.592-26.66137-.0107 0-.0213-.00267-.0347-.00267-.0106 0-.0266-.00266-.04-.00266-14.704 0-26.66663 11.9653-26.66663 26.6667 0 14.704 11.96263 26.6666 26.66663 26.6666.016 0 .0294-.0026.04-.0026.0054 0 .008.0026.0134.0026.008 0 .016-.0053.0213-.0053 14.6693-.04 26.592-11.984 26.592-26.6613z" fillRule="evenodd"/>,
    })
))