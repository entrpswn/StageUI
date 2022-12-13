/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m21.5385 53.3339c19.3226 0 30.5013-15.0027 30.5013-29.24 0-.392 2.7467-2.7493 3.9227-7.664.24-.9973-.7307-1.784-1.6454-1.3653-2.3466 1.0773-4.728.224-5.7626-1.0027-3.9787-4.33866-10.632-4.54666-14.864-.4667-2.728 2.632-3.8854 6.552-3.04 10.2934-8.936.6373-15.072-3.5974-20.1174-9.4027-.65062-.7547-1.85862-.3573-1.99462.64-.74666 5.552-.98133 19.0507 12.39462 26.8027-2.3226 3.3386-6.8693 5.3093-11.93062 6.1546-1.12.1894-1.38666 1.7414-.36266 2.2427 4.01068 1.9733 8.41868 3.0053 12.89868 3" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m50.7083 17.745v.0053zm-28.0081 30.2481c.064 0 .1334.0026.1974.008 15.1866-.0987 24.2506-11.7014 24.2506-22.9174 0-1.0186.5227-1.6773.9867-2.2613.4213-.5333 1.0747-1.3547 1.656-2.5387-2.1147-.0213-4.0027-.96-5.1013-2.2453-1.1494-1.2293-2.8-1.9813-4.5814-2.0347-1.7173-.0693-3.4693.592-4.7706 1.8267-1.7334 1.6453-2.4747 4.128-1.936 6.4747l.696 3.0373-3.1094.2187c-8.0426.6026-13.616-2.84-17.4426-6.4027.016 5.3867 1.8053 12.5733 9.9386 17.208l2.5547 1.456-1.6987 2.4027c-1.768 2.504-4.4293 4.1013-7.1386 5.1226 1.7893.4267 3.6293.6454 5.464.6454h.032zm.0001 5.3412c-.0694 0-.144-.0027-.2134-.008-4.2746-.0293-8.5626-1.024-12.4133-2.888-1.44799-.704-2.26665-2.2453-2.03465-3.8453.23466-1.6187 1.47733-2.888 3.08795-3.1494 2.7867-.4586 5.0987-1.2746 6.7734-2.3653-10.33869-7.7307-10.06669-19.304-9.39735-24.2053.19733-1.4347 1.21866-2.632 2.59995-3.0507 1.4027-.4267 2.856 0 3.816 1.0907 4.096 4.6426 8.1894 6.976 12.9894 7.3306.1386-3.1066 1.4613-6.1013 3.7573-8.2826 2.3387-2.2214 5.3973-3.384 8.608-3.288 3.2133.0986 6.1947 1.4533 8.392 3.8133.224.256 1.0613.72 2.072.2667 1.3253-.5947 2.832-.3974 3.9307.52 1.096.9093 1.5626 2.3413 1.2213 3.736-.8613 3.5493-2.5627 5.8373-3.4213 6.9333-.448 13.6133-11.5094 27.392-29.768 27.392z" fillRule="evenodd"/>,
    })
))