/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m31.9999 58.6668c14.7276 0 26.6667-11.939 26.6667-26.6666s-11.9391-26.6667-26.6667-26.6667-26.66665 11.9391-26.66665 26.6667 11.93905 26.6666 26.66665 26.6666zm-6.1099-9.5963c1.9898 1.0642 4.237 1.5963 6.7415 1.5963 1.6125 0 3.2249-.2574 4.8374-.7724 1.6468-.5493 3.0534-1.3732 4.2199-2.4717.4803-.4463.7719-.9269.8749-1.4418.1372-.5493.1372-1.0471 0-1.4934-.1373-.4806-.3946-.8754-.772-1.1843-.343-.3433-.7719-.515-1.2865-.515-.5146-.0343-1.0807.1545-1.6983.5664-.9263.618-1.8526 1.0643-2.7789 1.3389-.892.2403-1.8698.3605-2.9333.3605-1.3381 0-2.556-.2747-3.6538-.824-1.0979-.5836-2.0242-1.4761-2.779-2.6777-.5463-.911-.9939-2.0095-1.343-3.2956h5.7173c.6518 0 1.1836-.2231 1.5953-.6694.446-.4463.669-.9784.669-1.5963 0-.618-.223-1.1501-.669-1.5964-.4117-.4462-.9435-.6694-1.5953-.6694h-6.4393c-.03-.6126-.0449-1.2477-.0449-1.9053 0-.5687.0104-1.1008.0314-1.5963h6.4528c.6518 0 1.1836-.2231 1.5953-.6694.446-.4463.669-.9784.669-1.5963 0-.618-.223-1.1501-.669-1.5964-.4117-.4462-.9435-.6694-1.5953-.6694h-5.7165c.349-1.2784.7964-2.3598 1.3422-3.2441.7548-1.2016 1.6811-2.077 2.779-2.6262 1.0978-.5836 2.3157-.8754 3.6538-.8754 1.0292 0 2.0413.1373 3.0362.4119.9949.2747 1.8698.7038 2.6246 1.2874.5832.4463 1.1321.6694 1.6468.6694.5489-.0343.9949-.206 1.338-.5149.3774-.3433.6347-.7725.7719-1.2874.1715-.5149.1887-1.047.0515-1.5963-.1373-.5493-.4632-1.0471-.9778-1.4933-1.2694-1.0986-2.6932-1.8882-4.2714-2.3688-1.5438-.4806-3.1048-.7209-4.683-.7209-2.5045 0-4.7517.5321-6.7415 1.5963-1.9899 1.0642-3.6367 2.6262-4.9404 4.686-1.052 1.7071-1.8331 3.7325-2.3431 6.0763h-2.9575c-.6518 0-1.2007.2232-1.6467.6694-.446.412-.669.9441-.669 1.5964 0 .6522.223 1.2015.669 1.6478.446.4119.9949.6179 1.6467.6179h2.3647c-.0326.5384-.0489 1.0877-.0489 1.6478 0 .6053.0127 1.2232.0381 1.8538h-2.3539c-.6518 0-1.2007.2232-1.6467.6694-.446.412-.669.9441-.669 1.5964 0 .6522.223 1.2015.669 1.6478.446.4119.9949.6179 1.6467.6179h2.9494c.5099 2.3405 1.2936 4.3831 2.3512 6.1278 1.3037 2.0598 2.9505 3.6218 4.9404 4.686z" fillRule="evenodd"/>,
        outline: <path d="m35.3333 53.1998c-2.8551 0-5.4169-.6062-7.6853-1.8186-2.2684-1.2125-4.1458-2.992-5.632-5.3387-1.4471-2.3858-2.4444-5.2604-2.992-8.624l1.056 1.6427h-4.1067c-.7431 0-1.3689-.2347-1.8773-.704-.5084-.5085-.7627-1.1343-.7627-1.8774s.2543-1.3493.7627-1.8186c.5084-.5085 1.1342-.7627 1.8773-.7627h3.8134l-1.056 1.408c-.0783-1.2124-.1174-2.3858-.1174-3.52s.0587-2.2293.176-3.2853l1.056 1.408h-3.872c-.7431 0-1.3689-.2347-1.8773-.704-.5084-.5085-.7627-1.1343-.7627-1.8774s.2543-1.3493.7627-1.8186c.5084-.5085 1.1342-.7627 1.8773-.7627h4.4587l-1.408 1.7013c.5476-3.4026 1.5449-6.2773 2.992-8.624 1.4862-2.3466 3.3636-4.1262 5.632-5.3386 2.2684-1.2125 4.8302-1.8187 7.6853-1.8187 1.7991 0 3.5787.2738 5.3387.8213 1.7991.5476 3.4222 1.4471 4.8693 2.6987.5867.5084.9583 1.0756 1.1147 1.7013.1564.6258.1369 1.232-.0587 1.8187-.1564.5867-.4497 1.0756-.88 1.4667-.3911.352-.8995.5475-1.5253.5866-.5867 0-1.2124-.2542-1.8773-.7626-.8605-.6649-1.8578-1.1538-2.992-1.4667-1.1343-.3129-2.288-.4693-3.4614-.4693-1.5253 0-2.9137.3324-4.1653.9973-1.2516.6258-2.3076 1.6231-3.168 2.992-.8213 1.3298-1.4471 3.0507-1.8773 5.1627l-1.1147-1.4667h7.9787c.7431 0 1.3493.2542 1.8186.7627.5085.5084.7627 1.1146.7627 1.8186s-.2542 1.3103-.7627 1.8187c-.4693.5084-1.0755.7627-1.8186.7627h-8.624l1.3493-1.2907c-.0782.8996-.1173 1.936-.1173 3.1093 0 1.1343.0391 2.2098.1173 3.2267l-1.2907-1.056h8.5654c.7431 0 1.3493.2542 1.8186.7627.5085.5084.7627 1.1146.7627 1.8186s-.2542 1.3103-.7627 1.8187c-.4693.5085-1.0755.7627-1.8186.7627h-7.744l.88-1.4667c.4302 2.112 1.056 3.8525 1.8773 5.2213.8604 1.3689 1.9164 2.3858 3.168 3.0507 1.2516.6258 2.64.9387 4.1653.9387 1.2125 0 2.3271-.1369 3.344-.4107 1.056-.3129 2.112-.8213 3.168-1.5253.704-.4694 1.3494-.6845 1.936-.6454.5867 0 1.0756.1956 1.4667.5867.4302.352.7236.8018.88 1.3493.1564.5085.1564 1.0756 0 1.7014-.1173.5866-.4498 1.1342-.9973 1.6426-1.3298 1.2516-2.9334 2.1903-4.8107 2.816-1.8382.5867-3.6764.88-5.5147.88z"/>,
    })
))