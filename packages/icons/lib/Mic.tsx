/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MicIcon/Fill/mic">
          <path
            id="MicMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 11C16 13.206 14.206 15 12 15C9.794 15 8 13.206 8 11V6C8 3.794 9.794 2 12 2C14.206 2 16 3.794 16 6V11ZM18 10C18.553 10 19 10.448 19 11C19 14.52 16.387 17.432 13 17.92V20H15.105C15.598 20 16 20.402 16 20.895V21.105C16 21.598 15.598 22 15.105 22H8.895C8.402 22 8 21.598 8 21.105V20.895C8 20.402 8.402 20 8.895 20H11V17.92C7.613 17.432 5 14.52 5 11C5 10.448 5.447 10 6 10C6.553 10 7 10.448 7 11C7 13.757 9.243 16 12 16C14.757 16 17 13.757 17 11C17 10.448 17.447 10 18 10Z"
          />
          <mask
            id="Micmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="2"
            width="14"
            height="20"
          >
            <path
              id="MicMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 11C16 13.206 14.206 15 12 15C9.794 15 8 13.206 8 11V6C8 3.794 9.794 2 12 2C14.206 2 16 3.794 16 6V11ZM18 10C18.553 10 19 10.448 19 11C19 14.52 16.387 17.432 13 17.92V20H15.105C15.598 20 16 20.402 16 20.895V21.105C16 21.598 15.598 22 15.105 22H8.895C8.402 22 8 21.598 8 21.105V20.895C8 20.402 8.402 20 8.895 20H11V17.92C7.613 17.432 5 14.52 5 11C5 10.448 5.447 10 6 10C6.553 10 7 10.448 7 11C7 13.757 9.243 16 12 16C14.757 16 17 13.757 17 11C17 10.448 17.447 10 18 10Z"
            />
          </mask>
          <g mask="url(#Micmask0)">
            <g id="Mic&#Mic240;&#Mic159;&#Mic142;&#Mic168; Color">
              <rect id="MicBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Mic-oIcon/Outline/mic">
          <path
            id="Mic-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C10.897 4 10 4.897 10 6V11C10 12.103 10.897 13 12 13C13.103 13 14 12.103 14 11V6C14 4.897 13.103 4 12 4ZM16 11C16 13.206 14.206 15 12 15C9.794 15 8 13.206 8 11V6C8 3.794 9.794 2 12 2C14.206 2 16 3.794 16 6V11ZM18 10C18.553 10 19 10.448 19 11C19 14.52 16.387 17.432 13 17.92V20H15.105C15.598 20 16 20.402 16 20.895V21.105C16 21.598 15.598 22 15.105 22H8.895C8.402 22 8 21.598 8 21.105V20.895C8 20.402 8.402 20 8.895 20H11V17.92C7.613 17.432 5 14.52 5 11C5 10.448 5.447 10 6 10C6.553 10 7 10.448 7 11C7 13.757 9.243 16 12 16C14.757 16 17 13.757 17 11C17 10.448 17.447 10 18 10Z"
          />
          <mask
            id="Mic-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="2"
            width="14"
            height="20"
          >
            <path
              id="Mic-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4C10.897 4 10 4.897 10 6V11C10 12.103 10.897 13 12 13C13.103 13 14 12.103 14 11V6C14 4.897 13.103 4 12 4ZM16 11C16 13.206 14.206 15 12 15C9.794 15 8 13.206 8 11V6C8 3.794 9.794 2 12 2C14.206 2 16 3.794 16 6V11ZM18 10C18.553 10 19 10.448 19 11C19 14.52 16.387 17.432 13 17.92V20H15.105C15.598 20 16 20.402 16 20.895V21.105C16 21.598 15.598 22 15.105 22H8.895C8.402 22 8 21.598 8 21.105V20.895C8 20.402 8.402 20 8.895 20H11V17.92C7.613 17.432 5 14.52 5 11C5 10.448 5.447 10 6 10C6.553 10 7 10.448 7 11C7 13.757 9.243 16 12 16C14.757 16 17 13.757 17 11C17 10.448 17.447 10 18 10Z"
            />
          </mask>
          <g mask="url(#Mic-omask0)">
            <g id="Mic-o&#Mic-o240;&#Mic-o159;&#Mic-o142;&#Mic-o168; Color">
              <rect id="Mic-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
