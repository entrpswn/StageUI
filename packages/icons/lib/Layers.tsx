/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m8.64297 19.4322 22.72263 12.3627c.392.2133.8774.2133 1.272 0l22.7227-12.3627c.9147-.4986.8347-1.7733-.1387-2.1653l-22.72-9.17066c-.32-.128-.6826-.128-1.0026 0l-22.72003 9.17066c-.97066.392-1.05067 1.6667-.136 2.1653zm46.57833 8.9848-4.88-2.08-17.7041 9.632c-.3946.2134-.88.2134-1.2746 0l-17.704-9.632-4.88002 2.08c-.97333.4134-1.05333 1.7627-.136 2.288l22.72002 13.0587c.3946.2267.88.2267 1.2746 0l22.7201-13.0587c.9173-.5253.8373-1.8746-.136-2.288zm-4.1521 10.0432 4.1521 1.7974c.9733.4213 1.0533 1.7893.136 2.3226l-22.7201 13.2481c-.3946.2293-.88.2293-1.2746 0l-22.72002-13.2481c-.91733-.5333-.83733-1.9013.136-2.3226l4.15202-1.7974 18.432 10.0294c.3946.2133.88.2133 1.2746 0z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m47.3609 41.4399-15.36 8.8187-15.36-8.8187 4.5174-1.9226 9.5146 5.4613c.4107.2373.8694.3547 1.328.3547.4587 0 .9147-.1174 1.328-.3547l9.5147-5.464zm-16.688-7.1278c.4107.2373.8694.3547 1.328.3547.4587 0 .9147-.1174 1.328-.3547l9.5147-5.464 4.5173 1.9253-15.36 8.8187-15.36-8.8187 4.5174-1.9253zm1.328-20.7467 15.36 6.5413-15.36 8.8187-15.36-8.8187zm23.9946 16.6959c-.0613-1.0107-.688-1.8987-1.6186-2.296l-5.7387-2.4427 6.024-3.4587c.8773-.5013 1.392-1.4586 1.3333-2.4693-.0613-1.008-.688-1.8987-1.6186-2.296l-21.3334-9.08533c-.6666-.28534-1.4213-.28534-2.088 0l-21.33331 9.08533c-.93067.3973-1.55733 1.288-1.616 2.296-.06133 1.0107.456 1.968 1.33333 2.4693l6.02138 3.4587-5.73871 2.4427c-.93067.3973-1.55733 1.2853-1.616 2.296-.06133 1.0106.456 1.968 1.33333 2.4693l6.02138 3.4587-5.73871 2.4426c-.93067.3974-1.55733 1.2854-1.616 2.296-.06133 1.0107.456 1.968 1.33333 2.4694l21.33338 12.248c.4106.2373.8693.3546 1.328.3546.4586 0 .9146-.1173 1.328-.3546l21.3333-12.248c.8773-.5014 1.392-1.4587 1.3333-2.4694-.0613-1.008-.688-1.8986-1.616-2.296l-5.7386-2.4453 6.0213-3.456c.8773-.5013 1.392-1.4587 1.3333-2.4693z" fillRule="evenodd"/>,
    })
))