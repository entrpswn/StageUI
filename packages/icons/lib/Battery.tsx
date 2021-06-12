/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="BatteryIcon/Fill/battery">
          <path
            id="BatteryMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.16649 6H15.8335C17.0285 6 18.0005 7.089 18.0005 8.429V15.571C18.0005 16.911 17.0285 18 15.8335 18H4.16649C2.97149 18 2.00049 16.911 2.00049 15.571V8.429C2.00049 7.089 2.97149 6 4.16649 6ZM20 10C20 9.448 20.448 9 21 9C21.552 9 22 9.448 22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10Z"
          />
          <mask
            id="Batterymask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="6"
            width="20"
            height="12"
          >
            <path
              id="BatteryMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.16649 6H15.8335C17.0285 6 18.0005 7.089 18.0005 8.429V15.571C18.0005 16.911 17.0285 18 15.8335 18H4.16649C2.97149 18 2.00049 16.911 2.00049 15.571V8.429C2.00049 7.089 2.97149 6 4.16649 6ZM20 10C20 9.448 20.448 9 21 9C21.552 9 22 9.448 22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10Z"
            />
          </mask>
          <g mask="url(#Batterymask0)">
            <g id="Battery&#Battery240;&#Battery159;&#Battery142;&#Battery168; Color">
              <rect id="BatteryBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Battery-oIcon/Outline/battery">
          <path
            id="Battery-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.828 16.0003C15.879 15.9773 16 15.8243 16 15.5713V8.42831C16 8.17031 15.874 8.01631 15.824 7.99831L4.167 8.00031C4.126 8.01631 4 8.17031 4 8.42831V15.5713C4 15.8293 4.126 15.9833 4.176 16.0013L15.828 16.0003ZM4.167 6.00031H15.833C17.028 6.00031 18 7.08931 18 8.42831V15.5713C18 16.9103 17.028 18.0003 15.833 18.0003H4.167C2.972 18.0003 2 16.9103 2 15.5713V8.42831C2 7.08931 2.972 6.00031 4.167 6.00031ZM20 10C20 9.44801 20.448 9.00001 21 9.00001C21.552 9.00001 22 9.44801 22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10Z"
          />
          <mask
            id="Battery-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="6"
            width="20"
            height="13"
          >
            <path
              id="Battery-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.828 16.0003C15.879 15.9773 16 15.8243 16 15.5713V8.42831C16 8.17031 15.874 8.01631 15.824 7.99831L4.167 8.00031C4.126 8.01631 4 8.17031 4 8.42831V15.5713C4 15.8293 4.126 15.9833 4.176 16.0013L15.828 16.0003ZM4.167 6.00031H15.833C17.028 6.00031 18 7.08931 18 8.42831V15.5713C18 16.9103 17.028 18.0003 15.833 18.0003H4.167C2.972 18.0003 2 16.9103 2 15.5713V8.42831C2 7.08931 2.972 6.00031 4.167 6.00031ZM20 10C20 9.44801 20.448 9.00001 21 9.00001C21.552 9.00001 22 9.44801 22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10Z"
            />
          </mask>
          <g mask="url(#Battery-omask0)">
            <g id="Battery-o&#Battery-o240;&#Battery-o159;&#Battery-o142;&#Battery-o168; Color">
              <rect id="Battery-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
