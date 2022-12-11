/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m3.9355 6h16.129c.515 0 .936.421.936.936v.128c0 .515-.421.936-.936.936h-16.129c-.515 0-.935-.421-.935-.936v-.128c0-.515.42-.936.935-.936zm1.0645 6.0001c0 .553-.448 1-1 1s-1-.447-1-1 .448-1 1-1 1 .447 1 1zm2.9355-1h12.129c.515 0 .936.421.936.936v.128c0 .515-.421.936-.936.936h-12.129c-.515 0-.935-.421-.935-.936v-.128c0-.515.42-.936.935-.936zm12.129 4.9998h-16.129c-.515 0-.935.421-.935.936v.128c0 .515.42.936.935.936h16.129c.515 0 .936-.421.936-.936v-.128c0-.515-.421-.936-.936-.936z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m3.9355 6h16.129c.515 0 .936.421.936.936v.128c0 .515-.421.936-.936.936h-16.129c-.515 0-.935-.421-.935-.936v-.128c0-.515.42-.936.935-.936zm1.0645 6.0001c0 .553-.448 1-1 1s-1-.447-1-1 .448-1 1-1 1 .447 1 1zm2.9355-1h12.129c.515 0 .936.421.936.936v.128c0 .515-.421.936-.936.936h-12.129c-.515 0-.935-.421-.935-.936v-.128c0-.515.42-.936.935-.936zm12.129 4.9998h-16.129c-.515 0-.935.421-.935.936v.128c0 .515.42.936.935.936h16.129c.515 0 .936-.421.936-.936v-.128c0-.515-.421-.936-.936-.936z" fillRule="evenodd"/>,
    })
))