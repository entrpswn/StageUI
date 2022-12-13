/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m42.6658 34.6645c-1.472 0-2.6666-1.1946-2.6666-2.6666s1.1946-2.6667 2.6666-2.6667 2.6667 1.1947 2.6667 2.6667-1.1947 2.6666-2.6667 2.6666zm-10.6666 0c-1.472 0-2.6667-1.1946-2.6667-2.6666s1.1947-2.6667 2.6667-2.6667 2.6667 1.1947 2.6667 2.6667-1.1947 2.6666-2.6667 2.6666zm-10.6667 0c-1.472 0-2.6667-1.1946-2.6667-2.6666s1.1947-2.6667 2.6667-2.6667 2.6666 1.1947 2.6666 2.6667-1.1946 2.6666-2.6666 2.6666zm29.5226-21.5225c-6.0906-6.09071-14.52-8.80805-23.1306-7.47738-10.872 1.696-19.88538 10.45338-21.92005 21.29868-.97867 5.2213-.416 10.5387 1.62933 15.3733.26134.6134.34134 1.1894.23734 1.704l-2.28534 11.4347c-.176.8747.09867 1.7787.728 2.408.504.504 1.184.7813 1.88534.7813.17333 0 .34933-.016.52266-.0533l11.42132-2.2827c.656-.1253 1.2934.0587 1.7173.2347 4.8374 2.0453 10.1547 2.6053 15.3734 1.6293 10.8453-2.0346 19.6027-11.048 21.2987-21.92 1.3413-8.608-1.3841-17.0373-7.4774-23.1306z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18.6672 29.3311c0-1.472 1.1946-2.6666 2.6666-2.6666s2.6667 1.1946 2.6667 2.6666-1.1947 2.6667-2.6667 2.6667-2.6666-1.1947-2.6666-2.6667zm13.3333-2.6666c-1.472 0-2.6667 1.1946-2.6667 2.6666s1.1947 2.6667 2.6667 2.6667 2.6666-1.1947 2.6666-2.6667-1.1946-2.6666-2.6666-2.6666zm10.6667 0c-1.472 0-2.6666 1.1946-2.6666 2.6666s1.1946 2.6667 2.6666 2.6667 2.6667-1.1947 2.6667-2.6667-1.1947-2.6666-2.6667-2.6666zm10.3958 6.12c-1.352 8.6773-8.3467 15.8746-17.0107 17.4986-4.184.7894-8.4453.3387-12.312-1.2986-1.096-.464-2.2293-.6987-3.3413-.6987-.5067 0-1.008.048-1.5014.1467l-7.4986 1.4986 1.5013-7.512c.3147-1.56.1227-3.2293-.552-4.8266-1.6373-3.8667-2.0853-8.1254-1.2987-12.312 1.624-8.664 8.8187-15.6587 17.4987-17.0107 6.9067-1.07467 13.6613 1.10133 18.536 5.976 4.8773 4.8773 7.056 11.6347 5.9787 18.5387zm-2.2054-22.3095c-6.0933-6.09071-14.52-8.80804-23.1306-7.47737-10.872 1.696-19.88536 10.45337-21.92003 21.29867-.98133 5.2213-.416 10.5387 1.62934 15.3733.25866.616.33866 1.1894.23733 1.704l-2.288 11.4347c-.176.8747.09867 1.7787.73067 2.408.504.5067 1.184.7813 1.88533.7813.17333 0 .34667-.016.52267-.0506l11.42129-2.2854c.656-.1253 1.2907.0587 1.7147.2347 4.84 2.0453 10.1573 2.608 15.3733 1.6293 10.848-2.0346 19.6054-11.048 21.3014-21.92 1.3386-8.6053-1.384-17.0373-7.4774-23.1306z" fillRule="evenodd"/>,
    })
))