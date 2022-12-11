/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m21.846 10.8274c.0213.068.0427.1361.0568.2068.062.313.097.635.097.966 0 .308-.036.611-.092.91-.0124.0682-.029.1335-.0457.1989-.0076.0296-.0151.0592-.0223.0891-.05.199-.109.394-.182.585-.038.099-.077.196-.121.292-.087.19-.188.372-.299.551-.0172.0278-.0336.056-.05.0841-.0274.047-.0547.0939-.086.1389-.0091.013-.0169.0265-.0246.0398-.0083.0144-.0165.0287-.0264.0422-.0077.0111-.0185.0182-.0291.0251-.0086.0057-.0172.0113-.0239.0189-.912 1.222-2.356 2.025-3.998 2.025h-.012c-.024-.466-.201-.925-.549-1.285-.374-.389-.899-.612-1.439-.612-.356 0-.699.093-1 .268v-3.371c0-1.103-.897-2-2-2-1.102 0-1.99999.897-1.99999 2v3.266c-.301-.173-.643-.266-1-.266-.534 0-1.036.208-1.414.586-.39.389-.585.902-.585 1.414h-.001c-1.642 0-3.086-.803-3.997-2.025-.00701-.0074-.01555-.0129-.02412-.0185-.01099-.0071-.02201-.0142-.02988-.0255-.01058-.0144-.01929-.0298-.02805-.0453-.00697-.0123-.01397-.0247-.02195-.0367-.03192-.0459-.06017-.0939-.0884-.1419-.01599-.0271-.03197-.0543-.0486-.0811-.11-.179-.212-.361-.299-.551-.04259-.0929-.07955-.1867-.11724-.2824l-.00376-.0096c-.072-.191-.132-.386-.181-.585-.00633-.0253-.01286-.0504-.01939-.0754-.01822-.07-.03636-.1397-.04961-.2126-.055-.299-.092-.602-.092-.91 0-.331.036-.653.097-.966.01457-.0728.03678-.1429.05897-.2129.01284-.0405.02567-.081.03703-.1221.00418-.0153.00835-.0307.01251-.046.04768-.1758.09536-.3515.16249-.518.03622-.0905.08069-.17524.1253-.26023.01943-.03703.03889-.0741.0577-.11173.0064-.01271.01278-.02541.01915-.0381.07027-.13994.1395-.27778.22385-.4089.06377-.1009.13601-.19398.20831-.28714.01726-.02224.03453-.04449.05169-.06686l.00354-.00455c.0968-.12446.19277-.24786.30046-.36345.09648-.10404.20011-.19735.30498-.29177.006-.0054.01201-.01081.01802-.01623.118-.106.238-.208.366-.302.119-.088.241-.168.368-.244.14-.086.283-.163.431-.234.13-.063.26-.12.396-.171.162-.062.329-.111.499-.155.135-.036.267-.071.407-.094.02642-.00484.05207-.01182.07771-.01879.03258-.00887.06515-.01773.09929-.02221.821-2.384 3.095-4.045 5.67499-4.045 2.581 0 4.855 1.661 5.675 4.045.0342.00449.0672.01338.1001.02226.0258.00696.0516.01391.0779.01874.139.023.272.058.406.094.17.044.337.093.499.155.136.051.267.108.396.171.148.071.291.148.431.234.127.076.25.156.369.244.127.094.247.196.365.302.112.1.221.198.324.308.109.117.206.242.303.368.0127.01636.0254.03265.0381.04893.0773.09917.1542.1977.2229.30507.0831.1306.152.26787.222.40724.0067.01324.0133.02649.02.03976.0188.03763.0383.0747.0577.11173.0446.08499.0891.16973.1253.26023.0683.167.1161.3433.1639.5195.004.0149.0081.0297.0121.0445.0116.0431.0249.0856.0382.1282zm-8.8458 6.8163 1.305-1.26c.398-.383 1.031-.372 1.414.025.384.398.373 1.031-.024 1.414l-3 2.897c-.195.186-.445.28-.695.28-.256 0-.512-.097-.707-.293l-3.00003-3c-.391-.39-.391-1.023 0-1.414.39-.39 1.023-.39 1.414 0l1.29303 1.293v-5.586c0-.553.448-1 1-1s1 .447 1 1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m11.9998 3c2.581 0 4.855 1.661 5.675 4.045 2.439.331 4.325 2.427 4.325 4.955 0 1.221-.444 2.396-1.25 3.309-.198.223-.473.338-.75.338-.235 0-.471-.082-.662-.25-.413-.367-.453-.998-.087-1.413.483-.546.749-1.252.749-1.984 0-1.654-1.346-3-3-3h-.1c-.476 0-.886-.336-.98-.803-.374-1.852-2.022-3.197-3.92-3.197-1.897 0-3.54598 1.345-3.91898 3.197-.094.467-.505.803-.981.803h-.1c-1.654 0-3 1.346-3 3 0 .732.266 1.438.75 1.984.365.415.326 1.046-.088 1.413-.415.366-1.046.325-1.411-.088-.807-.913-1.251-2.088-1.251-3.309 0-2.528 1.886-4.624 4.325-4.955.821-2.384 3.095-4.045 5.67498-4.045zm1.0004 14.644 1.305-1.26c.398-.383 1.031-.372 1.414.025.384.398.373 1.031-.024 1.414l-3 2.897c-.195.186-.445.28-.695.28-.256 0-.512-.097-.707-.293l-3.00002-3c-.391-.39-.391-1.023 0-1.414.39-.39 1.023-.39 1.414 0l1.29302 1.293v-5.586c0-.553.448-1 1-1s1 .447 1 1z" fillRule="evenodd"/>,
    })
))