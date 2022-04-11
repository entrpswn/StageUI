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
          d="M15.9996 12.9992C15.4476 12.9992 14.9996 12.5512 14.9996 11.9992C14.9996 11.4472 15.4476 10.9992 15.9996 10.9992C16.5516 10.9992 16.9996 11.4472 16.9996 11.9992C16.9996 12.5512 16.5516 12.9992 15.9996 12.9992ZM11.9996 12.9992C11.4476 12.9992 10.9996 12.5512 10.9996 11.9992C10.9996 11.4472 11.4476 10.9992 11.9996 10.9992C12.5516 10.9992 12.9996 11.4472 12.9996 11.9992C12.9996 12.5512 12.5516 12.9992 11.9996 12.9992ZM7.99961 12.9992C7.44761 12.9992 6.99961 12.5512 6.99961 11.9992C6.99961 11.4472 7.44761 10.9992 7.99961 10.9992C8.55161 10.9992 8.99961 11.4472 8.99961 11.9992C8.99961 12.5512 8.55161 12.9992 7.99961 12.9992ZM19.0706 4.92817C16.7866 2.64417 13.6256 1.62517 10.3966 2.12417C6.31961 2.76017 2.93961 6.04417 2.17661 10.1112C1.80961 12.0692 2.02061 14.0632 2.78761 15.8762C2.88561 16.1062 2.91561 16.3222 2.87661 16.5152L2.01961 20.8032C1.95361 21.1312 2.05661 21.4702 2.29261 21.7062C2.48161 21.8952 2.73661 21.9992 2.99961 21.9992C3.06461 21.9992 3.13061 21.9932 3.19561 21.9792L7.47861 21.1232C7.72461 21.0762 7.96361 21.1452 8.12261 21.2112C9.93661 21.9782 11.9306 22.1882 13.8876 21.8222C17.9546 21.0592 21.2386 17.6792 21.8746 13.6022C22.3776 10.3742 21.3556 7.21317 19.0706 4.92817Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.0002 10.9993C7.0002 10.4473 7.4482 9.99927 8.0002 9.99927C8.5522 9.99927 9.0002 10.4473 9.0002 10.9993C9.0002 11.5513 8.5522 11.9993 8.0002 11.9993C7.4482 11.9993 7.0002 11.5513 7.0002 10.9993ZM12.0002 9.99927C11.4482 9.99927 11.0002 10.4473 11.0002 10.9993C11.0002 11.5513 11.4482 11.9993 12.0002 11.9993C12.5522 11.9993 13.0002 11.5513 13.0002 10.9993C13.0002 10.4473 12.5522 9.99927 12.0002 9.99927ZM16.0002 9.99927C15.4482 9.99927 15.0002 10.4473 15.0002 10.9993C15.0002 11.5513 15.4482 11.9993 16.0002 11.9993C16.5522 11.9993 17.0002 11.5513 17.0002 10.9993C17.0002 10.4473 16.5522 9.99927 16.0002 9.99927ZM19.8986 12.2942C19.3916 15.5482 16.7686 18.2472 13.5196 18.8562C11.9506 19.1522 10.3526 18.9832 8.9026 18.3692C8.4916 18.1952 8.0666 18.1072 7.6496 18.1072C7.4596 18.1072 7.2716 18.1252 7.0866 18.1622L4.2746 18.7242L4.8376 15.9072C4.9556 15.3222 4.8836 14.6962 4.6306 14.0972C4.0166 12.6472 3.8486 11.0502 4.1436 9.48017C4.7526 6.23117 7.4506 3.60817 10.7056 3.10117C13.2956 2.69817 15.8286 3.51417 17.6566 5.34217C19.4856 7.17117 20.3026 9.70517 19.8986 12.2942ZM19.0716 3.92817C16.7866 1.64417 13.6266 0.625171 10.3976 1.12417C6.3206 1.76017 2.9406 5.04417 2.1776 9.11117C1.8096 11.0692 2.0216 13.0632 2.7886 14.8762C2.8856 15.1072 2.9156 15.3222 2.8776 15.5152L2.0196 19.8032C1.9536 20.1312 2.0566 20.4702 2.2936 20.7062C2.4826 20.8962 2.7376 20.9992 3.0006 20.9992C3.0656 20.9992 3.1306 20.9932 3.1966 20.9802L7.4796 20.1232C7.7256 20.0762 7.9636 20.1452 8.1226 20.2112C9.9376 20.9782 11.9316 21.1892 13.8876 20.8222C17.9556 20.0592 21.2396 16.6792 21.8756 12.6022C22.3776 9.37517 21.3566 6.21317 19.0716 3.92817Z"
        />
      ),
    }),
)
