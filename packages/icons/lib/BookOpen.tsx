/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="BookOpenIcon/Fill/book-open">
          <path
            id="BookOpenMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9386 4.11089C20.3196 4.01289 20.7106 4.09789 21.0176 4.33589C21.3246 4.57489 21.4996 4.93489 21.4996 5.32189V17.0079C21.4996 17.5789 21.1146 18.0769 20.5616 18.2189L12.9996 20.1599V5.89389L19.9386 4.11089ZM4.058 4.11059L11 5.89359V20.1606L3.438 18.2186C2.886 18.0776 2.5 17.5796 2.5 17.0076V5.32259C2.5 4.93459 2.676 4.57559 2.982 4.33559C3.288 4.09859 3.681 4.01559 4.058 4.11059Z"
          />
          <mask
            id="BookOpenmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="4"
            width="20"
            height="17"
          >
            <path
              id="BookOpenMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9386 4.11089C20.3196 4.01289 20.7106 4.09789 21.0176 4.33589C21.3246 4.57489 21.4996 4.93489 21.4996 5.32189V17.0079C21.4996 17.5789 21.1146 18.0769 20.5616 18.2189L12.9996 20.1599V5.89389L19.9386 4.11089ZM4.058 4.11059L11 5.89359V20.1606L3.438 18.2186C2.886 18.0776 2.5 17.5796 2.5 17.0076V5.32259C2.5 4.93459 2.676 4.57559 2.982 4.33559C3.288 4.09859 3.681 4.01559 4.058 4.11059Z"
            />
          </mask>
          <g mask="url(#BookOpenmask0)">
            <g id="BookOpen&#BookOpen240;&#BookOpen159;&#BookOpen142;&#BookOpen168; Color">
              <rect id="BookOpenBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="BookOpen-oIcon/Outline/book-open">
          <path
            id="BookOpen-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 16.4023L13 17.7503V7.5973L19 6.2503V16.4023ZM5 6.2503L11 7.5973V17.7503L5 16.4023V6.2503ZM20.625 4.2183C20.387 4.0293 20.077 3.9573 19.78 4.0243L12 5.7723L4.22 4.0243C3.922 3.9563 3.613 4.0293 3.375 4.2183C3.138 4.4093 3 4.6963 3 5.0003V17.2023C3 17.6703 3.324 18.0753 3.78 18.1773L11.78 19.9753C11.854 19.9923 11.927 20.0003 12 20.0003C12.073 20.0003 12.146 19.9923 12.22 19.9753L20.22 18.1773C20.676 18.0753 21 17.6703 21 17.2023V5.0003C21 4.6963 20.862 4.4093 20.625 4.2183Z"
          />
          <mask
            id="BookOpen-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="BookOpen-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 16.4023L13 17.7503V7.5973L19 6.2503V16.4023ZM5 6.2503L11 7.5973V17.7503L5 16.4023V6.2503ZM20.625 4.2183C20.387 4.0293 20.077 3.9573 19.78 4.0243L12 5.7723L4.22 4.0243C3.922 3.9563 3.613 4.0293 3.375 4.2183C3.138 4.4093 3 4.6963 3 5.0003V17.2023C3 17.6703 3.324 18.0753 3.78 18.1773L11.78 19.9753C11.854 19.9923 11.927 20.0003 12 20.0003C12.073 20.0003 12.146 19.9923 12.22 19.9753L20.22 18.1773C20.676 18.0753 21 17.6703 21 17.2023V5.0003C21 4.6963 20.862 4.4093 20.625 4.2183Z"
            />
          </mask>
          <g mask="url(#BookOpen-omask0)">
            <g id="BookOpen-o&#BookOpen-o240;&#BookOpen-o159;&#BookOpen-o142;&#BookOpen-o168; Color">
              <rect id="BookOpen-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
