/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m3.94781 5h16.10399c.521 0 .948.427.948.948v.104c0 .521-.427.948-.948.948h-16.10399c-.521 0-.948-.427-.948-.948v-.104c0-.521.427-.948.948-.948zm16.10399 6h-14.13799l1.293-1.293c.391-.391.391-1.023 0-1.414-.39-.391-1.023-.391-1.414 0l-3 3c-.39.391-.39 1.023 0 1.414l3 3c.196.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293h14.13799c.521 0 .948-.427.948-.948v-.104c0-.521-.427-.948-.948-.948zm0 6h-16.10399c-.521 0-.948.427-.948.948v.104c0 .521.427.948.948.948h16.10399c.521 0 .948-.427.948-.948v-.104c0-.521-.427-.948-.948-.948z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m3.9477 5h16.104c.521 0 .948.427.948.948v.104c0 .521-.427.948-.948.948h-16.104c-.52101 0-.948-.427-.948-.948v-.104c0-.521.42699-.948.948-.948zm16.104 6h-14.13796l1.293-1.293c.391-.391.391-1.023 0-1.414-.39-.391-1.023-.391-1.414 0l-3 3c-.39.391-.39 1.023 0 1.414l3 3c.196.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293h14.13796c.521 0 .948-.427.948-.948v-.104c0-.521-.427-.948-.948-.948zm0 6h-16.104c-.52101 0-.948.427-.948.948v.104c0 .521.42699.948.948.948h16.104c.521 0 .948-.427.948-.948v-.104c0-.521-.427-.948-.948-.948z" fillRule="evenodd"/>,
    })
))