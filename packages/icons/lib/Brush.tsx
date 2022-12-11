/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16.3757 4.66785c.777-.777 2.047-.915 2.886-.207.493.417.746 1.002.738 1.596.007.537-.198 1.066-.602 1.47l-6.485 6.49095c-.183.184-.481.184-.665 0l-2.273-2.275c-.184-.184-.184-.483 0-.667zm-12.32172 11.74615c.032-1.836 1.275-3.496 3.07-3.866 2.92302-.603 5.33802 2.194 4.04302 5.19-.584 1.35-1.97102 2.177-3.44002 2.203h-.002l-3.246.059c-.266.005-.484-.213-.479-.479z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17.7656 7.39273-5.867 5.86497c-.151-.226-.324-.44-.521-.636-.197-.197-.411-.369-.637-.517l5.869-5.86697c.306-.307.848-.308 1.157.001.153.153.236.353.233.589.003.211-.081.411-.234.565zm-9.52001 10.54797-2.228.041.039-2.231c.021-1.266 1.07-2.316 2.339-2.338.014 0 .026-.001.04-.001.584 0 1.125.22 1.528.624.41301.412.63401.968.62401 1.566-.021 1.268-1.07201 2.317-2.34201 2.339zm11.75401-11.11297c.01-.756-.282-1.468-.819-2.004-1.062-1.061-2.925-1.064-3.985 0l-6.61304 6.60997c-.075-.004-.147-.02-.222-.021-2.334.042-4.265 1.973-4.304 4.304l-.057 3.266c-.005.271.102.533.293.724.188.188.443.293.707.293h.019l3.266-.059c2.33204-.041 4.26204-1.972 4.30304-4.305.001-.075-.015-.146-.017-.222l6.609-6.60697c.538-.538.83-1.25.82-1.979z" fillRule="evenodd"/>,
    })
))