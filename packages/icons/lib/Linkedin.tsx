/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m3.00003 5.25c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm12.15037 3.15033c-3.231 0-5.85098 2.60397-5.85098 5.81397v5.885c0 .497.404.901.90098.901h2.099c.497 0 .901-.404.901-.901v-5.885c0-1.136.984-2.044 2.152-1.927 1.014.101 1.747 1.028 1.747 2.047v5.765c0 .497.404.901.901.901h2.099c.497 0 .901-.404.901-.901v-5.885c0-3.21-2.62-5.81397-5.85-5.81397zm-8.55077.8995h-2.699c-.497 0-.901.403-.901.89997v9.9c0 .497.404.9.901.9h2.699c.497 0 .9-.403.9-.9v-9.9c0-.49697-.403-.89997-.9-.89997z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m4 10h-.002l.002 10h2v-10zm2 11.9999h-2c-1.103 0-2-.897-2-2v-9.99997c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v9.99997c0 1.103-.897 2-2 2zm9.5049-10.3075c.153 0 .308.013.461.037 1.35.221 2.367 1.467 2.367 2.9v5.371h1.667v-5.462c0-2.502-2.018-4.538-4.5-4.538-2.481 0-4.5 2.036-4.5 4.538v5.462h1.667v-5.462c0-.839.365-1.631 1.003-2.173.516-.438 1.165-.673 1.835-.673zm4.495 10.3081h-1.667c-1.102 0-2-.898-2-2v-5.371c0-.457-.303-.863-.688-.925-.336-.058-.57.092-.679.184-.19.162-.299.399-.299.65v5.462c0 1.102-.897 2-2 2h-1.667c-1.10202 0-2.00002-.898-2.00002-2v-5.462c0-3.606 2.91602-6.53797 6.50002-6.53797s6.5 2.93197 6.5 6.53797v5.462c0 1.102-.897 2-2 2zm-14.99988-19.00043c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-.00002 3.99993c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fillRule="evenodd"/>,
    })
))