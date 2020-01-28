
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Badge: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Badge', { props, styles })

    return (
        <div css={cs.container}>
            <div
                {...attributes}
                {...events.all}
                ref={ref}
                children={props.content}
                css={cs.holder({align: props.align})}
            />
            {props.children}
        </div>
    )
}

export default forwardRef(Badge)