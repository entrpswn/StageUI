/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m32.0002 16.0002c1.472 0 2.6666-1.192 2.6666-2.6667v-5.33334c0-1.47466-1.1946-2.66666-2.6666-2.66666s-2.6667 1.192-2.6667 2.66666v5.33334c0 1.4747 1.1947 2.6667 2.6667 2.6667zm23.9999 13.3333h-5.3333c-1.472 0-2.6667 1.192-2.6667 2.6667 0 1.4746 1.1947 2.6666 2.6667 2.6666h5.3333c1.472 0 2.6667-1.192 2.6667-2.6666 0-1.4747-1.1947-2.6667-2.6667-2.6667zm-42.6666 0c1.472 0 2.6667 1.192 2.6667 2.6667 0 1.4746-1.1947 2.6666-2.6667 2.6666h-5.33334c-1.472 0-2.66666-1.192-2.66666-2.6666 0-1.4747 1.19466-2.6667 2.66666-2.6667zm3.2552-15.9245c-1.0586-1.0214-2.7466-.9894-3.7706.0666-1.024 1.0587-.9947 2.7494.064 3.7707l3.8373 3.7067c.52.5013 1.1867.7466 1.8533.7466.6987 0 1.3947-.272 1.9174-.8133 1.024-1.0587.9946-2.7493-.064-3.7707zm30.692 7.5451c-.52.4987-1.1866.7467-1.8533.7467-.6987 0-1.3947-.2747-1.9173-.816-1.024-1.056-.9947-2.7467.064-3.7707l3.8373-3.704c1.064-1.0213 2.7493-.9893 3.7707.0667 1.024 1.056.9946 2.7466-.064 3.7706zm-15.2805 27.0459c-1.472 0-2.6667 1.192-2.6667 2.6667v5.3333c0 1.4747 1.1947 2.6667 2.6667 2.6667s2.6666-1.192 2.6666-2.6667v-5.3333c0-1.4747-1.1946-2.6667-2.6666-2.6667zm11.5093-4.8862c1.024-1.056 2.712-1.088 3.7707-.0667l3.8373 3.7067c1.0587 1.0213 1.088 2.712.064 3.7706-.5226.5414-1.2186.8134-1.9173.8134-.6667 0-1.3333-.2454-1.8533-.7467l-3.8374-3.7067c-1.0586-1.0213-1.088-2.712-.064-3.7706zm-26.7893-.0667-3.8373 3.7067c-1.0587 1.0213-1.088 2.712-.064 3.7706.5226.5414 1.2186.8134 1.9173.8134.6667 0 1.3333-.2454 1.8533-.7467l3.8374-3.7067c1.0586-1.0213 1.088-2.712.064-3.7706-1.0214-1.056-2.7094-1.088-3.7707-.0667zm4.6133-11.0469c0-5.8827 4.784-10.6667 10.6667-10.6667 5.8826 0 10.6666 4.784 10.6666 10.6667 0 5.8826-4.784 10.6666-10.6666 10.6666-5.8827 0-10.6667-4.784-10.6667-10.6666z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m32 16.0002c1.472 0 2.6667-1.192 2.6667-2.6667v-5.33334c0-1.47466-1.1947-2.66666-2.6667-2.66666s-2.6666 1.192-2.6666 2.66666v5.33334c0 1.4747 1.1946 2.6667 2.6666 2.6667zm.0001 21.3335c-2.9413 0-5.3334-2.392-5.3334-5.3334 0-2.9413 2.3921-5.3333 5.3334-5.3333s5.3333 2.392 5.3333 5.3333c0 2.9414-2.392 5.3334-5.3333 5.3334zm-.0001-16.0002c-5.8826 0-10.6666 4.784-10.6666 10.6667 0 5.8826 4.784 10.6666 10.6666 10.6666 5.8827 0 10.6667-4.784 10.6667-10.6666 0-5.8827-4.784-10.6667-10.6667-10.6667zm18.6667 8h5.3333c1.472 0 2.6667 1.192 2.6667 2.6667 0 1.4746-1.1947 2.6666-2.6667 2.6666h-5.3333c-1.472 0-2.6667-1.192-2.6667-2.6666 0-1.4747 1.1947-2.6667 2.6667-2.6667zm-34.6667 2.6667c0-1.4747-1.1946-2.6667-2.6666-2.6667h-5.33336c-1.472 0-2.66667 1.192-2.66667 2.6667 0 1.4746 1.19467 2.6666 2.66667 2.6666h5.33336c1.472 0 2.6666-1.192 2.6666-2.6666zm-3.1821-18.5246c1.024-1.056 2.712-1.088 3.7707-.0666l3.8373 3.7066c1.0587 1.0214 1.088 2.712.064 3.7707-.5226.5413-1.2186.8133-1.9173.8133-.6667 0-1.3333-.2453-1.8533-.7466l-3.8374-3.7067c-1.0586-1.0213-1.088-2.712-.064-3.7707zm32.6094 8.2252c.6666 0 1.3333-.248 1.8533-.7467l3.8374-3.7067c1.0586-1.024 1.0879-2.7146.0639-3.7706-1.0213-1.056-2.7066-1.088-3.7706-.0667l-3.8374 3.704c-1.0586 1.024-1.088 2.7147-.064 3.7707.5227.5413 1.2187.816 1.9174.816zm-16.0939 28.9659c0-1.4747 1.1946-2.6667 2.6666-2.6667s2.6667 1.192 2.6667 2.6667v5.3333c0 1.4747-1.1947 2.6667-2.6667 2.6667s-2.6666-1.192-2.6666-2.6667zm17.9467-7.6196c-1.0587-1.0213-2.7467-.9893-3.7707.0667-1.024 1.0586-.9947 2.7493.064 3.7706l3.8373 3.7067c.52.5013 1.1867.7467 1.8534.7467.6986 0 1.3946-.272 1.9173-.8134 1.024-1.0586.9947-2.7493-.064-3.7706zm-34.3973 3.7067 3.8373-3.7067c1.0613-1.0213 2.7493-.9893 3.7706.0667 1.024 1.0586.9947 2.7493-.064 3.7706l-3.8373 3.7067c-.52.5013-1.1866.7467-1.8533.7467-.6987 0-1.3947-.272-1.9173-.8134-1.024-1.0586-.9947-2.7493.064-3.7706z" fillRule="evenodd"/>,
    })
))