/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MinimizeIcon/Fill/minimize">
          <path
            id="MinimizeMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 12H9C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
          />
          <mask
            id="Minimizemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="19"
            height="18"
          >
            <path
              id="MinimizeMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 12H9C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
            />
          </mask>
          <g mask="url(#Minimizemask0)">
            <g id="Minimize&#Minimize240;&#Minimize159;&#Minimize142;&#Minimize168; Color">
              <rect id="MinimizeBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Minimize-oIcon/Outline/minimize">
          <path
            id="Minimize-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10ZM5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
          />
          <mask
            id="Minimize-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="19"
            height="18"
          >
            <path
              id="Minimize-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10ZM5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
            />
          </mask>
          <g mask="url(#Minimize-omask0)">
            <g id="Minimize-o&#Minimize-o240;&#Minimize-o159;&#Minimize-o142;&#Minimize-o168; Color">
              <rect id="Minimize-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
