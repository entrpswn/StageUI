/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M11.1817 15.0908C9.47772 15.0908 8.09072 13.7038 8.09072 11.9998C8.09072 10.2958 9.47772 8.9088 11.1817 8.9088C12.8857 8.9088 14.2727 10.2958 14.2727 11.9998C14.2727 13.7038 12.8857 15.0908 11.1817 15.0908ZM12.9547 2.0438C9.95372 1.7618 7.01872 2.8248 4.90572 4.9528C2.79172 7.0798 1.75072 10.0228 2.05072 13.0258C2.40872 16.5978 4.65972 19.7078 7.92672 21.1408C9.23372 21.7138 10.6197 21.9948 11.9957 21.9948C14.1637 21.9948 16.3087 21.2958 18.0797 19.9398C18.5187 19.6038 18.6017 18.9758 18.2657 18.5368C17.9297 18.0998 17.3027 18.0168 16.8637 18.3518C14.5457 20.1268 11.4297 20.4908 8.72972 19.3088C6.16172 18.1828 4.32272 15.6388 4.04072 12.8258C3.80072 10.4208 4.63272 8.0648 6.32472 6.3618C8.01472 4.6598 10.3667 3.8078 12.7697 4.0358C16.8247 4.4128 19.9997 8.0098 19.9997 12.2248V12.8998C19.9997 13.3678 19.8137 13.8038 19.4747 14.1278C19.1367 14.4518 18.6887 14.6178 18.2217 14.5978C17.3277 14.5588 16.5997 13.7178 16.5997 12.7238V8.3998C16.5997 7.8468 16.1527 7.3998 15.5997 7.3998C15.0907 7.3998 14.6887 7.7828 14.6247 8.2748C13.7167 7.4348 12.5127 6.9088 11.1817 6.9088C8.37472 6.9088 6.09072 9.1938 6.09072 11.9998C6.09072 14.8068 8.37472 17.0908 11.1817 17.0908C12.8817 17.0908 14.3807 16.2448 15.3057 14.9608C15.9507 15.9008 16.9737 16.5448 18.1337 16.5958C19.1467 16.6498 20.1207 16.2778 20.8577 15.5728C21.5947 14.8678 21.9997 13.9188 21.9997 12.8998V12.2248C21.9997 6.9878 18.0277 2.5168 12.9547 2.0438Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M11.1816 15.0908C9.4776 15.0908 8.0906 13.7038 8.0906 11.9998C8.0906 10.2958 9.4776 8.9088 11.1816 8.9088C12.8856 8.9088 14.2726 10.2958 14.2726 11.9998C14.2726 13.7038 12.8856 15.0908 11.1816 15.0908ZM12.9546 2.0438C9.95359 1.7618 7.01859 2.8248 4.9056 4.9528C2.79159 7.0798 1.7506 10.0228 2.0506 13.0258C2.4086 16.5978 4.6596 19.7078 7.9266 21.1408C9.2336 21.7138 10.6196 21.9948 11.9956 21.9948C14.1636 21.9948 16.3086 21.2958 18.0796 19.9398C18.5186 19.6038 18.6016 18.9758 18.2656 18.5368C17.9296 18.0998 17.3026 18.0168 16.8636 18.3518C14.5456 20.1268 11.4296 20.4908 8.7296 19.3088C6.1616 18.1828 4.3226 15.6388 4.0406 12.8258C3.8006 10.4208 4.6326 8.0648 6.32459 6.3618C8.0146 4.6598 10.3666 3.8078 12.7696 4.0358C16.8246 4.4128 19.9996 8.0098 19.9996 12.2248V12.8998C19.9996 13.3678 19.8136 13.8038 19.4746 14.1278C19.1366 14.4518 18.6886 14.6178 18.2216 14.5978C17.3276 14.5588 16.5996 13.7178 16.5996 12.7238V8.3998C16.5996 7.8468 16.1526 7.3998 15.5996 7.3998C15.0906 7.3998 14.6886 7.7828 14.6246 8.2748C13.7166 7.4348 12.5126 6.9088 11.1816 6.9088C8.37459 6.9088 6.0906 9.1938 6.0906 11.9998C6.0906 14.8068 8.37459 17.0908 11.1816 17.0908C12.8816 17.0908 14.3806 16.2448 15.3056 14.9608C15.9506 15.9008 16.9736 16.5448 18.1336 16.5958C19.1466 16.6498 20.1206 16.2778 20.8576 15.5728C21.5946 14.8678 21.9996 13.9188 21.9996 12.8998V12.2248C21.9996 6.9878 18.0276 2.5168 12.9546 2.0438Z"/>,
    })
))