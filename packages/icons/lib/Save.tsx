/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="SaveIcon/Fill/save">
          <path
            id="SaveMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2921 3.878L20.1211 8.707C20.6831 9.269 21.0001 10.033 21.0001 10.829V18C21.0001 19.657 19.6571 21 18.0001 21H16.0001V17C16.0001 15.897 15.1021 15 14.0001 15H10.0001C8.89712 15 8.00012 15.897 8.00012 17V21H6.00012C4.34312 21 3.00012 19.657 3.00012 18V6C3.00012 4.343 4.34312 3 6.00012 3H8.00012V10C8.00012 10.552 8.44712 11 9.00012 11H15.0001C15.5531 11 16.0001 10.552 16.0001 10C16.0001 9.448 15.5531 9 15.0001 9H10.0001V3H13.1721C13.9671 3 14.7301 3.316 15.2921 3.878ZM10 17H14L14.001 21H10V17Z"
          />
          <mask
            id="Savemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="19"
            height="18"
          >
            <path
              id="SaveMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.2921 3.878L20.1211 8.707C20.6831 9.269 21.0001 10.033 21.0001 10.829V18C21.0001 19.657 19.6571 21 18.0001 21H16.0001V17C16.0001 15.897 15.1021 15 14.0001 15H10.0001C8.89712 15 8.00012 15.897 8.00012 17V21H6.00012C4.34312 21 3.00012 19.657 3.00012 18V6C3.00012 4.343 4.34312 3 6.00012 3H8.00012V10C8.00012 10.552 8.44712 11 9.00012 11H15.0001C15.5531 11 16.0001 10.552 16.0001 10C16.0001 9.448 15.5531 9 15.0001 9H10.0001V3H13.1721C13.9671 3 14.7301 3.316 15.2921 3.878ZM10 17H14L14.001 21H10V17Z"
            />
          </mask>
          <g mask="url(#Savemask0)">
            <g id="Save&#Save240;&#Save159;&#Save142;&#Save168; Color">
              <rect id="SaveBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Save-oIcon/Outline/save">
          <path
            id="Save-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 18C19 18.551 18.552 19 18 19H16V16C16 15.448 15.553 15 15 15H9C8.447 15 8 15.448 8 16V19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H8V10C8 10.552 8.447 11 9 11H13C13.553 11 14 10.552 14 10C14 9.448 13.553 9 13 9H10V5H13.172C13.435 5 13.692 5.107 13.879 5.293L18.707 10.121C18.896 10.31 19 10.562 19 10.829V18ZM10 19H14V17H10V19ZM20.121 8.707L15.293 3.879C14.727 3.312 13.973 3 13.172 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H9H15H18C19.654 21 21 19.654 21 18V10.829C21 10.027 20.687 9.273 20.121 8.707Z"
          />
          <mask
            id="Save-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="Save-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 18C19 18.551 18.552 19 18 19H16V16C16 15.448 15.553 15 15 15H9C8.447 15 8 15.448 8 16V19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H8V10C8 10.552 8.447 11 9 11H13C13.553 11 14 10.552 14 10C14 9.448 13.553 9 13 9H10V5H13.172C13.435 5 13.692 5.107 13.879 5.293L18.707 10.121C18.896 10.31 19 10.562 19 10.829V18ZM10 19H14V17H10V19ZM20.121 8.707L15.293 3.879C14.727 3.312 13.973 3 13.172 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H9H15H18C19.654 21 21 19.654 21 18V10.829C21 10.027 20.687 9.273 20.121 8.707Z"
            />
          </mask>
          <g mask="url(#Save-omask0)">
            <g id="Save-o&#Save-o240;&#Save-o159;&#Save-o142;&#Save-o168; Color">
              <rect id="Save-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
