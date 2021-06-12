/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ArrowIosRightIcon/Fill/arrow-ios-right">
          <path
            id="ArrowIosRightMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.62701C9.0465 6.19701 9.1145 5.56701 9.5445 5.22101C9.9755 4.87501 10.6045 4.94301 10.9515 5.37301L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
          />
          <mask
            id="ArrowIosRightmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="5"
            width="8"
            height="14"
          >
            <path
              id="ArrowIosRightMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.62701C9.0465 6.19701 9.1145 5.56701 9.5445 5.22101C9.9755 4.87501 10.6045 4.94301 10.9515 5.37301L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
            />
          </mask>
          <g mask="url(#ArrowIosRightmask0)">
            <g id="ArrowIosRight&#ArrowIosRight240;&#ArrowIosRight159;&#ArrowIosRight142;&#ArrowIosRight168; Color">
              <rect id="ArrowIosRightBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ArrowIosRight-oIcon/Outline/arrow-ios-right">
          <path
            id="ArrowIosRight-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.62701C9.0465 6.19701 9.1145 5.56701 9.5445 5.22101C9.9755 4.87501 10.6045 4.94301 10.9515 5.37301L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
          />
          <mask
            id="ArrowIosRight-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="5"
            width="8"
            height="14"
          >
            <path
              id="ArrowIosRight-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.62701C9.0465 6.19701 9.1145 5.56701 9.5445 5.22101C9.9755 4.87501 10.6045 4.94301 10.9515 5.37301L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
            />
          </mask>
          <g mask="url(#ArrowIosRight-omask0)">
            <g id="ArrowIosRight-o&#ArrowIosRight-o240;&#ArrowIosRight-o159;&#ArrowIosRight-o142;&#ArrowIosRight-o168; Color">
              <rect id="ArrowIosRight-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
