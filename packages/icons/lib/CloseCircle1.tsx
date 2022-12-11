/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m14.707 13.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293-1.293 1.293c-.195.195-.451.293-.70701.293-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l1.29301-1.293-1.29301-1.293c-.391-.391-.391-1.023 0-1.414s1.02301-.391 1.41401 0l1.293 1.293 1.293-1.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-1.293 1.293zm3.293-10.293h-12c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m14.7071 9.293c-.391-.391-1.023-.391-1.414 0l-1.293 1.293-1.293-1.293c-.391-.391-1.02302-.391-1.41402 0s-.391 1.023 0 1.414l1.29302 1.293-1.29302 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.70702.293.256 0 .512-.098.707-.293l1.293-1.293 1.293 1.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293 1.293-1.293c.391-.391.391-1.023 0-1.414zm4.2929 8.7071c0 .552-.448 1-1 1h-12.00003c-.552 0-1-.448-1-1v-12.00003c0-.552.448-1 1-1h12.00003c.552 0 1 .448 1 1zm-1-15.0001h-12c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))