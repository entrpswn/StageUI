/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M20.3333 16.3333C20.3333 16.824 19.9351 17.2222 19.4444 17.2222C18.9537 17.2222 18.5555 16.824 18.5555 16.3333C18.5555 15.8427 18.9537 15.4444 19.4444 15.4444C19.9351 15.4444 20.3333 15.8427 20.3333 16.3333ZM9.66661 16.3333C9.66661 16.824 9.26839 17.2222 8.77772 17.2222C8.28706 17.2222 7.88883 16.824 7.88883 16.3333C7.88883 15.8427 8.28706 15.4444 8.77772 15.4444C9.26839 15.4444 9.66661 15.8427 9.66661 16.3333ZM22.6666 10.3058L18.5555 7.01689V4.77778C18.5555 3.79733 17.8328 3 16.9439 3H6.83283C5.94483 3 5.22217 3.79733 5.22217 4.77778V13.6667C5.22217 14.4427 5.67817 15.0969 6.3075 15.3396C6.18306 15.6471 6.11106 15.9813 6.11106 16.3333C6.11106 17.8036 7.3075 19 8.77772 19C10.2479 19 11.4444 17.8036 11.4444 16.3333C11.4444 16.0196 11.3804 15.7236 11.2799 15.4444H14.1111H16.9422C16.8417 15.7236 16.7777 16.0196 16.7777 16.3333C16.7777 17.8036 17.9742 19 19.4444 19C20.9146 19 22.1111 17.8036 22.1111 16.3333C22.1111 16.0196 22.0471 15.7236 21.9466 15.4444H22.1111C22.6026 15.4444 22.9999 15.0471 22.9999 14.5556V11C22.9999 10.7298 22.8773 10.4747 22.6666 10.3058ZM23 20H1C0.45 20 0 20.45 0 21C0 21.55 0.45 22 1 22H23C23.55 22 24 21.55 24 21C24 20.45 23.55 20 23 20ZM1 17H3C3.55 17 4 17.45 4 18C4 18.55 3.55 19 3 19H1C0.45 19 0 18.55 0 18C0 17.45 0.45 17 1 17Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M20.3333 16.3333C20.3333 16.824 19.9351 17.2222 19.4444 17.2222C18.9537 17.2222 18.5555 16.824 18.5555 16.3333C18.5555 15.8427 18.9537 15.4444 19.4444 15.4444C19.9351 15.4444 20.3333 15.8427 20.3333 16.3333ZM14.1111 13.6667H6.99995L7.01417 4.77778H16.7777L16.7635 13.6667H14.1111ZM9.66661 16.3333C9.66661 16.824 9.26839 17.2222 8.77772 17.2222C8.28706 17.2222 7.88883 16.824 7.88883 16.3333C7.88883 15.8427 8.28706 15.4444 8.77772 15.4444C9.26839 15.4444 9.66661 15.8427 9.66661 16.3333ZM21.2222 11.4267V13.6667H18.5555V9.29427L21.2222 11.4267ZM22.6666 10.3058L18.5555 7.01689V4.77778C18.5555 3.79733 17.8328 3 16.9439 3H6.83283C5.94483 3 5.22217 3.79733 5.22217 4.77778V13.6667C5.22217 14.4427 5.67817 15.0969 6.3075 15.3396C6.18306 15.6471 6.11106 15.9813 6.11106 16.3333C6.11106 17.8036 7.3075 19 8.77772 19C10.2479 19 11.4444 17.8036 11.4444 16.3333C11.4444 16.0196 11.3804 15.7236 11.2799 15.4444H14.1111H16.9422C16.8417 15.7236 16.7777 16.0196 16.7777 16.3333C16.7777 17.8036 17.9742 19 19.4444 19C20.9146 19 22.1111 17.8036 22.1111 16.3333C22.1111 16.0196 22.0471 15.7236 21.9466 15.4444H22.1111C22.6026 15.4444 22.9999 15.0471 22.9999 14.5556V11C22.9999 10.7298 22.8773 10.4747 22.6666 10.3058ZM23 20H1C0.45 20 0 20.45 0 21C0 21.55 0.45 22 1 22H23C23.55 22 24 21.55 24 21C24 20.45 23.55 20 23 20ZM1 17H3C3.55 17 4 17.45 4 18C4 18.55 3.55 19 3 19H1C0.45 19 0 18.55 0 18C0 17.45 0.45 17 1 17Z"/>,
    })
))