/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M21.709 11.3076L18.709 8.29457C18.319 7.90357 17.685 7.90057 17.295 8.29157C16.903 8.68157 16.901 9.31357 17.291 9.70557L18.58 10.9996H13V5.40857L14.291 6.70557C14.486 6.90157 14.743 6.99957 15 6.99957C15.255 6.99957 15.511 6.90257 15.706 6.70857C16.097 6.31857 16.099 5.68557 15.709 5.29457L12.722 2.29457C12.533 2.10557 12.315 2.00857 12.013 1.99957C11.748 1.99957 11.494 2.10457 11.307 2.29157L8.29401 5.29157C7.90301 5.68157 7.90101 6.31457 8.29101 6.70557C8.68001 7.09657 9.31301 7.09857 9.70601 6.70857L11 5.41957V10.9996H5.40801L6.70501 9.70857C7.09701 9.31857 7.09901 8.68557 6.70901 8.29457C6.31901 7.90357 5.68501 7.90057 5.29501 8.29157L2.29501 11.2786C2.10601 11.4656 2.00101 11.7196 2.00001 11.9846C1.99901 12.2496 2.10501 12.5046 2.29101 12.6926L5.29101 15.7056C5.48601 15.9016 5.74301 15.9996 6.00001 15.9996C6.25501 15.9996 6.51101 15.9026 6.70501 15.7086C7.09701 15.3186 7.09901 14.6856 6.70901 14.2946L5.42001 12.9996H11V18.5916L9.70901 17.2946C9.31901 16.9026 8.68601 16.9006 8.29401 17.2916C7.90301 17.6816 7.90101 18.3146 8.29101 18.7056L11.278 21.7056C11.466 21.8936 11.72 21.9996 11.985 21.9996H11.987C12.252 21.9996 12.506 21.8946 12.693 21.7086L15.706 18.7086C16.097 18.3186 16.099 17.6856 15.709 17.2946C15.319 16.9026 14.686 16.9006 14.294 17.2916L13 18.5796V12.9996H18.592L17.295 14.2916C16.903 14.6816 16.901 15.3136 17.291 15.7056C17.486 15.9016 17.743 15.9996 18 15.9996C18.255 15.9996 18.511 15.9026 18.705 15.7086L21.705 12.7216C21.894 12.5346 21.999 12.2806 22 12.0156C22.001 11.7496 21.896 11.4956 21.709 11.3076Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M21.709 11.3076L18.709 8.29457C18.319 7.90357 17.685 7.90057 17.295 8.29157C16.903 8.68157 16.901 9.31357 17.291 9.70557L18.58 10.9996H13V5.40857L14.291 6.70557C14.486 6.90157 14.743 6.99957 15 6.99957C15.255 6.99957 15.511 6.90257 15.706 6.70857C16.097 6.31857 16.099 5.68557 15.709 5.29457L12.722 2.29457C12.533 2.10557 12.315 2.00857 12.013 1.99957C11.748 1.99957 11.494 2.10457 11.307 2.29157L8.29401 5.29157C7.90301 5.68157 7.90101 6.31457 8.29101 6.70557C8.68001 7.09657 9.31301 7.09857 9.70601 6.70857L11 5.41957V10.9996H5.40801L6.70501 9.70857C7.09701 9.31857 7.09901 8.68557 6.70901 8.29457C6.31901 7.90357 5.68501 7.90057 5.29501 8.29157L2.29501 11.2786C2.10601 11.4656 2.00101 11.7196 2.00001 11.9846C1.99901 12.2496 2.10501 12.5046 2.29101 12.6926L5.29101 15.7056C5.48601 15.9016 5.74301 15.9996 6.00001 15.9996C6.25501 15.9996 6.51101 15.9026 6.70501 15.7086C7.09701 15.3186 7.09901 14.6856 6.70901 14.2946L5.42001 12.9996H11V18.5916L9.70901 17.2946C9.31901 16.9026 8.68601 16.9006 8.29401 17.2916C7.90301 17.6816 7.90101 18.3146 8.29101 18.7056L11.278 21.7056C11.466 21.8936 11.72 21.9996 11.985 21.9996H11.987C12.252 21.9996 12.506 21.8946 12.693 21.7086L15.706 18.7086C16.097 18.3186 16.099 17.6856 15.709 17.2946C15.319 16.9026 14.686 16.9006 14.294 17.2916L13 18.5796V12.9996H18.592L17.295 14.2916C16.903 14.6816 16.901 15.3136 17.291 15.7056C17.486 15.9016 17.743 15.9996 18 15.9996C18.255 15.9996 18.511 15.9026 18.705 15.7086L21.705 12.7216C21.894 12.5346 21.999 12.2806 22 12.0156C22.001 11.7496 21.896 11.4956 21.709 11.3076Z"/>,
    })
))