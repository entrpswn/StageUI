/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="TriangleRightIcon/Fill/triangle-right">
          <path
            id="TriangleRightMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.956 18.0028C10.649 18.0028 10.339 17.9368 10.05 17.8008C9.402 17.4948 9 16.8878 9 16.2148V7.78878C9 7.11578 9.402 6.50878 10.05 6.20278C10.782 5.85778 11.65 5.95878 12.259 6.46178L17.358 10.6758C17.767 11.0118 18 11.4958 18 12.0018C18 12.5078 17.767 12.9918 17.358 13.3278L12.259 17.5408C11.891 17.8458 11.427 18.0028 10.956 18.0028Z"
          />
          <mask
            id="TriangleRightmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="6"
            width="9"
            height="13"
          >
            <path
              id="TriangleRightMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.956 18.0028C10.649 18.0028 10.339 17.9368 10.05 17.8008C9.402 17.4948 9 16.8878 9 16.2148V7.78878C9 7.11578 9.402 6.50878 10.05 6.20278C10.782 5.85778 11.65 5.95878 12.259 6.46178L17.358 10.6758C17.767 11.0118 18 11.4958 18 12.0018C18 12.5078 17.767 12.9918 17.358 13.3278L12.259 17.5408C11.891 17.8458 11.427 18.0028 10.956 18.0028Z"
            />
          </mask>
          <g mask="url(#TriangleRightmask0)">
            <g id="TriangleRight&#TriangleRight240;&#TriangleRight159;&#TriangleRight142;&#TriangleRight168; Color">
              <rect id="TriangleRightBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="TriangleRight-oIcon/Outline/triangle-right">
          <path
            id="TriangleRight-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 8.01459V15.9086L15.321 11.9976L10.5 8.01459ZM10.456 18.0006C10.149 18.0006 9.839 17.9346 9.55 17.7986C8.902 17.4936 8.5 16.8856 8.5 16.2126V7.78659C8.5 7.11459 8.902 6.50659 9.55 6.20159C10.282 5.85659 11.15 5.95659 11.759 6.45959L16.858 10.6736C17.267 11.0096 17.5 11.4936 17.5 11.9996C17.5 12.5056 17.267 12.9906 16.858 13.3266L11.759 17.5386C11.391 17.8436 10.927 18.0006 10.456 18.0006Z"
          />
          <mask
            id="TriangleRight-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="8"
            y="5"
            width="10"
            height="14"
          >
            <path
              id="TriangleRight-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 8.01459V15.9086L15.321 11.9976L10.5 8.01459ZM10.456 18.0006C10.149 18.0006 9.839 17.9346 9.55 17.7986C8.902 17.4936 8.5 16.8856 8.5 16.2126V7.78659C8.5 7.11459 8.902 6.50659 9.55 6.20159C10.282 5.85659 11.15 5.95659 11.759 6.45959L16.858 10.6736C17.267 11.0096 17.5 11.4936 17.5 11.9996C17.5 12.5056 17.267 12.9906 16.858 13.3266L11.759 17.5386C11.391 17.8436 10.927 18.0006 10.456 18.0006Z"
            />
          </mask>
          <g mask="url(#TriangleRight-omask0)">
            <g id="TriangleRight-o&#TriangleRight-o240;&#TriangleRight-o159;&#TriangleRight-o142;&#TriangleRight-o168; Color">
              <rect id="TriangleRight-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
