/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M15.6905 13.8613L12.6905 16.7233C12.6455 16.7663 12.5895 16.7873 12.5395 16.8203C12.4855 16.8563 12.4375 16.8993 12.3775 16.9243C12.2565 16.9733 12.1285 17.0003 12.0005 17.0003C11.8695 17.0003 11.7395 16.9733 11.6175 16.9233C11.4955 16.8723 11.3845 16.7993 11.2925 16.7063L8.29349 13.7073C7.90249 13.3163 7.90249 12.6833 8.29349 12.2933C8.68349 11.9023 9.31649 11.9023 9.70749 12.2933L11.0005 13.5863V8.00031C11.0005 7.44731 11.4475 7.00031 12.0005 7.00031C12.5525 7.00031 13.0005 7.44731 13.0005 8.00031V13.6633L14.3095 12.4143C14.7095 12.0333 15.3415 12.0473 15.7235 12.4473C16.1055 12.8473 16.0895 13.4803 15.6905 13.8613ZM12.0005 2.00031C6.48549 2.00031 2.00049 6.48631 2.00049 12.0003C2.00049 17.5143 6.48549 22.0003 12.0005 22.0003C17.5145 22.0003 22.0005 17.5143 22.0005 12.0003C22.0005 6.48631 17.5145 2.00031 12.0005 2.00031Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M14.3096 12.4141L12.9996 13.6641V8.0001C12.9996 7.4481 12.5526 7.0001 11.9996 7.0001C11.4476 7.0001 10.9996 7.4481 10.9996 8.0001V13.5861L9.7066 12.2931C9.3166 11.9021 8.6836 11.9021 8.2926 12.2931C7.9026 12.6841 7.9026 13.3161 8.2926 13.7071L11.2926 16.7061C11.3846 16.7991 11.4956 16.8721 11.6176 16.9231C11.7396 16.9741 11.8696 17.0001 11.9996 17.0001C12.1286 17.0001 12.2566 16.9731 12.3766 16.9241C12.4376 16.8991 12.4856 16.8561 12.5386 16.8201C12.5896 16.7871 12.6456 16.7671 12.6906 16.7241L15.6906 13.8611C16.0896 13.4801 16.1046 12.8471 15.7236 12.4471C15.3416 12.0471 14.7096 12.0331 14.3096 12.4141ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
    })
))