/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M15 17.8379L13.144 12.2709L18.712 6.70193L15 17.8379ZM17.298 5.28793L11.73 10.8559L6.162 8.99993L17.298 5.28793ZM21.99 2.94793C21.985 2.85493 21.968 2.76493 21.937 2.67793C21.927 2.64693 21.916 2.61693 21.902 2.58693C21.854 2.47993 21.793 2.37893 21.707 2.29293C21.621 2.20693 21.52 2.14593 21.412 2.09793C21.383 2.08393 21.354 2.07293 21.323 2.06293C21.234 2.03193 21.143 2.01393 21.048 2.00893C21.026 2.00793 21.006 2.00293 20.983 2.00293C20.883 2.00493 20.782 2.01893 20.684 2.05093L2.684 8.05093C2.275 8.18793 2 8.56893 2 8.99993C2 9.43093 2.275 9.81293 2.684 9.94893L11.209 12.7909L14.052 21.3169C14.188 21.7249 14.569 21.9999 15 21.9999C15.431 21.9999 15.812 21.7249 15.948 21.3169L21.948 3.31693C21.98 3.21793 21.995 3.11793 21.996 3.01793C21.997 2.99393 21.991 2.97193 21.99 2.94793Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M15 17.8379L13.144 12.2709L18.712 6.70193L15 17.8379ZM17.298 5.28793L11.73 10.8559L6.162 8.99993L17.298 5.28793ZM21.99 2.94793C21.985 2.85493 21.968 2.76493 21.937 2.67793C21.927 2.64693 21.916 2.61693 21.902 2.58693C21.854 2.47993 21.793 2.37893 21.707 2.29293C21.621 2.20693 21.52 2.14593 21.412 2.09793C21.383 2.08393 21.354 2.07293 21.323 2.06293C21.234 2.03193 21.143 2.01393 21.048 2.00893C21.026 2.00793 21.006 2.00293 20.983 2.00293C20.883 2.00493 20.782 2.01893 20.684 2.05093L2.684 8.05093C2.275 8.18793 2 8.56893 2 8.99993C2 9.43093 2.275 9.81293 2.684 9.94893L11.209 12.7909L14.052 21.3169C14.188 21.7249 14.569 21.9999 15 21.9999C15.431 21.9999 15.812 21.7249 15.948 21.3169L21.948 3.31693C21.98 3.21793 21.995 3.11793 21.996 3.01793C21.997 2.99393 21.991 2.97193 21.99 2.94793Z"/>,
    })
))