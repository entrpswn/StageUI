/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13 9.54007v-4.54c0-.267-.103-.513-.287-.694-.199-.204-.446-.306-.713-.306-.552 0-1 .449-1 1v4.54zm-1 12.45993c-2.75702 0-5.00002-2.243-5.00002-5 0-1.58.754-3.063 2-3.997v-8.003c0-1.654 1.34602-3 3.00002-3 .812 0 1.566.317 2.127.892.557.542.873 1.297.873 2.108v8.003c1.246.934 2 2.417 2 3.997 0 2.757-2.243 5-5 5z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 4.00007c-.552 0-1 .449-1 .99999v8.54004c0 .358-.191.689-.502.867-.92398.531-1.49798 1.525-1.49798 2.593 0 1.654 1.34598 3 2.99998 3s3-1.346 3-3c0-1.068-.574-2.062-1.498-2.593-.311-.178-.502-.509-.502-.867v-8.54004c0-.26699-.103-.51299-.287-.69399-.199-.204-.446-.306-.713-.306zm0 17.99993c-2.757 0-5-2.243-5-5 0-1.58.754-3.062 2-3.997v-8.003c0-1.654 1.346-3 3-3 .812 0 1.566.317 2.127.892.557.542.873 1.297.873 2.108v8.003c1.246.935 2 2.417 2 3.997 0 2.757-2.243 5-5 5z" fillRule="evenodd"/>,
    })
))