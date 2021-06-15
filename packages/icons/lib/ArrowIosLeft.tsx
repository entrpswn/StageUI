/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M13.8287 19C13.5367 19 13.2467 18.873 13.0487 18.627L8.22066 12.627C7.92266 12.256 7.92666 11.726 8.23166 11.36L13.2317 5.35998C13.5847 4.93598 14.2157 4.87898 14.6407 5.23198C15.0647 5.58498 15.1217 6.21598 14.7677 6.63998L10.2927 12.011L14.6077 17.373C14.9537 17.803 14.8857 18.433 14.4547 18.779C14.2707 18.928 14.0487 19 13.8287 19Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M13.8287 19C13.5367 19 13.2467 18.873 13.0487 18.627L8.22066 12.627C7.92266 12.256 7.92666 11.726 8.23166 11.36L13.2317 5.35998C13.5847 4.93598 14.2157 4.87898 14.6407 5.23198C15.0647 5.58498 15.1217 6.21598 14.7677 6.63998L10.2927 12.011L14.6077 17.373C14.9537 17.803 14.8857 18.433 14.4547 18.779C14.2707 18.928 14.0487 19 13.8287 19Z"/>,
    })
))