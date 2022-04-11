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
          d="M10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM21 6H17C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6ZM17 20C17 20.552 16.553 21 16 21H4C3.447 21 3 20.552 3 20C3 16.14 6.141 13 10 13C13.859 13 17 16.14 17 20Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 5C11.103 5 12 5.897 12 7C12 8.103 11.103 9 10 9C8.897 9 8 8.103 8 7C8 5.897 8.897 5 10 5ZM10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM21 6H17C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6ZM3 20C3 16.14 6.141 13 10 13C13.859 13 17 16.14 17 20C17 20.552 16.553 21 16 21C15.447 21 15 20.552 15 20C15 17.243 12.757 15 10 15C7.243 15 5 17.243 5 20C5 20.552 4.553 21 4 21C3.447 21 3 20.552 3 20Z"
        />
      ),
    }),
)
