/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="FolderRemoveIcon/Fill/folder-remove">
          <path
            id="FolderRemoveMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 15H10C9.45 15 9 14.55 9 14C9 13.45 9.45 13 10 13H14C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15ZM19.5 7.046H12.474L9.875 3.867C9.685 3.635 9.4 3.5 9.101 3.5H4.5C3.122 3.5 2 4.591 2 5.932V18.068C2 19.409 3.122 20.5 4.5 20.5H19.5C20.878 20.5 22 19.409 22 18.068V9.478C22 8.137 20.878 7.046 19.5 7.046Z"
          />
          <mask
            id="FolderRemovemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="FolderRemoveMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 15H10C9.45 15 9 14.55 9 14C9 13.45 9.45 13 10 13H14C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15ZM19.5 7.046H12.474L9.875 3.867C9.685 3.635 9.4 3.5 9.101 3.5H4.5C3.122 3.5 2 4.591 2 5.932V18.068C2 19.409 3.122 20.5 4.5 20.5H19.5C20.878 20.5 22 19.409 22 18.068V9.478C22 8.137 20.878 7.046 19.5 7.046Z"
            />
          </mask>
          <g mask="url(#FolderRemovemask0)">
            <g id="FolderRemove&#FolderRemove240;&#FolderRemove159;&#FolderRemove142;&#FolderRemove168; Color">
              <rect id="FolderRemoveBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="FolderRemove-oIcon/Outline/folder-remove">
          <path
            id="FolderRemove-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 13H10C9.45 13 9 13.45 9 14C9 14.55 9.45 15 10 15H14C14.55 15 15 14.55 15 14C15 13.45 14.55 13 14 13ZM20 18.0684C20 18.3064 19.776 18.5004 19.5 18.5004H4.5C4.224 18.5004 4 18.3064 4 18.0684V13.7554V5.93143C4 5.69343 4.224 5.50043 4.5 5.50043H8.626L11.226 8.67843C11.416 8.91143 11.7 9.04643 12 9.04643H19.5C19.776 9.04643 20 9.23943 20 9.47843V18.0684ZM19.5 7.04643H12.474L9.875 3.86743C9.685 3.63443 9.4 3.50043 9.101 3.50043H4.5C3.122 3.50043 2 4.59043 2 5.93143V18.0684C2 19.4094 3.122 20.5004 4.5 20.5004H19.5C20.878 20.5004 22 19.4094 22 18.0684V9.47843C22 8.13643 20.878 7.04643 19.5 7.04643Z"
          />
          <mask
            id="FolderRemove-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="FolderRemove-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 13H10C9.45 13 9 13.45 9 14C9 14.55 9.45 15 10 15H14C14.55 15 15 14.55 15 14C15 13.45 14.55 13 14 13ZM20 18.0684C20 18.3064 19.776 18.5004 19.5 18.5004H4.5C4.224 18.5004 4 18.3064 4 18.0684V13.7554V5.93143C4 5.69343 4.224 5.50043 4.5 5.50043H8.626L11.226 8.67843C11.416 8.91143 11.7 9.04643 12 9.04643H19.5C19.776 9.04643 20 9.23943 20 9.47843V18.0684ZM19.5 7.04643H12.474L9.875 3.86743C9.685 3.63443 9.4 3.50043 9.101 3.50043H4.5C3.122 3.50043 2 4.59043 2 5.93143V18.0684C2 19.4094 3.122 20.5004 4.5 20.5004H19.5C20.878 20.5004 22 19.4094 22 18.0684V9.47843C22 8.13643 20.878 7.04643 19.5 7.04643Z"
            />
          </mask>
          <g mask="url(#FolderRemove-omask0)">
            <g id="FolderRemove-o&#FolderRemove-o240;&#FolderRemove-o159;&#FolderRemove-o142;&#FolderRemove-o168; Color">
              <rect id="FolderRemove-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
