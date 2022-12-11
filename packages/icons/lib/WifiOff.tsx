/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12.4365 11.0225-1.892-1.89201-2.462-2.463-1.551-1.55-1.824-1.824c-.391-.391-1.024-.391-1.415 0-.39.39-.39 1.023 0 1.414l1.376 1.376 1.461 1.46 2.234 2.234 1.546 1.54601 2.739 2.739 2.793 2.793 3.851 3.852c.196.195.452.293.707.293.256 0 .512-.098.708-.293.39-.391.39-1.024 0-1.414zm-.4365 6.9775c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1zm-.0004-13.99987c3.648 0 7.101 1.395 9.725 3.929.397.383.408 1.017.025 1.414-.196.203-.458.305-.719.305-.25 0-.501-.093-.695-.281-2.25-2.171-5.21-3.367-8.336-3.367-.963 0-1.908.127-2.82403.347l-1.615-1.615c1.416-.472 2.90803-.732 4.43903-.732zm-8.17541 2.65273c-.539.39-1.062.807-1.549 1.276-.397.384-.408 1.017-.025 1.414.384.398 1.019.409 1.414.025.496-.479 1.032-.902 1.592-1.284zm13.93101 6.79004c-.262 0-.524-.102-.72-.305-.792-.821-1.777-1.426-2.849-1.779l-2.349-2.35004c.0251-.00047.0501-.00244.0753-.00442.029-.00229.0582-.00458.0877-.00458 2.428 0 4.788 1.00204 6.474 2.74804.383.398.373 1.031-.025 1.414-.193.188-.444.281-.694.281zm-10.32361-3.1826c-.694.408-1.341.902-1.906 1.488-.383.397-.372 1.031.025 1.414.396.384 1.03.373 1.414-.025.562-.582 1.224-1.049 1.941-1.403zm1.07066 6.5569c-.383-.397-.372-1.03.025-1.414.752-.727 1.69895-1.176 2.71705-1.331l2.517 2.518c-1.142-.815-2.8201-.738-3.84505.251-.396.385-1.03.374-1.414-.024z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12.4365 11.0225-1.892-1.89201-2.462-2.463-1.551-1.55-1.824-1.824c-.391-.391-1.024-.391-1.415 0-.39.39-.39 1.023 0 1.414l1.376 1.376 1.461 1.46 2.234 2.234 1.546 1.54601 2.739 2.739 2.793 2.793 3.851 3.852c.196.195.452.293.707.293.256 0 .512-.098.708-.293.39-.391.39-1.024 0-1.414zm-.4365 6.9775c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1zm-.0004-13.99987c3.648 0 7.101 1.395 9.725 3.929.397.383.408 1.017.025 1.414-.196.203-.458.305-.719.305-.25 0-.501-.093-.695-.281-2.25-2.171-5.21-3.367-8.336-3.367-.963 0-1.908.127-2.82404.347l-1.615-1.615c1.416-.472 2.90804-.732 4.43904-.732zm-8.17541 2.65273c-.539.39-1.062.807-1.549 1.276-.397.384-.408 1.017-.025 1.414.384.398 1.019.409 1.414.025.496-.479 1.032-.902 1.592-1.284zm13.93101 6.79004c-.262 0-.524-.102-.72-.305-.792-.821-1.777-1.426-2.849-1.779l-2.349-2.35004c.0251-.00047.0501-.00244.0753-.00442.029-.00229.0582-.00458.0877-.00458 2.428 0 4.788 1.00204 6.474 2.74804.383.398.373 1.031-.025 1.414-.193.188-.444.281-.694.281zm-10.32361-3.1826c-.694.408-1.341.902-1.906 1.488-.383.397-.372 1.031.025 1.414.396.384 1.03.373 1.414-.025.562-.582 1.224-1.049 1.941-1.403zm1.07066 6.5569c-.383-.397-.372-1.03.025-1.414.752-.727 1.69895-1.176 2.71695-1.331l2.517 2.518c-1.142-.815-2.82-.738-3.84495.251-.396.385-1.03.374-1.414-.024z" fillRule="evenodd"/>,
    })
))