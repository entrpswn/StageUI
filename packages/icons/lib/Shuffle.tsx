/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M19 10.3081C18.448 10.3081 18 9.86012 18 9.30812L17.999 7.41512L5.70701 19.7071C5.51201 19.9021 5.25601 20.0001 5.00001 20.0001C4.74401 20.0001 4.48801 19.9021 4.29301 19.7071C3.90201 19.3161 3.90201 18.6831 4.29301 18.2931L10.58 12.0061L4.74801 6.17512C4.35701 5.78412 4.35701 5.15112 4.74801 4.76112C5.13901 4.37012 5.77101 4.37012 6.16201 4.76112L11.994 10.5921L16.576 6.00912L14.687 6.00012C14.135 5.99712 13.689 5.54712 13.692 4.99512C13.695 4.44312 14.169 4.01012 14.697 4.00012L19.002 4.02112C19.552 4.02412 19.997 4.47112 19.997 5.02112L20 9.30712C20 9.85912 19.553 10.3071 19.001 10.3081H19ZM18.9999 13.6792H19.0049C19.5579 13.6822 20.0029 14.1322 19.9999 14.6842L19.9789 18.8922C20.0109 19.1832 19.9309 19.4842 19.7069 19.7072C19.5119 19.9022 19.2559 20.0002 18.9999 20.0002C18.9847 20.0002 18.9698 19.9961 18.9548 19.9919C18.9433 19.9887 18.9317 19.9855 18.9199 19.9842L14.6929 19.9872C14.1409 19.9872 13.6929 19.5392 13.6929 18.9872C13.6929 18.4352 14.1399 17.9872 14.6919 17.9872L16.5709 17.9862L13.7929 15.2072C13.4019 14.8162 13.4019 14.1832 13.7929 13.7932C14.1839 13.4022 14.8169 13.4022 15.2069 13.7932L17.9899 16.5762L17.9999 14.6742C18.0029 14.1232 18.4499 13.6792 18.9999 13.6792Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M19 10.3081C18.448 10.3081 18 9.86012 18 9.30812L17.999 7.41512L5.70701 19.7071C5.51201 19.9021 5.25601 20.0001 5.00001 20.0001C4.74401 20.0001 4.48801 19.9021 4.29301 19.7071C3.90201 19.3161 3.90201 18.6831 4.29301 18.2931L10.58 12.0061L4.74801 6.17512C4.35701 5.78412 4.35701 5.15112 4.74801 4.76112C5.13901 4.37012 5.77101 4.37012 6.16201 4.76112L11.994 10.5921L16.576 6.00912L14.687 6.00012C14.135 5.99712 13.689 5.54712 13.692 4.99512C13.695 4.44312 14.169 4.01012 14.697 4.00012L19.002 4.02112C19.552 4.02412 19.997 4.47112 19.997 5.02112L20 9.30712C20 9.85912 19.553 10.3071 19.001 10.3081H19ZM18.9999 13.6792H19.0049C19.5579 13.6822 20.0029 14.1322 19.9999 14.6842L19.9789 18.8922C20.0109 19.1832 19.9309 19.4842 19.7069 19.7072C19.5119 19.9022 19.2559 20.0002 18.9999 20.0002C18.9847 20.0002 18.9698 19.9961 18.9548 19.9919C18.9433 19.9887 18.9317 19.9855 18.9199 19.9842L14.6929 19.9872C14.1409 19.9872 13.6929 19.5392 13.6929 18.9872C13.6929 18.4352 14.1399 17.9872 14.6919 17.9872L16.5709 17.9862L13.7929 15.2072C13.4019 14.8162 13.4019 14.1832 13.7929 13.7932C14.1839 13.4022 14.8169 13.4022 15.2069 13.7932L17.9899 16.5762L17.9999 14.6742C18.0029 14.1232 18.4499 13.6792 18.9999 13.6792Z"/>,
    })
))