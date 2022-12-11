/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m11.9995 1c-6.07399 0-10.999988 4.82-10.999988 10.767 0 4.755 3.151998 8.791 7.522998 10.214.551.099.751-.233.751-.519 0-.255-.009-.933-.014-1.83-3.06.65-3.705-1.444-3.705-1.444-.501-1.244-1.222-1.575-1.222-1.575-.999-.668.076-.654.076-.654 1.104.076 1.684 1.109 1.684 1.109.981 1.646 2.574 1.17 3.202.895.1-.695.383-1.17.698-1.44-2.443-.271-5.011-1.195-5.011-5.32 0-1.175.429-2.136 1.133-2.889-.114-.272-.491-1.367.107-2.849 0 0 .924-.289 3.026 1.103.87699-.239 1.81799-.357 2.75299-.362.934.005 1.875.123 2.754.362 2.1-1.392 3.022-1.103 3.022-1.103.6 1.482.223 2.577.109 2.849.705.753 1.131 1.714 1.131 2.889 0 4.136-2.572 5.046-5.022 5.313.395.332.746.989.746 1.993 0 1.439-.013 2.6-.013 2.953 0 .288.198.623.756.518 4.367-1.426 7.516-5.459 7.516-10.213 0-5.947-4.925-10.767-11-10.767" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m16.2402 22.0001c-.552 0-1-.447-1-1v-2.599c.047-.663-.152-1.24-.543-1.659-.259-.276-.339-.674-.209-1.028.13-.355.448-.606.824-.649 2.434-.282 4.688-1.118 4.688-5.29099 0-.8-.232-1.571-.671-2.227-.401-.598-.547-1.327-.413-2.053.088-.473.083-.954-.012-1.419-.404.12-1.096.405-2.093 1.099-.245.17-.556.221-.842.141-1.804-.507-3.711-.507-5.516 0-.287.08-.59598.029-.84098-.141-.987-.687-1.675-.973-2.095-1.091-.094.461-.098.938-.011 1.408.133.722-.018 1.459-.426 2.077-.434.659-.661 1.429-.657 2.229 0 3.89399 1.879 4.93299 4.69998 5.29599.372.048.686.3.814.653.127.353.046.747-.21 1.021-.387.415-.586.986-.547 1.567l.001.788c.002.04.002.08 0 .12l.001 1.758c0 .553-.447 1-1 1-.55198 0-.99998-.447-.99998-1v-.571c-2.685.35-4.215-1.089-5.276-2.089-.44-.413-.854-.804-1.157-.883-.535-.139-.856-.685-.717-1.219s.685-.86 1.219-.717c.799.208 1.395.769 2.026 1.363 1.022.963 1.992 1.875 3.905 1.52v-.003c-.037-.529.042-1.071.225-1.584-2.054-.512-4.984-2.005-4.984-7.01499-.006-1.192.336-2.346.987-3.335.122-.185.168-.402.129-.613-.2-1.083-.085-2.195.335-3.211.114-.276.345-.487.63-.575.331-.102 1.551-.297 3.86198 1.203 1.871-.449 3.82-.449 5.69 0 2.312-1.5 3.531-1.306 3.862-1.203.285.088.516.299.63.575.421 1.018.536 2.129.335 3.215-.039.209 0 .414.108.577.66.987 1.009 2.141 1.009 3.339 0 5.06399-2.923 6.53899-4.98 7.03299.184.529.261 1.098.217 1.671l.003 2.522c0 .553-.448 1-1 1" fillRule="evenodd"/>,
    })
))