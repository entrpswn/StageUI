/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 10.4999c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 5.0002c-1.93 0-3.50002-1.57-3.50002-3.5s1.57002-3.50003 3.50002-3.50003 3.5 1.57003 3.5 3.50003-1.57 3.5-3.5 3.5zm9.892-5.1811-.787-2.521c-.188-.605-.598-1.094-1.153-1.378-.541-.277-1.156-.324-1.732-.132l-.34.113c-.536.181-1.134.081-1.593-.264l-.107-.081c-.437-.328-.696-.863-.694-1.429l.002-.279c.002-.635-.24-1.23-.683-1.675-.429-.431-.996-.669-1.598-.67l-2.547-.003h-.004c-1.25403 0-2.27803 1.042-2.28303 2.326l-.001.241c-.002.598-.277 1.162-.733 1.51l-.129.098c-.513.39-1.178.501-1.777.297-.558-.191-1.155-.15-1.683.116-.54.273-.939.747-1.124 1.334l-.816 2.595c-.387 1.232.263 2.524 1.48 2.941l.164.056c.518.177.935.629 1.119 1.211l.055.168c.219.646.143 1.327-.231 1.857-.72 1.023-.501 2.466.489 3.216l2.072 1.574c.398.302.869.46 1.356.46.115 0 .231-.008.347-.026.612-.096 1.14903-.431 1.51103-.944l.231-.328c.332-.472.839-.751 1.428-.767.587-.033 1.147.273 1.497.777l.118.172c.359.518.895.858 1.509.957.609.097 1.216-.054 1.711-.428l2.061-1.556c.994-.749 1.222-2.197.508-3.229l-.261-.375c-.328-.474-.424-1.091-.258-1.652.181-.612.633-1.092 1.21-1.286l.201-.067c1.187-.397 1.844-1.711 1.465-2.929z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m4.4027 11.6223c1.116.383 2.005 1.317 2.377 2.501l.04.12c.426 1.256.253 2.608-.461 3.622-.13.184-.101.404.036.508l2.072 1.574c.073.055.144.055.188.05.05-.008.123-.035.182-.119l.231-.328c.689-.977 1.799-1.58 2.971-1.614 1.316-.027 2.498.576 3.234 1.639l.118.171c.059.084.131.112.182.12.044.009.116.006.188-.05l2.061-1.555c.144-.108.176-.339.069-.494l-.26-.375c-.67-.968-.869-2.224-.532-3.359.366-1.236 1.297-2.214 2.492-2.614l.201-.068c.161-.053.248-.253.191-.437l-.787-2.52099c-.037-.118-.113-.171-.155-.193-.06-.031-.125-.036-.187-.015l-.34.113c-1.163.387-2.446.177-3.431-.564l-.108-.081c-.936-.704-1.493-1.839-1.489-3.035l.002-.28c0-.133-.063-.216-.101-.254-.036-.037-.097-.081-.183-.081l-2.547-.003c-.156 0-.283.149-.284.333l-.001.242c-.005 1.215-.574 2.371-1.522 3.094l-.129.098c-1.043.793-2.403 1.017-3.635.597-.047-.016-.091-.013-.133.009-.032.016-.09.057-.118.148l-.817 2.59599c-.059.189.038.386.221.449zm4.21105 10.3779c-.486 0-.958-.158-1.356-.461l-2.072-1.573c-.99-.75-1.209-2.193-.489-3.216.374-.53.451-1.211.231-1.857l-.055-.168c-.183-.582-.601-1.034-1.118-1.211h-.001l-.163-.057c-1.218-.417-1.868-1.708-1.481-2.94l.816-2.59496c.185-.587.584-1.061 1.124-1.334.528-.266 1.125-.307 1.683-.116.599.204 1.264.093 1.777-.297l.129-.098c.456-.348.731-.913.733-1.51l.001-.241c.005-1.284 1.03-2.326 2.28295-2.326h.004l2.547.003c.602.001 1.17.239 1.598.67.443.445.685 1.04.683 1.675l-.002.279c-.002.566.257 1.101.694 1.429l.107.081c.459.345 1.057.444 1.594.264l.339-.113c.577-.192 1.191-.145 1.732.132.555.284.965.773 1.153 1.378l.787 2.52096c.38 1.218-.278 2.532-1.465 2.929l-.201.067c-.576.194-1.029.674-1.21 1.286-.166.561-.07 1.178.259 1.652l.26.375c.714 1.032.486 2.48-.508 3.229l-2.061 1.556c-.495.374-1.102.525-1.711.428-.614-.099-1.15-.439-1.509-.957l-.118-.172c-.35-.504-.91-.81-1.497-.777-.588.016-1.096.295-1.428.767l-.231.328c-.362.513-.89895.848-1.50995.944-.117.018-.233.026-.348.026zm3.38615-11.5001c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 5.0001c-1.93 0-3.50002-1.57-3.50002-3.5s1.57002-3.49999 3.50002-3.49999 3.5 1.56999 3.5 3.49999-1.57 3.5-3.5 3.5z" fillRule="evenodd"/>,
    })
))