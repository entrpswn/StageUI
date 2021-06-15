/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M7.12709 4.29877L8.59309 5.76377L18.1211 15.2928L20.1141 17.2858L20.4201 17.5908C20.6091 17.4278 20.7731 17.2328 20.8731 16.9908C21.1281 16.3778 20.9891 15.6768 20.5211 15.2078L18.7201 13.4038V8.93677C18.7201 5.45577 16.2181 2.49877 12.8991 2.05977C10.9781 1.80377 9.03809 2.39077 7.58309 3.66677C7.38909 3.83677 7.20709 4.01777 7.03509 4.20677L7.12709 4.29877ZM14.0001 18.3413C14.0001 19.2403 13.0841 20.0003 12.0001 20.0003C10.9161 20.0003 10.0001 19.2403 10.0001 18.3413V18.0003H14.0001V18.3413ZM15.8791 18.7073L15.2931 18.1213L13.9481 16.7773L13.8791 16.7073L6.57609 9.40427L5.31209 8.14027C5.29509 8.33527 5.28009 8.53027 5.28009 8.72727L5.27909 13.4043L3.47909 15.2083C3.01009 15.6773 2.87109 16.3773 3.12509 16.9903C3.38009 17.6033 3.97309 18.0003 4.63709 18.0003H8.00009V18.3413C8.00009 20.3593 9.79409 22.0003 12.0001 22.0003C14.0421 22.0003 15.7121 20.5893 15.9511 18.7793L15.8791 18.7073ZM19.4071 17.993L20.7071 19.293C21.0981 19.684 21.0981 20.316 20.7071 20.707C20.5121 20.902 20.2561 21 20.0001 21C19.7441 21 19.4881 20.902 19.2931 20.707L16.5861 18L16.0001 17.414L14.6551 16.069L14.5861 16L7.28309 8.69697L5.53109 6.94597L3.29309 4.70697C2.90209 4.31597 2.90209 3.68397 3.29309 3.29297C3.68409 2.90197 4.31609 2.90197 4.70709 3.29297L6.42009 5.00597L7.88609 6.47097L17.4141 16L19.4071 17.993Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M8.90049 5.17089C9.93849 4.26089 11.2615 3.86089 12.6375 4.04189C14.9645 4.35089 16.7195 6.45489 16.7195 8.93689V13.4039C16.7195 13.6059 16.7585 13.7999 16.8155 13.9869L20.4205 17.5909C20.6095 17.4279 20.7725 17.2329 20.8735 16.9909C21.1285 16.3779 20.9895 15.6769 20.5205 15.2079L18.7195 13.4039V8.93689C18.7195 5.45589 16.2175 2.49889 12.8995 2.05989C10.9755 1.80389 9.03949 2.39089 7.58349 3.66689C7.38849 3.83689 7.20749 4.01789 7.03549 4.20689L8.46749 5.63989C8.49864 5.6043 8.52933 5.56836 8.56003 5.53243L8.56003 5.53242C8.66731 5.40683 8.77453 5.2813 8.90049 5.17089ZM12.0001 20C10.9161 20 10.0001 19.24 10.0001 18.341V18H14.0001V18.341C14.0001 19.24 13.0841 20 12.0001 20ZM14.0291 16.857L13.1721 16H5.51509L6.69409 14.818C7.07209 14.44 7.28009 13.938 7.28009 13.404V10.108L5.31209 8.13999C5.29509 8.33499 5.28009 8.52999 5.28009 8.72699L5.27909 13.404L3.47909 15.208C3.01009 15.678 2.87109 16.377 3.12509 16.99C3.38009 17.604 3.97309 18 4.63709 18H8.00009V18.341C8.00009 20.359 9.79409 22 12.0001 22C14.0421 22 15.7121 20.589 15.9511 18.78L15.1721 18L14.0291 16.857ZM19.4071 17.993L20.7071 19.293C21.0981 19.684 21.0981 20.316 20.7071 20.707C20.5121 20.902 20.2561 21 20.0001 21C19.7441 21 19.4881 20.902 19.2931 20.707L16.5861 18L16.0001 17.414L14.6551 16.069L14.5861 16L7.28309 8.69699L5.53109 6.94599L3.29309 4.70699C2.90209 4.31599 2.90209 3.68399 3.29309 3.29299C3.68409 2.90199 4.31609 2.90199 4.70709 3.29299L6.42009 5.00599L7.88609 6.47099L17.4141 16L19.4071 17.993Z"/>,
    })
))