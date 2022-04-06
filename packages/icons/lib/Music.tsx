/**
The MIT License (MIT)
*/
import React from 'react'

import { Props, createIcon } from '../Icon'

export default React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
    createIcon(props, ref, {
      filled: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9472 14.9922V4.0002C18.9472 3.6972 18.8092 3.4092 18.5732 3.2202C18.3362 3.0302 18.0242 2.9582 17.7302 3.0242L8.75919 5.0172C8.30119 5.1192 7.97519 5.5252 7.97519 5.9932V14.3342C7.53519 14.1342 7.05119 14.0152 6.53619 14.0152C4.61019 14.0152 3.04419 15.5822 3.04419 17.5082C3.04419 19.4332 4.61019 21.0002 6.53619 21.0002C8.46219 21.0002 10.0282 19.4332 10.0282 17.5082C10.0282 17.3292 10.0022 17.1582 9.97519 16.9862V6.7962L16.9472 5.2462V12.3412C16.5072 12.1402 16.0222 12.0222 15.5082 12.0222C13.5822 12.0222 12.0152 13.5882 12.0152 15.5142C12.0152 17.4402 13.5822 19.0062 15.5082 19.0062C17.4332 19.0062 19.0002 17.4402 19.0002 15.5142C19.0002 15.3352 18.9732 15.1642 18.9472 14.9922Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5077 17.0063C14.6847 17.0063 14.0157 16.3373 14.0157 15.5143C14.0157 14.6913 14.6847 14.0223 15.5077 14.0223C16.2287 14.0223 16.8297 14.5343 16.9697 15.2133V15.2143C16.9887 15.3113 16.9997 15.4113 16.9997 15.5143C16.9997 16.3373 16.3307 17.0063 15.5077 17.0063ZM6.5357 19.0003C5.7127 19.0003 5.0437 18.3303 5.0437 17.5073C5.0437 16.6853 5.7127 16.0153 6.5357 16.0153C7.2557 16.0153 7.8577 16.5273 7.9977 17.2063V17.2093C8.0177 17.3053 8.0287 17.4053 8.0287 17.5073C8.0287 18.3303 7.3597 19.0003 6.5357 19.0003ZM18.9467 14.9923V4.00027C18.9467 3.69627 18.8097 3.40927 18.5727 3.21927C18.3357 3.03027 18.0247 2.95827 17.7307 3.02427L8.7587 5.01727C8.3007 5.11927 7.9757 5.52527 7.9757 5.99327V14.3343C7.5347 14.1343 7.0507 14.0153 6.5357 14.0153C4.6107 14.0153 3.0437 15.5823 3.0437 17.5073C3.0437 19.4333 4.6107 21.0003 6.5357 21.0003C8.4617 21.0003 10.0287 19.4333 10.0287 17.5073C10.0287 17.3293 10.0017 17.1573 9.9757 16.9853V6.79627L16.9467 5.24627V12.3403C16.5067 12.1403 16.0227 12.0223 15.5077 12.0223C13.5817 12.0223 12.0157 13.5883 12.0157 15.5143C12.0157 17.4403 13.5817 19.0063 15.5077 19.0063C17.4337 19.0063 18.9997 17.4403 18.9997 15.5143C18.9997 15.3353 18.9737 15.1643 18.9467 14.9923Z"
        />
      ),
    }),
)
