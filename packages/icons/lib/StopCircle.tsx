/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="StopCircleIcon/Fill/stop-circle">
          <path
            id="StopCircleMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 14H14V10H10V14ZM16 14.75C16 15.439 15.439 16 14.75 16H9.25C8.561 16 8 15.439 8 14.75V9.25C8 8.561 8.561 8 9.25 8H14.75C15.439 8 16 8.561 16 9.25V14.75ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
          />
          <mask
            id="StopCirclemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="StopCircleMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 14H14V10H10V14ZM16 14.75C16 15.439 15.439 16 14.75 16H9.25C8.561 16 8 15.439 8 14.75V9.25C8 8.561 8.561 8 9.25 8H14.75C15.439 8 16 8.561 16 9.25V14.75ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#StopCirclemask0)">
            <g id="StopCircle&#StopCircle240;&#StopCircle159;&#StopCircle142;&#StopCircle168; Color">
              <rect id="StopCircleBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="StopCircle-oIcon/Outline/stop-circle">
          <path
            id="StopCircle-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 14H14V10H10V14ZM14.75 8H9.25C8.561 8 8 8.561 8 9.25V14.75C8 15.439 8.561 16 9.25 16H14.75C15.439 16 16 15.439 16 14.75V9.25C16 8.561 15.439 8 14.75 8ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
          />
          <mask
            id="StopCircle-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="StopCircle-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 14H14V10H10V14ZM14.75 8H9.25C8.561 8 8 8.561 8 9.25V14.75C8 15.439 8.561 16 9.25 16H14.75C15.439 16 16 15.439 16 14.75V9.25C16 8.561 15.439 8 14.75 8ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#StopCircle-omask0)">
            <g id="StopCircle-o&#StopCircle-o240;&#StopCircle-o159;&#StopCircle-o142;&#StopCircle-o168; Color">
              <rect id="StopCircle-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
