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
          d="M10 5.5C10 5.224 10.224 5 10.5 5H13.5C13.776 5 14 5.224 14 5.5V7H10V5.5ZM7 21H17V7H16V5.5C16 4.122 14.878 3 13.5 3H10.5C9.122 3 8 4.122 8 5.5V7H7V21ZM19 7V21C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7ZM2 10C2 8.346 3.346 7 5 7V21C3.346 21 2 19.654 2 18V10Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 18C20 18.551 19.551 19 19 19H17V9H19C19.551 9 20 9.449 20 10V18ZM4 18V10C4 9.449 4.449 9 5 9H7V19H5C4.449 19 4 18.551 4 18ZM10 5.5C10 5.224 10.224 5 10.5 5H13.5C13.776 5 14 5.224 14 5.5V7H10V5.5ZM9 19H15V9H9V19ZM19 7H16V5.5C16 4.122 14.878 3 13.5 3H10.5C9.122 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z"
        />
      ),
    }),
)
