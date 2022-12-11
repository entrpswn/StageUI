/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18.4502 6.20121c-.734-.345-1.601-.243-2.209.26l-4.741 3.91599v-2.58999c0-.673-.403-1.28-1.05-1.586-.73401-.345-1.60101-.243-2.20901.26l-5.1 4.21299c-.407.336-.641.82-.641 1.326s.234.99.641 1.326l5.1 4.214c.368.304.832.461 1.303.461.307 0 .61701-.067.90601-.202.647-.306 1.05-.913 1.05-1.586v-2.591l4.741 3.918c.368.304.832.461 1.303.461.307 0 .617-.067.906-.202.647-.306 1.05-.913 1.05-1.586v-8.42599c0-.673-.403-1.28-1.05-1.586" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17.5 15.9853-4.822-3.983 4.822-3.91101zm-8.00001 0-4.822-3.983 4.822-3.91101zm8.95001-9.78384c-.734-.345-1.601-.243-2.209.26l-4.741 3.91604v-2.59004c0-.673-.402-1.281-1.05-1.586-.734-.345-1.601-.243-2.209.26l-5.1 4.21204c-.407.336-.641.821-.641 1.327s.234.99.642 1.326l5.099 4.214c.368.303.832.461 1.303.461.307 0 .617-.067.906-.203.648-.305 1.05-.913 1.05-1.585v-2.591l4.741 3.918c.368.303.832.461 1.303.461.307 0 .617-.067.906-.203.648-.305 1.05-.913 1.05-1.585v-8.42604c0-.673-.402-1.281-1.05-1.586z" fillRule="evenodd"/>,
    })
))