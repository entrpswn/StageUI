/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M9.4054 9.6695C10.0104 9.6695 10.3644 9.9945 10.3644 10.5225C10.3644 11.0885 9.9814 11.4085 9.1134 11.4085H8.2604V9.6695H9.4054ZM14.7647 11.1885C14.1387 11.1885 13.7267 11.6665 13.7267 12.2845V12.2935H15.7877V12.2845C15.7877 11.6615 15.3857 11.1885 14.7647 11.1885ZM9.4869 12.3037H8.2599V14.2377H9.2189C10.2399 14.2377 10.6569 13.9127 10.6569 13.2937C10.6569 12.6797 10.2439 12.3037 9.4869 12.3037ZM17.025 13.0537H13.727V13.1857C13.727 13.9177 14.168 14.3817 14.818 14.3817C15.327 14.3817 15.686 14.1457 15.793 13.7537H16.977C16.856 14.5277 16.186 15.2967 14.808 15.2967C13.397 15.2967 12.475 14.4687 12.475 12.9907V12.5487C12.475 11.1337 13.401 10.2967 14.755 10.2967C16.157 10.2967 17.025 11.1927 17.025 12.5797V13.0537ZM13.25 9.7027H16.25V9.2027H13.25V9.7027ZM9.698 15.2027H6.975V8.7027H9.703C10.873 8.7027 11.64 9.3087 11.64 10.3037C11.64 11.0937 11.165 11.5707 10.518 11.7277V11.7837C11.304 11.8607 11.975 12.3947 11.975 13.3697C11.975 14.5327 11.026 15.2027 9.698 15.2027ZM12 1.9997C6.477 1.9997 2 6.4777 2 11.9997C2 17.5227 6.477 21.9997 12 21.9997C17.523 21.9997 22 17.5227 22 11.9997C22 6.4777 17.523 1.9997 12 1.9997Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M13.25 9.703H16.25V9.203H13.25V9.703ZM15.788 12.294H13.727V12.284C13.727 11.666 14.139 11.188 14.765 11.188C15.385 11.188 15.788 11.661 15.788 12.284V12.294ZM14.755 10.297C13.401 10.297 12.475 11.134 12.475 12.549V12.99C12.475 14.469 13.396 15.297 14.808 15.297C16.186 15.297 16.855 14.527 16.977 13.754H15.793C15.686 14.146 15.327 14.382 14.818 14.382C14.168 14.382 13.727 13.918 13.727 13.186V13.054H17.025V12.58C17.025 11.192 16.157 10.297 14.755 10.297ZM9.219 14.237H8.26V12.304H9.487C10.244 12.304 10.657 12.68 10.657 13.294C10.657 13.913 10.24 14.237 9.219 14.237ZM8.26 9.67H9.405C10.01 9.67 10.364 9.994 10.364 10.522C10.364 11.089 9.981 11.408 9.113 11.408H8.26V9.67ZM10.518 11.784V11.728C11.165 11.57 11.64 11.094 11.64 10.304C11.64 9.309 10.873 8.703 9.703 8.703H6.975V15.203H9.698C11.026 15.203 11.975 14.532 11.975 13.37C11.975 12.395 11.304 11.86 10.518 11.784ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
    })
))