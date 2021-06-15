/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M5.59949 3H18.4005C19.8345 3 21.0005 4.246 21.0005 5.777V18.223C21.0005 19.754 19.8345 21 18.4005 21H17.0005C16.4475 21 16.0005 20.553 16.0005 20C16.0005 19.447 16.4475 19 17.0005 19H18.4005C18.7255 19 19.0005 18.644 19.0005 18.223V5.777C19.0005 5.356 18.7255 5 18.4005 5H5.59949C5.27449 5 5.00049 5.356 5.00049 5.777V7C5.00049 7.553 4.55249 8 4.00049 8C3.44749 8 3.00049 7.553 3.00049 7V5.777C3.00049 4.246 4.16649 3 5.59949 3ZM3.00939 15.17C2.93339 14.623 3.31639 14.118 3.86339 14.043C5.28339 13.849 6.66939 14.314 7.67739 15.321C9.01439 16.66 9.37739 18.71 8.57839 20.423C8.40839 20.786 8.04839 21 7.67139 21C7.52939 21 7.38539 20.97 7.24939 20.906C6.74939 20.673 6.53239 20.078 6.76539 19.577C7.21039 18.624 7.00939 17.481 6.26339 16.736C5.70139 16.175 4.92739 15.918 4.13639 16.023C3.58339 16.102 3.08439 15.717 3.00939 15.17ZM3.86239 10.0771C3.31539 10.1531 2.93339 10.6581 3.00939 11.2051C3.08539 11.7511 3.58839 12.1341 4.13739 12.0571C6.02839 11.7991 7.88539 12.4171 9.23439 13.7651C10.7904 15.3221 11.3754 17.6041 10.7594 19.7211C10.6054 20.2511 10.9104 20.8061 11.4404 20.9601C11.5344 20.9871 11.6284 21.0001 11.7194 21.0001C12.1534 21.0001 12.5524 20.7171 12.6794 20.2791C13.4994 17.4631 12.7204 14.4251 10.6484 12.3511C8.85339 10.5561 6.38439 9.7261 3.86239 10.0771ZM3.00009 19C3.00009 18.447 3.44709 18 4.00009 18C4.55309 18 5.00009 18.447 5.00009 19C5.00009 19.553 4.55309 20 4.00009 20C3.44709 20 3.00009 19.553 3.00009 19Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M5.59949 3H18.4005C19.8345 3 21.0005 4.246 21.0005 5.777V18.223C21.0005 19.754 19.8345 21 18.4005 21H17.0005C16.4475 21 16.0005 20.553 16.0005 20C16.0005 19.447 16.4475 19 17.0005 19H18.4005C18.7255 19 19.0005 18.644 19.0005 18.223V5.777C19.0005 5.356 18.7255 5 18.4005 5H5.59949C5.27449 5 5.00049 5.356 5.00049 5.777V7C5.00049 7.553 4.55249 8 4.00049 8C3.44749 8 3.00049 7.553 3.00049 7V5.777C3.00049 4.246 4.16649 3 5.59949 3ZM3.00939 15.17C2.93339 14.623 3.31639 14.118 3.86339 14.043C5.28339 13.849 6.66939 14.314 7.67739 15.321C9.01439 16.66 9.37739 18.71 8.57839 20.423C8.40839 20.786 8.04839 21 7.67139 21C7.52939 21 7.38539 20.97 7.24939 20.906C6.74939 20.673 6.53239 20.078 6.76539 19.577C7.21039 18.624 7.00939 17.481 6.26339 16.736C5.70139 16.175 4.92739 15.918 4.13639 16.023C3.58339 16.102 3.08439 15.717 3.00939 15.17ZM3.86239 10.0771C3.31539 10.1531 2.93339 10.6581 3.00939 11.2051C3.08539 11.7511 3.58839 12.1341 4.13739 12.0571C6.02839 11.7991 7.88539 12.4171 9.23439 13.7651C10.7904 15.3221 11.3754 17.6041 10.7594 19.7211C10.6054 20.2511 10.9104 20.8061 11.4404 20.9601C11.5344 20.9871 11.6284 21.0001 11.7194 21.0001C12.1534 21.0001 12.5524 20.7171 12.6794 20.2791C13.4994 17.4631 12.7204 14.4251 10.6484 12.3511C8.85339 10.5561 6.38439 9.7261 3.86239 10.0771ZM3.00009 19C3.00009 18.447 3.44709 18 4.00009 18C4.55309 18 5.00009 18.447 5.00009 19C5.00009 19.553 4.55309 20 4.00009 20C3.44709 20 3.00009 19.553 3.00009 19Z"/>,
    })
))