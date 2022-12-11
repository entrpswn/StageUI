/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 22c5.5228 0 10-4.4772 10-10 0-5.52285-4.4772-10-10-10-5.52285 0-10 4.47715-10 10 0 5.5228 4.47715 10 10 10zm-.5551-1.2839c.177.1893.4045.2839.6825.2839.2781 0 .5056-.0946.6826-.2839.1769-.1767.2654-.3975.2654-.6625v-1.3517c.698-.1052 1.3173-.2982 1.858-.5789.6446-.3407 1.1502-.7886 1.5168-1.3438.3665-.5678.5498-1.2177.5498-1.9495 0-.9338-.2844-1.6846-.8532-2.2524-.5688-.5805-1.4598-1.0032-2.6732-1.2682l-2.0666-.4542c-.6699-.1514-1.1439-.3533-1.42196-.6057-.27807-.26497-.4171-.61197-.4171-1.041 0-.58044.22751-1.04732.68256-1.40063.4676-.36593 1.1059-.54889 1.9149-.54889.6319 0 1.1754.0694 1.6305.2082.455.12618.8658.29653 1.2323.51104.2655.15142.4993.22082.7015.2082.2149-.02524.3918-.10095.5309-.22713.139-.12618.2338-.2776.2844-.45426.0505-.18927.0442-.37855-.019-.56782-.0632-.20189-.1896-.37855-.3792-.52997-.4676-.36593-1.0301-.64984-1.6874-.85173-.4906-.15367-.9519-.25251-1.384-.29653v-1.31231c0-.26498-.0948-.4858-.2844-.66246-.1769-.18927-.3981-.28391-.6636-.28391-.278 0-.5055.09464-.6825.28391-.1769.17666-.2654.39748-.2654.66246v1.34278c-.7277.09-1.3723.28595-1.93387.58782-.65726.35331-1.16916.8265-1.53571 1.41956-.36655.58044-.54982 1.2429-.54982 1.98738 0 .95899.28439 1.73499.85317 2.32809.56878.593 1.42827 1.0158 2.57843 1.2681l2.0097.4354c.493.1009.8848.2334 1.1755.3974.2907.1515.4993.3344.6257.5489.1264.2019.1896.4417.1896.7193 0 .3407-.0948.6435-.2844.9085-.177.265-.4614.4732-.8532.6246s-.9037.2271-1.5357.2271c-.8089 0-1.5041-.0883-2.08553-.265-.56878-.1892-1.03013-.3848-1.38403-.5867-.26543-.1514-.49927-.2019-.7015-.1514-.20223.0378-.37287.1388-.5119.3028-.1264.1514-.20223.3344-.22751.5489s.00632.429.09479.6435c.08848.2019.24647.3723.47399.5111.46766.265 1.03644.4984 1.70634.7003.56664.1676 1.19865.2743 1.89595.3202v1.2886c0 .265.0885.4858.2654.6625z" fillRule="evenodd"/>,
        outline: <path d="m11.9498 22.922c-.3227 0-.5867-.11-.792-.33-.2054-.2053-.308-.462-.308-.77v-1.958l.506.484c-1.012-.0293-1.91402-.1613-2.70602-.396-.77734-.2347-1.43734-.506-1.98-.814-.264-.1613-.44734-.3593-.55-.594-.10267-.2493-.13934-.4987-.11-.748.02933-.2493.11733-.462.264-.638.16133-.1907.35933-.308.594-.352.23466-.0587.506 0 .814.176.41066.2347.946.462 1.606.682.67466.2053 1.48132.308 2.42002.308.7333 0 1.3273-.088 1.782-.264.4546-.176.7846-.418.99-.726.22-.308.33-.66.33-1.056 0-.3227-.0734-.6013-.22-.836-.1467-.2493-.3887-.462-.726-.638-.3374-.1907-.792-.3447-1.364-.462l-2.332-.506c-1.33469-.2933-2.33202-.7847-2.99202-1.474s-.99-1.5913-.99-2.706c0-.86533.21266-1.63533.638-2.31.42533-.68933 1.01933-1.23933 1.782-1.65.76266-.41067 1.65732-.65267 2.68402-.726l-.44.33v-1.848c0-.308.1026-.56467.308-.77.2053-.22.4693-.33.792-.33.308 0 .5646.11.77.33.22.20533.33.462.33.77v1.848l-.462-.352c.6306.01467 1.32.13933 2.068.374.7626.23467 1.4153.56467 1.958.99.22.176.3666.38133.44.616.0733.22.0806.44.022.66-.0587.20533-.1687.38133-.33.528-.1614.14667-.3667.23467-.616.264-.2347.01467-.506-.066-.814-.242-.4254-.24933-.902-.44733-1.43-.594-.528-.16133-1.1587-.242-1.892-.242-.9387 0-1.6794.21267-2.22202.638-.528.41067-.792.95333-.792 1.628 0 .49867.16133.902.484 1.21.32266.2933.87262.528 1.65002.704l2.398.528c1.408.308 2.442.7993 3.102 1.474.66.66.99 1.5327.99 2.618 0 .8507-.2127 1.606-.638 2.266-.4254.6453-1.012 1.166-1.76 1.562-.7334.3813-1.5914.6233-2.574.726l.418-.462v1.98c0 .308-.1027.5647-.308.77-.2054.22-.4694.33-.792.33z"/>,
    })
))