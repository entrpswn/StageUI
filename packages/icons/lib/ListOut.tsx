/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M3 4H10C10.55 4 11 4.45 11 5C11 5.55 10.55 6 10 6H3C2.45 6 2 5.55 2 5C2 4.45 2.45 4 3 4ZM3 11H10C10.55 11 11 11.45 11 12C11 12.55 10.55 13 10 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11ZM10 18H3C2.45 18 2 18.45 2 19C2 19.55 2.45 20 3 20H10C10.55 20 11 19.55 11 19C11 18.45 10.55 18 10 18ZM19.0002 16.6438L20.3052 15.3838C20.7032 15.0008 21.3362 15.0118 21.7192 15.4088C22.1032 15.8068 22.0922 16.4398 21.6952 16.8228L18.6952 19.7198C18.5002 19.9058 18.2502 19.9998 18.0002 19.9998C17.7442 19.9998 17.4882 19.9028 17.2932 19.7068L14.2932 16.7068C13.9022 16.3168 13.9022 15.6838 14.2932 15.2928C14.6832 14.9028 15.3162 14.9028 15.7072 15.2928L17.0002 16.5858V7.3568L15.6952 8.6158C15.2982 8.9998 14.6652 8.9878 14.2812 8.5908C13.8972 8.1938 13.9082 7.5608 14.3052 7.1768L17.3052 4.2798C17.6992 3.9038 18.3222 3.9058 18.7072 4.2928L21.7072 7.2928C22.0972 7.6838 22.0972 8.3168 21.7072 8.7068C21.5122 8.9028 21.2562 8.9998 21.0002 8.9998C20.7442 8.9998 20.4882 8.9028 20.2932 8.7068L19.0002 7.4138V16.6438Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M3 4H10C10.55 4 11 4.45 11 5C11 5.55 10.55 6 10 6H3C2.45 6 2 5.55 2 5C2 4.45 2.45 4 3 4ZM3 11H10C10.55 11 11 11.45 11 12C11 12.55 10.55 13 10 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11ZM10 18H3C2.45 18 2 18.45 2 19C2 19.55 2.45 20 3 20H10C10.55 20 11 19.55 11 19C11 18.45 10.55 18 10 18ZM19.0002 16.6438L20.3052 15.3838C20.7032 15.0008 21.3362 15.0118 21.7192 15.4088C22.1032 15.8068 22.0922 16.4398 21.6952 16.8228L18.6952 19.7198C18.5002 19.9058 18.2502 19.9998 18.0002 19.9998C17.7442 19.9998 17.4882 19.9028 17.2932 19.7068L14.2932 16.7068C13.9022 16.3168 13.9022 15.6838 14.2932 15.2928C14.6832 14.9028 15.3162 14.9028 15.7072 15.2928L17.0002 16.5858V7.3568L15.6952 8.6158C15.2982 8.9998 14.6652 8.9878 14.2812 8.5908C13.8972 8.1938 13.9082 7.5608 14.3052 7.1768L17.3052 4.2798C17.6992 3.9038 18.3222 3.9058 18.7072 4.2928L21.7072 7.2928C22.0972 7.6838 22.0972 8.3168 21.7072 8.7068C21.5122 8.9028 21.2562 8.9998 21.0002 8.9998C20.7442 8.9998 20.4882 8.9028 20.2932 8.7068L19.0002 7.4138V16.6438Z"/>,
    })
))