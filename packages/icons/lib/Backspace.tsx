/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m44.5521 35.4475c1.0426 1.0427 1.0426 2.728 0 3.7707-.52.52-1.2027.7813-1.8854.7813-.6826 0-1.3653-.2613-1.8853-.7813l-3.448-3.448-3.448 3.448c-.52.52-1.2027.7813-1.8853.7813-.6827 0-1.3654-.2613-1.8854-.7813-1.0426-1.0427-1.0426-2.728 0-3.7707l3.448-3.448-3.448-3.448c-1.0426-1.0427-1.0426-2.728 0-3.7707 1.0427-1.0426 2.728-1.0426 3.7707 0l3.448 3.448 3.448-3.448c1.0427-1.0426 2.728-1.0426 3.7707 0 1.0426 1.0427 1.0426 2.728 0 3.7707l-3.448 3.448zm9.1572-24.781h-26.056c-1.9946 0-3.9066.7387-5.3813 2.0827-.104.0906-.1973.1946-.2827.3013l-16.06396 19.944c-.88533 1.0987-.76266 2.696.28 3.6453l16.06666 14.6107c1.4747 1.344 3.3867 2.0827 5.3813 2.0827h26.056c2.7334 0 4.9574-2.1734 4.9574-4.848v-32.9707c0-2.6747-2.224-4.848-4.9574-4.848z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m30.1147 39.2182c.52.52 1.2026.7813 1.8853.7813s1.3653-.2613 1.8853-.7813l3.448-3.448 3.448 3.448c.52.52 1.2027.7813 1.8854.7813.6826 0 1.3653-.2613 1.8853-.7813 1.0427-1.0427 1.0427-2.728 0-3.7707l-3.448-3.448 3.448-3.448c1.0427-1.0427 1.0427-2.728 0-3.7707-1.0427-1.0426-2.728-1.0426-3.7707 0l-3.448 3.448-3.448-3.448c-1.0426-1.0426-2.728-1.0426-3.7706 0-1.0427 1.0427-1.0427 2.728 0 3.7707l3.448 3.448-3.448 3.448c-1.0427 1.0427-1.0427 2.728 0 3.7707zm23.2186 8.7818h-25.68c-.664 0-1.3013-.248-1.7947-.696l-14.208-12.92 14.3387-17.8c.472-.3787 1.0587-.584 1.664-.584h25.68zm.376-37.3335h-26.056c-1.9947 0-3.9067.7387-5.3814 2.0827-.104.0906-.1973.1946-.2826.3013l-16.06402 19.944c-.88533 1.0987-.76266 2.696.28 3.6453l16.06662 14.6107c1.4747 1.344 3.3867 2.0827 5.3814 2.0827h26.056c2.7333 0 4.9573-2.1734 4.9573-4.848v-32.9707c0-2.6747-2.224-4.848-4.9573-4.848z" fillRule="evenodd"/>,
    })
))