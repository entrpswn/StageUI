/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m5.50003 18.0001c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm0-12.00004c0 .551.448 1 1 1s1-.449 1-1c0-.55099-.448-.99999-1-.99999s-1 .449-1 .99999zm14.70597-1.70806c.391.39.393 1.022.002 1.414l-10.99398 11.034c.179.385.286.809.286 1.26 0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3c.473 0 .913.12 1.312.314l3.28798-3.3-3.30698-3.307c-.0016-.00106-.00234-.00269-.00314-.00443-.00071-.00154-.00146-.00316-.00286-.00457-.391.188-.824.302-1.287.302-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3c0 .462-.114.896-.302 1.287.002.002.004.00311.006.00422.001.00056.002.00111.003.00178l3.30498 3.304 6.28-6.303c.39-.39 1.022-.392 1.414-.002zm-6.413 9.0009c.391-.391 1.023-.391 1.414 0l5 5c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-5-5c-.391-.391-.391-1.023 0-1.414z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m5.50002 18.0001c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm0-12.00004c0 .551.448 1 1 1s1-.449 1-1c0-.55099-.448-.99999-1-.99999s-1 .449-1 .99999zm14.70598-1.70806c.391.39.393 1.022.002 1.414l-10.994 11.034c.179.385.286.809.286 1.26 0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3c.473 0 .913.12 1.312.314l3.288-3.3-3.307-3.307c-.00159-.00106-.00234-.00269-.00314-.00443-.00071-.00154-.00145-.00316-.00286-.00457-.391.188-.824.302-1.287.302-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3c0 .462-.114.896-.302 1.287.002.002.004.00311.006.00422.001.00056.002.00111.003.00178l3.305 3.304 6.28-6.303c.39-.39 1.022-.392 1.414-.002zm-6.413 9.0009c.391-.391 1.023-.391 1.414 0l5 5c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-5-5c-.391-.391-.391-1.023 0-1.414z" fillRule="evenodd"/>,
    })
))