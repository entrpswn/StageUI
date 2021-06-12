/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="TriangleLeftIcon/Fill/triangle-left">
          <path
            id="TriangleLeftMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5439 18.001C13.0729 18.001 12.6089 17.844 12.2409 17.54L7.14188 13.326C6.73388 12.99 6.49988 12.506 6.49988 12C6.49988 11.494 6.73388 11.01 7.14088 10.674L12.2409 6.46101C12.8489 5.95701 13.7159 5.85601 14.4499 6.20101C15.0979 6.50701 15.4999 7.11401 15.4999 7.78701V16.213C15.4999 16.886 15.0979 17.493 14.4499 17.799C14.1609 17.935 13.8509 18.001 13.5439 18.001Z"
          />
          <mask
            id="TriangleLeftmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="6"
            y="5"
            width="10"
            height="14"
          >
            <path
              id="TriangleLeftMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5439 18.001C13.0729 18.001 12.6089 17.844 12.2409 17.54L7.14188 13.326C6.73388 12.99 6.49988 12.506 6.49988 12C6.49988 11.494 6.73388 11.01 7.14088 10.674L12.2409 6.46101C12.8489 5.95701 13.7159 5.85601 14.4499 6.20101C15.0979 6.50701 15.4999 7.11401 15.4999 7.78701V16.213C15.4999 16.886 15.0979 17.493 14.4499 17.799C14.1609 17.935 13.8509 18.001 13.5439 18.001Z"
            />
          </mask>
          <g mask="url(#TriangleLeftmask0)">
            <g id="TriangleLeft&#TriangleLeft240;&#TriangleLeft159;&#TriangleLeft142;&#TriangleLeft168; Color">
              <rect id="TriangleLeftBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="TriangleLeft-oIcon/Outline/triangle-left">
          <path
            id="TriangleLeft-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.67821 12.002L13.5002 15.985V8.09201L8.67821 12.002ZM13.5442 18.001C13.0732 18.001 12.6092 17.844 12.2412 17.54L7.14121 13.326C6.73421 12.99 6.50021 12.506 6.50021 12C6.50021 11.494 6.73421 11.01 7.14121 10.674L12.2412 6.46101C12.8492 5.95701 13.7162 5.85601 14.4502 6.20101C15.0972 6.50701 15.5002 7.11401 15.5002 7.78701V16.213C15.5002 16.886 15.0972 17.493 14.4502 17.799C14.1612 17.935 13.8512 18.001 13.5442 18.001Z"
          />
          <mask
            id="TriangleLeft-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="6"
            y="5"
            width="10"
            height="14"
          >
            <path
              id="TriangleLeft-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.67821 12.002L13.5002 15.985V8.09201L8.67821 12.002ZM13.5442 18.001C13.0732 18.001 12.6092 17.844 12.2412 17.54L7.14121 13.326C6.73421 12.99 6.50021 12.506 6.50021 12C6.50021 11.494 6.73421 11.01 7.14121 10.674L12.2412 6.46101C12.8492 5.95701 13.7162 5.85601 14.4502 6.20101C15.0972 6.50701 15.5002 7.11401 15.5002 7.78701V16.213C15.5002 16.886 15.0972 17.493 14.4502 17.799C14.1612 17.935 13.8512 18.001 13.5442 18.001Z"
            />
          </mask>
          <g mask="url(#TriangleLeft-omask0)">
            <g id="TriangleLeft-o&#TriangleLeft-o240;&#TriangleLeft-o159;&#TriangleLeft-o142;&#TriangleLeft-o168; Color">
              <rect id="TriangleLeft-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
