/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="UmbrellaIcon/Fill/umbrella">
          <path
            id="UmbrellaMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.486 2 2 6.486 2 12C2 12.553 2.447 13 3 13H11V19C11 20.654 12.346 22 14 22C15.654 22 17 20.654 17 19C17 18.447 16.553 18 16 18C15.447 18 15 18.447 15 19C15 19.552 14.552 20 14 20C13.448 20 13 19.552 13 19V13H21C21.553 13 22 12.553 22 12C22 6.486 17.514 2 12 2Z"
          />
          <mask
            id="Umbrellamask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="UmbrellaMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.486 2 2 6.486 2 12C2 12.553 2.447 13 3 13H11V19C11 20.654 12.346 22 14 22C15.654 22 17 20.654 17 19C17 18.447 16.553 18 16 18C15.447 18 15 18.447 15 19C15 19.552 14.552 20 14 20C13.448 20 13 19.552 13 19V13H21C21.553 13 22 12.553 22 12C22 6.486 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#Umbrellamask0)">
            <g id="Umbrella&#Umbrella240;&#Umbrella159;&#Umbrella142;&#Umbrella168; Color">
              <rect id="UmbrellaBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Umbrella-oIcon/Outline/umbrella">
          <path
            id="Umbrella-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.0625 11C4.5555 7.06 7.9275 4 11.9995 4C16.0725 4 19.4445 7.06 19.9375 11H4.0625ZM11.9995 2C6.4865 2 1.9995 6.486 1.9995 12C1.9995 12.553 2.4475 13 3.0005 13H10.9995V19C10.9995 20.654 12.3455 22 14.0005 22C15.6545 22 17.0005 20.654 17.0005 19C17.0005 18.447 16.5525 18 16.0005 18C15.4475 18 15.0005 18.447 15.0005 19C15.0005 19.552 14.5515 20 14.0005 20C13.4485 20 13.0005 19.552 13.0005 19V13H20.9995C21.5525 13 21.9995 12.553 21.9995 12C21.9995 6.486 17.5135 2 11.9995 2Z"
          />
          <mask
            id="Umbrella-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="1"
            y="2"
            width="21"
            height="20"
          >
            <path
              id="Umbrella-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.0625 11C4.5555 7.06 7.9275 4 11.9995 4C16.0725 4 19.4445 7.06 19.9375 11H4.0625ZM11.9995 2C6.4865 2 1.9995 6.486 1.9995 12C1.9995 12.553 2.4475 13 3.0005 13H10.9995V19C10.9995 20.654 12.3455 22 14.0005 22C15.6545 22 17.0005 20.654 17.0005 19C17.0005 18.447 16.5525 18 16.0005 18C15.4475 18 15.0005 18.447 15.0005 19C15.0005 19.552 14.5515 20 14.0005 20C13.4485 20 13.0005 19.552 13.0005 19V13H20.9995C21.5525 13 21.9995 12.553 21.9995 12C21.9995 6.486 17.5135 2 11.9995 2Z"
            />
          </mask>
          <g mask="url(#Umbrella-omask0)">
            <g id="Umbrella-o&#Umbrella-o240;&#Umbrella-o159;&#Umbrella-o142;&#Umbrella-o168; Color">
              <rect id="Umbrella-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
