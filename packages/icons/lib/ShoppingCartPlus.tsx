/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m42.6673 5.33333v-2.66666c0-1.46667-1.2-2.66667-2.6666-2.66667-1.4667 0-2.6667 1.2-2.6667 2.66667v2.66666h-2.6667c-1.4667 0-2.6667 1.2-2.6667 2.66667 0 1.46666 1.2 2.6667 2.6667 2.6667h2.6667v2.6666c0 1.4667 1.2 2.6667 2.6667 2.6667 1.4666 0 2.6666-1.2 2.6666-2.6667v-2.6666h2.6667c1.4666 0 2.6666-1.20004 2.6666-2.6667 0-1.46667-1.2-2.66667-2.6666-2.66667zm18.8874 18.52797c-.9787-1.584-2.6747-2.528-4.536-2.528h-34.1334l-1.6453-6.0346c-.3173-1.16-1.3707-1.9654-2.5733-1.9654h-5.3334c-1.4746 0-2.6666 1.1947-2.6666 2.6667s1.192 2.6667 2.6666 2.6667h3.296l7.464 27.368c.3174 1.16 1.3707 1.9653 2.5734 1.9653h24c1.0106 0 1.9333-.5707 2.3866-1.4747l8.736-17.4746c.8347-1.6667.744-3.6054-.2346-5.1894zm-36.2207 29.472c-2.208 0-4 1.7894-4 4 0 2.2107 1.792 4 4 4s4-1.7893 4-4c0-2.2106-1.792-4-4-4zm22.6667 4c0-2.2106 1.792-4 4-4s4 1.7894 4 4c0 2.2107-1.792 4-4 4s-4-1.7893-4-4zm-34.6674-1.3333h-10.66663c-1.46667 0-2.66667 1.2-2.66667 2.6667 0 1.4666 1.2 2.6666 2.66667 2.6666h10.66663c1.4667 0 2.6667-1.2 2.6667-2.6666 0-1.4667-1.2-2.6667-2.6667-2.6667zm-10.66663-13.3333h5.33333c1.46667 0 2.6667 1.2 2.6667 2.6666 0 1.4667-1.20003 2.6667-2.6667 2.6667h-5.33333c-1.46667 0-2.66667-1.2-2.66667-2.6667 0-1.4666 1.2-2.6666 2.66667-2.6666z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m42.6673 5.33333v-2.66666c0-1.46667-1.2-2.66667-2.6666-2.66667-1.4667 0-2.6667 1.2-2.6667 2.66667v2.66666h-2.6667c-1.4667 0-2.6667 1.2-2.6667 2.66667 0 1.46666 1.2 2.6667 2.6667 2.6667h2.6667v2.6666c0 1.4667 1.2 2.6667 2.6667 2.6667 1.4666 0 2.6666-1.2 2.6666-2.6667v-2.6666h2.6667c1.4666 0 2.6666-1.20004 2.6666-2.6667 0-1.46667-1.2-2.66667-2.6666-2.66667zm6.3514 37.33347h-20.3147l-4.3653-16h32.68zm12.536-18.8055c-.9787-1.584-2.6747-2.528-4.536-2.528h-34.1334l-1.6453-6.0346c-.3173-1.16-1.3707-1.9654-2.5733-1.9654h-5.3334c-1.4746 0-2.6666 1.1947-2.6666 2.6667s1.192 2.6667 2.6666 2.6667h3.296l7.464 27.368c.3174 1.16 1.3707 1.9653 2.5734 1.9653h24c1.0106 0 1.9333-.5707 2.3866-1.4747l8.736-17.4746c.8347-1.6667.744-3.6054-.2346-5.1894zm-36.2207 29.472c-2.208 0-4 1.7894-4 4 0 2.2107 1.792 4 4 4s4-1.7893 4-4c0-2.2106-1.792-4-4-4zm22.6667 4c0-2.2106 1.792-4 4-4s4 1.7894 4 4c0 2.2107-1.792 4-4 4s-4-1.7893-4-4zm-34.6674-1.3333h-10.66663c-1.46667 0-2.66667 1.2-2.66667 2.6667 0 1.4666 1.2 2.6666 2.66667 2.6666h10.66663c1.4667 0 2.6667-1.2 2.6667-2.6666 0-1.4667-1.2-2.6667-2.6667-2.6667zm-10.66663-13.3333h5.33333c1.46667 0 2.6667 1.2 2.6667 2.6666 0 1.4667-1.20003 2.6667-2.6667 2.6667h-5.33333c-1.46667 0-2.66667-1.2-2.66667-2.6667 0-1.4666 1.2-2.6666 2.66667-2.6666z" fillRule="evenodd"/>,
    })
))