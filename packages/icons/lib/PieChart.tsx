/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M12.9344 11.9776H21.0834C21.6254 11.9776 22.0494 12.4496 21.9954 12.9886C21.4514 18.4146 16.5794 22.5666 10.8814 21.9366C6.29645 21.4306 2.56945 17.7036 2.06245 13.1186C1.43445 7.42061 5.58445 2.54761 11.0114 2.00461C11.5514 1.95061 12.0224 2.37361 12.0224 2.91561V11.0666C12.0224 11.5696 12.4304 11.9776 12.9344 11.9776ZM21.167 10.3331H14.4999C14.0399 10.3331 13.6669 9.96111 13.6669 9.50011V2.83311C13.6669 2.37311 14.0399 2.00011 14.4999 2.00011C18.6349 2.00011 22 5.36411 22 9.50011C22 9.96111 21.6269 10.3331 21.167 10.3331Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M20.8212 14.0576C20.2982 13.8716 19.7282 14.1446 19.5452 14.6666C18.4172 17.8566 15.3842 19.9996 12.0002 19.9996C7.58924 19.9996 4.00024 16.4116 4.00024 11.9996C4.00024 8.6156 6.14324 5.5826 9.33324 4.4546C9.85424 4.2716 10.1272 3.7006 9.94324 3.1796C9.75924 2.6596 9.18824 2.3856 8.66724 2.5706C4.67924 3.9796 2.00024 7.7686 2.00024 11.9996C2.00024 17.5136 6.48624 21.9996 12.0002 21.9996C16.2312 21.9996 20.0202 19.3216 21.4302 15.3326C21.6142 14.8126 21.3422 14.2416 20.8212 14.0576ZM13.9999 10V4.071C17.0609 4.511 19.4889 6.938 19.9289 10H13.9999ZM12.9999 2C12.4479 2 11.9999 2.447 11.9999 3V11C11.9999 11.553 12.4479 12 12.9999 12H20.9999C21.5519 12 21.9999 11.553 21.9999 11C21.9999 6.037 17.9619 2 12.9999 2Z"/>,
    })
))