/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17.4951 13.9805c-.666 2.142-2.326 3.625-4.535 3.952-3.37103.499-6.68103-2.057-6.94303-5.457-.272-3.52801 2.511-6.47501 5.98403-6.47501.803 0 1.569.158 2.269.444.243.099.518.014.642-.216l1.435-2.647c.136-.253.038-.579-.224-.697-1.257-.568-2.651-.884-4.119-.884-5.62203 0-10.16103 4.636-10.00003 10.29301.147 5.161 4.407 9.479 9.56403 9.698 5.546.234 10.146-4.046 10.425-9.469.011-.198.007-1.351.003-2.027-.001-.276-.225-.495-.5-.495h-8.999c-.276 0-.5.223-.5.5v2.98c0 .275.224.5.5.5z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12.0029 4.00007c-2.18202 0-4.22002.861-5.74002 2.426-1.52 1.563-2.322 3.62603-2.259 5.80903.117 4.104 3.549 7.583 7.64902 7.757 4.382.173 8.119-3.212 8.342-7.573.007-.128.006-.693.004-1.219h-7.002v1.582h5.309l-.405 1.298c-.721 2.314-2.549 3.902-4.89 4.248-1.746.253-3.56502-.246-4.98802-1.383-1.397-1.113-2.273-2.731-2.405-4.44-.138-1.807.459-3.52904 1.685-4.85203 1.666-1.8 4.35902-2.493 6.66702-1.744l.773-1.429c-.875-.319-1.794-.48-2.74-.48zm-.007 17.99893c-.141 0-.284-.003-.427-.009-5.12801-.217-9.41801-4.567-9.56501-9.698-.077-2.728.925-5.306 2.824-7.26 1.90099-1.955 4.448-3.032 7.17501-3.032 1.434 0 2.82.298 4.119.885.361.163.642.473.769.851.129.383.093.807-.099 1.162l-1.292 2.384c-.351.652-1.143.932-1.835.643-1.653-.673-3.67302-.233-4.89502 1.087-.84199.909-1.253 2.095-1.15799 3.339.08999 1.158.69399 2.262 1.65799 3.031.99402.793 2.25602 1.146 3.44802.968 1.1-.163 2.012-.715 2.632-1.568h-2.903c-.799 0-1.45-.65-1.45-1.45v-2.682c0-.799.651-1.45 1.45-1.45h8.1c.793 0 1.444.645 1.45 1.438.003.631.005 1.698-.004 1.882-.273 5.312-4.716 9.479-9.997 9.479z" fillRule="evenodd"/>,
    })
))