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
          d="M19.7812 10.3755L15.7812 5.37551C15.4342 4.94451 14.8062 4.87351 14.3752 5.21951C13.9442 5.56351 13.8742 6.19351 14.2192 6.62451L16.9202 10.0005H8.00024C6.34524 10.0005 5.00024 11.3455 5.00024 13.0005V18.0005C5.00024 18.5525 5.44824 19.0005 6.00024 19.0005C6.55224 19.0005 7.00024 18.5525 7.00024 18.0005V13.0005C7.00024 12.4485 7.44824 12.0005 8.00024 12.0005H16.9202L14.2192 15.3755C13.8742 15.8065 13.9442 16.4365 14.3752 16.7805C14.5592 16.9285 14.7802 17.0005 14.9992 17.0005C15.2932 17.0005 15.5832 16.8715 15.7812 16.6245L19.7812 11.6245C20.0732 11.2595 20.0732 10.7405 19.7812 10.3755Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7812 10.3755L15.7812 5.37551C15.4342 4.94451 14.8062 4.87351 14.3752 5.21951C13.9442 5.56351 13.8742 6.19351 14.2192 6.62451L16.9202 10.0005H8.00024C6.34524 10.0005 5.00024 11.3455 5.00024 13.0005V18.0005C5.00024 18.5525 5.44824 19.0005 6.00024 19.0005C6.55224 19.0005 7.00024 18.5525 7.00024 18.0005V13.0005C7.00024 12.4485 7.44824 12.0005 8.00024 12.0005H16.9202L14.2192 15.3755C13.8742 15.8065 13.9442 16.4365 14.3752 16.7805C14.5592 16.9285 14.7802 17.0005 14.9992 17.0005C15.2932 17.0005 15.5832 16.8715 15.7812 16.6245L19.7812 11.6245C20.0732 11.2595 20.0732 10.7405 19.7812 10.3755Z"
        />
      ),
    }),
)
