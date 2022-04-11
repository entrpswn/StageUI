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
          d="M16.2955 9.6055L11.7275 15.6055C11.5395 15.8525 11.2485 15.9985 10.9385 16.0005H10.9315C10.6245 16.0005 10.3345 15.8585 10.1445 15.6165L7.71249 12.5095C7.37249 12.0755 7.44849 11.4465 7.88349 11.1065C8.31749 10.7655 8.94749 10.8415 9.28749 11.2775L10.9205 13.3635L14.7045 8.3945C15.0385 7.9555 15.6655 7.8695 16.1065 8.2045C16.5455 8.5395 16.6305 9.1665 16.2955 9.6055ZM12.0005 2.0005C6.47749 2.0005 2.00049 6.4775 2.00049 12.0005C2.00049 17.5225 6.47749 22.0005 12.0005 22.0005C17.5235 22.0005 22.0005 17.5225 22.0005 12.0005C22.0005 6.4775 17.5235 2.0005 12.0005 2.0005Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9476 10.8415 8.3176 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6646 7.8695 15.0386 7.9555 14.7046 8.3945ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.478 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.478 17.523 2 12 2Z"
        />
      ),
    }),
)
