/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="FunnelIcon/Fill/funnel">
          <path
            id="FunnelMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9033 22C13.6893 22 13.4773 21.932 13.3003 21.797L9.27426 18.752C9.02426 18.563 8.87726 18.268 8.87726 17.955V14.681L4.11126 5.459C3.95126 5.149 3.96426 4.778 4.14626 4.48C4.32726 4.182 4.65126 4 5.00026 4H19.0003C19.3523 4 19.6783 4.185 19.8593 4.488C20.0393 4.79 20.0473 5.166 19.8803 5.475L14.9033 14.69V21C14.9033 21.379 14.6883 21.726 14.3483 21.896C14.2073 21.965 14.0553 22 13.9033 22Z"
          />
          <mask
            id="Funnelmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="4"
            width="18"
            height="18"
          >
            <path
              id="FunnelMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9033 22C13.6893 22 13.4773 21.932 13.3003 21.797L9.27426 18.752C9.02426 18.563 8.87726 18.268 8.87726 17.955V14.681L4.11126 5.459C3.95126 5.149 3.96426 4.778 4.14626 4.48C4.32726 4.182 4.65126 4 5.00026 4H19.0003C19.3523 4 19.6783 4.185 19.8593 4.488C20.0393 4.79 20.0473 5.166 19.8803 5.475L14.9033 14.69V21C14.9033 21.379 14.6883 21.726 14.3483 21.896C14.2073 21.965 14.0553 22 13.9033 22Z"
            />
          </mask>
          <g mask="url(#Funnelmask0)">
            <g id="Funnel&#Funnel240;&#Funnel159;&#Funnel142;&#Funnel168; Color">
              <rect id="FunnelBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Funnel-oIcon/Outline/funnel">
          <path
            id="Funnel-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.877 17.457L12.903 18.99V14.437C12.903 14.271 12.945 14.108 13.023 13.962L17.323 6H6.64301L10.765 13.978C10.839 14.12 10.877 14.278 10.877 14.437V17.457ZM13.903 22C13.69 22 13.477 21.932 13.3 21.797L9.27401 18.752C9.02401 18.563 8.87702 18.268 8.87702 17.955V14.681L4.11201 5.459C3.95101 5.149 3.96401 4.778 4.14601 4.48C4.32701 4.182 4.65101 4 5.00001 4H19C19.352 4 19.678 4.185 19.859 4.488C20.039 4.79 20.047 5.165 19.88 5.475L14.903 14.69V21C14.903 21.379 14.689 21.726 14.349 21.895C14.208 21.965 14.055 22 13.903 22Z"
          />
          <mask
            id="Funnel-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="4"
            width="17"
            height="18"
          >
            <path
              id="Funnel-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.877 17.457L12.903 18.99V14.437C12.903 14.271 12.945 14.108 13.023 13.962L17.323 6H6.64301L10.765 13.978C10.839 14.12 10.877 14.278 10.877 14.437V17.457ZM13.903 22C13.69 22 13.477 21.932 13.3 21.797L9.27401 18.752C9.02401 18.563 8.87702 18.268 8.87702 17.955V14.681L4.11201 5.459C3.95101 5.149 3.96401 4.778 4.14601 4.48C4.32701 4.182 4.65101 4 5.00001 4H19C19.352 4 19.678 4.185 19.859 4.488C20.039 4.79 20.047 5.165 19.88 5.475L14.903 14.69V21C14.903 21.379 14.689 21.726 14.349 21.895C14.208 21.965 14.055 22 13.903 22Z"
            />
          </mask>
          <g mask="url(#Funnel-omask0)">
            <g id="Funnel-o&#Funnel-o240;&#Funnel-o159;&#Funnel-o142;&#Funnel-o168; Color">
              <rect id="Funnel-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
