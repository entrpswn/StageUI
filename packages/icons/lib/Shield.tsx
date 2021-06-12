/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ShieldIcon/Fill/shield">
          <path
            id="ShieldMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21.851C11.661 21.851 11.322 21.767 11.021 21.597L10.718 21.426C5.957 18.748 3 13.692 3 8.23001V8.08501C3 7.36601 3.39 6.69801 4.018 6.34301L11.02 2.40501C11.625 2.06501 12.376 2.06401 12.979 2.40401L19.98 6.34201C20.61 6.69801 21 7.36601 21 8.08501V8.23001C21 13.692 18.043 18.748 13.282 21.426L12.98 21.596C12.678 21.766 12.339 21.851 12 21.851Z"
          />
          <mask
            id="Shieldmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="2"
            width="18"
            height="20"
          >
            <path
              id="ShieldMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 21.851C11.661 21.851 11.322 21.767 11.021 21.597L10.718 21.426C5.957 18.748 3 13.692 3 8.23001V8.08501C3 7.36601 3.39 6.69801 4.018 6.34301L11.02 2.40501C11.625 2.06501 12.376 2.06401 12.979 2.40401L19.98 6.34201C20.61 6.69801 21 7.36601 21 8.08501V8.23001C21 13.692 18.043 18.748 13.282 21.426L12.98 21.596C12.678 21.766 12.339 21.851 12 21.851Z"
            />
          </mask>
          <g mask="url(#Shieldmask0)">
            <g id="Shield&#Shield240;&#Shield159;&#Shield142;&#Shield168; Color">
              <rect id="ShieldBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Shield-oIcon/Outline/shield">
          <path
            id="Shield-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.14649L5 8.08449V8.22949C5 12.9695 7.566 17.3585 11.698 19.6835L12 19.8535L12.302 19.6835C16.434 17.3585 19 12.9695 19 8.22949V8.08449L12 4.14649ZM12 21.8505C11.661 21.8505 11.322 21.7665 11.021 21.5965L10.718 21.4255C5.957 18.7485 3 13.6915 3 8.22949V8.08449C3 7.36549 3.39 6.69749 4.018 6.34249L11.02 2.40449C11.625 2.06449 12.376 2.06349 12.979 2.40349L19.98 6.34149C20.61 6.69749 21 7.36549 21 8.08449V8.22949C21 13.6915 18.043 18.7485 13.282 21.4255L12.98 21.5955C12.678 21.7655 12.339 21.8505 12 21.8505Z"
          />
          <mask
            id="Shield-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="2"
            width="18"
            height="20"
          >
            <path
              id="Shield-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4.14649L5 8.08449V8.22949C5 12.9695 7.566 17.3585 11.698 19.6835L12 19.8535L12.302 19.6835C16.434 17.3585 19 12.9695 19 8.22949V8.08449L12 4.14649ZM12 21.8505C11.661 21.8505 11.322 21.7665 11.021 21.5965L10.718 21.4255C5.957 18.7485 3 13.6915 3 8.22949V8.08449C3 7.36549 3.39 6.69749 4.018 6.34249L11.02 2.40449C11.625 2.06449 12.376 2.06349 12.979 2.40349L19.98 6.34149C20.61 6.69749 21 7.36549 21 8.08449V8.22949C21 13.6915 18.043 18.7485 13.282 21.4255L12.98 21.5955C12.678 21.7655 12.339 21.8505 12 21.8505Z"
            />
          </mask>
          <g mask="url(#Shield-omask0)">
            <g id="Shield-o&#Shield-o240;&#Shield-o159;&#Shield-o142;&#Shield-o168; Color">
              <rect id="Shield-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
