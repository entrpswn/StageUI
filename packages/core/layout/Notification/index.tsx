import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import Block from '../Block'
import styles from './styles'
import Types from './types'

const Notifications: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Notification', { props, styles })

    return (
        <Block 
            {...attributes}
            {...events.all}
            ref={ref} 
            surface="minor" 
            onClick={() => props.onClick && props.onClick()} css={cs.container}
            children={props.children}
        />
    )
}

export default forwardRef(Notifications)