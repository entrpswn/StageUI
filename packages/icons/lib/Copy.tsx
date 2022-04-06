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
          d="M9 12V13H5.667C5.299 13 5 12.701 5 12.333V5.667C5 5.299 5.299 5 5.667 5H12.333C12.701 5 13 5.299 13 5.667V9H12C10.346 9 9 10.346 9 12ZM18 9H15V5.667C15 4.196 13.804 3 12.333 3H5.667C4.196 3 3 4.196 3 5.667V12.333C3 13.804 4.196 15 5.667 15H9V18C9 19.654 10.346 21 12 21H18C19.654 21 21 19.654 21 18V12C21 10.346 19.654 9 18 9Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z"
        />
      ),
    }),
)
