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
          d="M18.7684 6.64019L14.2924 12.0112L18.6074 17.3732C18.9534 17.8032 18.8854 18.4322 18.4554 18.7792C18.2704 18.9282 18.0484 19.0002 17.8284 19.0002C17.5364 19.0002 17.2464 18.8722 17.0484 18.6272L12.2204 12.6272C11.9224 12.2562 11.9264 11.7252 12.2314 11.3602L17.2314 5.36019C17.5854 4.93519 18.2154 4.87919 18.6404 5.23219C19.0644 5.58519 19.1214 6.21619 18.7684 6.64019ZM10.232 5.35989C10.585 4.93589 11.215 4.87889 11.64 5.23189C12.064 5.58589 12.121 6.21589 11.768 6.63989L7.29204 12.0109L11.607 17.3729C11.953 17.8029 11.885 18.4329 11.455 18.7789C11.27 18.9279 11.049 18.9999 10.828 18.9999C10.536 18.9999 10.246 18.8729 10.049 18.6269L5.22104 12.6269C4.92204 12.2559 4.92704 11.7259 5.23204 11.3599L10.232 5.35989Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7684 6.64019L14.2924 12.0112L18.6074 17.3732C18.9534 17.8032 18.8854 18.4322 18.4554 18.7792C18.2704 18.9282 18.0484 19.0002 17.8284 19.0002C17.5364 19.0002 17.2464 18.8722 17.0484 18.6272L12.2204 12.6272C11.9224 12.2562 11.9264 11.7252 12.2314 11.3602L17.2314 5.36019C17.5854 4.93519 18.2154 4.87919 18.6404 5.23219C19.0644 5.58519 19.1214 6.21619 18.7684 6.64019ZM10.232 5.35989C10.585 4.93589 11.215 4.87889 11.64 5.23189C12.064 5.58589 12.121 6.21589 11.768 6.63989L7.29204 12.0109L11.607 17.3729C11.953 17.8029 11.885 18.4329 11.455 18.7789C11.27 18.9279 11.049 18.9999 10.828 18.9999C10.536 18.9999 10.246 18.8729 10.049 18.6269L5.22104 12.6269C4.92204 12.2559 4.92704 11.7259 5.23204 11.3599L10.232 5.35989Z"
        />
      ),
    }),
)
