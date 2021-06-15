/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M20.0002 21.0001C19.8082 21.0001 19.6162 20.9451 19.4482 20.8341L12.5522 16.2671C12.2172 16.0451 11.7832 16.0451 11.4482 16.2671L4.55223 20.8341C4.17423 21.0831 3.67623 21.0491 3.33723 20.7491C2.99823 20.4481 2.90323 19.9581 3.10523 19.5531L11.1052 3.5531C11.4742 2.8151 12.5262 2.8151 12.8952 3.5531L20.8952 19.5531C21.0972 19.9581 21.0022 20.4481 20.6632 20.7491C20.4752 20.9151 20.2382 21.0001 20.0002 21.0001Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M12 13.7021C12.192 13.7021 12.385 13.7581 12.552 13.8681L17.432 17.0991L12 6.23609L6.56798 17.0991L11.448 13.8681C11.615 13.7581 11.808 13.7021 12 13.7021ZM20 21.0001C19.808 21.0001 19.616 20.9451 19.448 20.8341L12 15.9011L4.55198 20.8341C4.17398 21.0831 3.67598 21.0491 3.33698 20.7491C2.99798 20.4481 2.90298 19.9581 3.10498 19.5531L11.105 3.55309C11.444 2.87509 12.556 2.87509 12.895 3.55309L20.895 19.5531C21.097 19.9581 21.002 20.4481 20.663 20.7491C20.475 20.9151 20.238 21.0001 20 21.0001Z"/>,
    })
))