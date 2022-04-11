/**
The MIT License (MIT)
*/
import React from 'react'

import { Props, createIcon } from '../Icon'

export default React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
    createIcon(props, ref, {
      filled: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 4.32757C10 4.17257 10.214 3.99957 10.5 3.99957H13.5C13.786 3.99957 14 4.17257 14 4.32757V5.99957H10V4.32757ZM21 5.99957H20H16V4.32757C16 3.04357 14.879 1.99957 13.5 1.99957H10.5C9.121 1.99957 8 3.04357 8 4.32757V5.99957H4H3C2.45 5.99957 2 6.45057 2 6.99957C2 7.54957 2.45 7.99957 3 7.99957H4V18.9996C4 20.6546 5.346 21.9996 7 21.9996H17C18.654 21.9996 20 20.6546 20 18.9996V7.99957H21C21.55 7.99957 22 7.54957 22 6.99957C22 6.45057 21.55 5.99957 21 5.99957Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z"
        />
      ),
    }),
)
