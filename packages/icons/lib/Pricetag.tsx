/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m11.5605 11.5605c-.586.586-1.535.586-2.121 0s-.586-1.536 0-2.12095c.586-.586 1.535-.586 2.121 0 .586.58495.586 1.53495 0 2.12095zm9.907.021-6.417-6.41702c-.165-.165-.382-.267-.614-.288l-9.34399-.872c-.297-.03-.589.077-.8.288s-.316.504-.289.8l.872 9.34402c.023.232.124.45.289.614l6.41699 6.418c.355.353.82.53 1.285.53s.93-.177 1.285-.531l7.316-7.316c.343-.342.532-.799.532-1.285s-.189-.942-.532-1.285z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m10.5605 8.43945c.586.585.586 1.536 0 2.12095-.58604.586-1.53504.586-2.12104 0-.586-.58495-.586-1.53595 0-2.12095.586-.586 1.535-.586 2.12104 0zm-4.72654 4.45195 6.03204 6.033 7.058-7.058-6.032-6.03295-7.78504-.726zm6.03204 8.1071c-.465 0-.929-.177-1.284-.53l-6.41701-6.418c-.165-.164-.267-.382-.289-.614l-.872-9.34402c-.027-.296.078-.589.289-.8s.503-.318.8-.288l9.34401.872c.232.021.449.123.614.288l6.417 6.41702c.343.343.532.799.532 1.285s-.189.942-.532 1.285l-7.317 7.316c-.354.354-.819.531-1.285.531z" fillRule="evenodd"/>,
    })
))