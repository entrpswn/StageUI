/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M12.0998 20.4004C10.2481 20.3838 8.51461 19.6361 7.21676 18.2921C4.55 15.5302 4.586 11.0708 7.29707 8.3496L11.5746 4.05729C11.7491 3.88098 11.9872 3.78314 12.2355 3.78498C12.4838 3.78775 12.7201 3.88929 12.8928 4.06745L17.1011 8.42991C19.7678 11.1927 19.7318 15.653 17.0198 18.3714C15.7008 19.6942 13.9552 20.4151 12.1017 20.4004H12.0998Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M12.5585 5.42903L8.64851 9.35503C6.47251 11.538 6.44351 15.114 8.58051 17.327C9.60951 18.394 10.9835 18.988 12.4475 19H12.4495C13.9145 19.011 15.2985 18.44 16.3445 17.39C18.5185 15.211 18.5475 11.636 16.4095 9.42103L12.5585 5.42903ZM12.4315 21C10.4245 20.983 8.54651 20.172 7.14151 18.716C4.25251 15.724 4.29151 10.893 7.22851 7.94603L11.8615 3.29503C12.0515 3.10503 12.3095 2.99803 12.5785 3.00003C12.8475 3.00303 13.1035 3.11403 13.2895 3.30603L17.8495 8.03303C20.7375 11.026 20.6985 15.858 17.7615 18.802C16.3325 20.236 14.4405 21.016 12.4335 21H12.4315Z"/>,
    })
))