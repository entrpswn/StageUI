/**
The MIT License (MIT)
*/
import React from 'react'

import { Props, createIcon } from '../Icon'

export default React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
    createIcon(props, ref, {
      filled: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.8459 11.8273C21.8673 11.8953 21.8886 11.9634 21.9028 12.0342C21.9648 12.3472 21.9998 12.6692 21.9998 13.0002C21.9998 13.3082 21.9638 13.6112 21.9078 13.9102C21.8954 13.9783 21.8787 14.0437 21.862 14.1091C21.8545 14.1387 21.8469 14.1683 21.8398 14.1982C21.7898 14.3972 21.7308 14.5922 21.6578 14.7832C21.6198 14.8822 21.5808 14.9792 21.5368 15.0752C21.4498 15.2652 21.3488 15.4472 21.2378 15.6262C21.2205 15.6539 21.2041 15.6821 21.1877 15.7103C21.1604 15.7572 21.133 15.8042 21.1018 15.8492C21.0926 15.8622 21.0849 15.8756 21.0772 15.8889C21.0689 15.9034 21.0606 15.9177 21.0508 15.9312C21.043 15.9422 21.0323 15.9493 21.0217 15.9563C21.013 15.9619 21.0045 15.9676 20.9978 15.9752C20.0858 17.1972 18.6418 18.0002 16.9998 18.0002H13.9998V16.7332C14.3008 16.9072 14.6428 17.0002 14.9998 17.0002C15.5338 17.0002 16.0358 16.7922 16.4138 16.4142C17.1938 15.6352 17.1938 14.3652 16.4138 13.5862L13.4138 10.5862C13.0378 10.2092 12.5358 10.0012 12.0018 10.0012C11.4828 10.0012 10.9898 10.1982 10.6138 10.5572L7.61076 13.4572C6.81776 14.2232 6.79576 15.4922 7.56176 16.2852C7.93776 16.6742 8.46176 16.8972 9.00176 16.8972C9.35676 16.8972 9.69876 16.8042 9.99976 16.6302V18.0002H6.99976C5.35776 18.0002 3.91376 17.1972 3.00276 15.9752C2.99575 15.9677 2.9872 15.9622 2.97864 15.9567C2.96765 15.9496 2.95662 15.9424 2.94876 15.9312C2.93818 15.9167 2.92946 15.9013 2.92071 15.8858C2.91373 15.8735 2.90674 15.8612 2.89876 15.8492C2.86684 15.8032 2.83859 15.7552 2.81036 15.7073C2.79437 15.6801 2.77839 15.6529 2.76176 15.6262C2.65176 15.4472 2.54976 15.2652 2.46276 15.0752C2.42017 14.9823 2.3832 14.8884 2.34551 14.7927L2.34176 14.7832C2.26976 14.5922 2.20976 14.3972 2.16076 14.1982C2.15443 14.1729 2.14789 14.1478 2.14137 14.1227C2.12315 14.0527 2.10501 13.9831 2.09176 13.9102C2.03676 13.6112 1.99976 13.3082 1.99976 13.0002C1.99976 12.6692 2.03576 12.3472 2.09676 12.0342C2.11133 11.9613 2.13353 11.8913 2.15573 11.8212C2.16857 11.7807 2.1814 11.7402 2.19276 11.6992C2.19694 11.6838 2.2011 11.6685 2.20527 11.6531C2.25294 11.4774 2.30062 11.3016 2.36776 11.1352C2.40398 11.0446 2.44845 10.9599 2.49305 10.8749C2.51249 10.8379 2.53194 10.8008 2.55076 10.7632C2.55716 10.7505 2.56353 10.7378 2.5699 10.7251C2.64018 10.5851 2.7094 10.4473 2.79376 10.3162C2.85753 10.2153 2.92977 10.1222 3.00207 10.029C3.01933 10.0068 3.0366 9.98454 3.05376 9.96218L3.0573 9.95763C3.1541 9.83317 3.25007 9.70977 3.35776 9.59418C3.45423 9.49014 3.55787 9.39683 3.66273 9.30241C3.66874 9.29701 3.67475 9.2916 3.68076 9.28618C3.79876 9.18018 3.91876 9.07818 4.04676 8.98418C4.16576 8.89618 4.28776 8.81618 4.41476 8.74018C4.55476 8.65418 4.69776 8.57718 4.84576 8.50618C4.97576 8.44318 5.10576 8.38618 5.24176 8.33518C5.40376 8.27318 5.57076 8.22418 5.74076 8.18018C5.87576 8.14418 6.00776 8.10918 6.14776 8.08618C6.17418 8.08134 6.19983 8.07436 6.22547 8.06739C6.25805 8.05852 6.29062 8.04966 6.32476 8.04518C7.14576 5.66118 9.41976 4.00018 11.9998 4.00018C14.5808 4.00018 16.8548 5.66118 17.6748 8.04518C17.709 8.04967 17.7419 8.05856 17.7748 8.06744C17.8006 8.0744 17.8264 8.08135 17.8528 8.08618C17.9918 8.10918 18.1248 8.14418 18.2588 8.18018C18.4288 8.22418 18.5958 8.27318 18.7578 8.33518C18.8938 8.38618 19.0248 8.44318 19.1538 8.50618C19.3018 8.57718 19.4448 8.65418 19.5848 8.74018C19.7118 8.81618 19.8348 8.89618 19.9538 8.98418C20.0808 9.07818 20.2008 9.18018 20.3188 9.28618C20.4308 9.38618 20.5398 9.48418 20.6428 9.59418C20.7518 9.71118 20.8488 9.83618 20.9458 9.96218C20.9584 9.97854 20.9711 9.99483 20.9838 10.0111C21.0612 10.1103 21.138 10.2088 21.2068 10.3162C21.2899 10.4468 21.3588 10.584 21.4288 10.7234C21.4354 10.7367 21.4421 10.7499 21.4488 10.7632C21.4676 10.8008 21.487 10.8379 21.5065 10.8749C21.5511 10.9599 21.5955 11.0446 21.6318 11.1352C21.7 11.3021 21.7479 11.4784 21.7957 11.6547C21.7997 11.6695 21.8037 11.6844 21.8078 11.6992C21.8193 11.7423 21.8326 11.7848 21.8459 11.8273ZM11.305 11.28C11.699 10.904 12.322 10.907 12.707 11.293L15.707 14.293C16.098 14.684 16.098 15.316 15.707 15.707C15.512 15.902 15.256 16 15 16C14.744 16 14.488 15.902 14.293 15.707L13 14.414V20C13 20.553 12.552 21 12 21C11.448 21 11 20.553 11 20V14.356L9.69496 15.616C9.29796 16.001 8.66496 15.988 8.28096 15.591C7.89696 15.193 7.90796 14.561 8.30496 14.177L11.305 11.28Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9998 2.99988C14.5808 2.99988 16.8548 4.66088 17.6748 7.04488C20.1138 7.37588 21.9998 9.47188 21.9998 11.9999C21.9998 13.2209 21.5558 14.3959 20.7498 15.3089C20.5518 15.5319 20.2768 15.6469 19.9998 15.6469C19.7648 15.6469 19.5288 15.5649 19.3378 15.3969C18.9248 15.0299 18.8848 14.3989 19.2508 13.9839C19.7338 13.4379 19.9998 12.7319 19.9998 11.9999C19.9998 10.3459 18.6538 8.99988 16.9998 8.99988H16.8998C16.4238 8.99988 16.0138 8.66388 15.9198 8.19688C15.5458 6.34488 13.8978 4.99988 11.9998 4.99988C10.1028 4.99988 8.45376 6.34488 8.08076 8.19688C7.98676 8.66388 7.57576 8.99988 7.09976 8.99988H6.99976C5.34576 8.99988 3.99976 10.3459 3.99976 11.9999C3.99976 12.7319 4.26576 13.4379 4.74976 13.9839C5.11476 14.3989 5.07576 15.0299 4.66176 15.3969C4.24776 15.7629 3.61576 15.7219 3.25076 15.3089C2.44376 14.3959 1.99976 13.2209 1.99976 11.9999C1.99976 9.47188 3.88576 7.37588 6.32476 7.04488C7.14576 4.66088 9.41976 2.99988 11.9998 2.99988ZM11.305 11.28C11.699 10.904 12.322 10.907 12.707 11.293L15.707 14.293C16.098 14.684 16.098 15.316 15.707 15.707C15.512 15.902 15.256 16 15 16C14.744 16 14.488 15.902 14.293 15.707L13 14.414V20C13 20.553 12.552 21 12 21C11.448 21 11 20.553 11 20V14.356L9.69496 15.616C9.29796 16.001 8.66496 15.988 8.28096 15.591C7.89696 15.193 7.90796 14.561 8.30496 14.177L11.305 11.28Z"
        />
      ),
    }),
)
