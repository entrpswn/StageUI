
import { Block } from '@stage-ui/core'
import Check from '@stage-ui/core/misc/hocs/Check'
import { useComponent } from '@stage-ui/system'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Radio: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { size = 'm', disabled } = props

    const { cs, attributes, events } = useComponent('Radio', {
        props,
        styles,
        styleProps: { container: ['all'] },
        focus: {
            applyDecoration: true
        }
    })

    return (
        <Check
            {...attributes}
            {...events.all}
            {...props}
            ref={ref}
            size={size}
            onFocus={(e) => {
                props.onFocus && props.onFocus(e)
                e.stopPropagation()
            }}
            onBlur={(e) => {
                props.onBlur && props.onBlur(e)
                e.stopPropagation()
            }}
            /**
             * Radio use
             */
            type="checkbox"
            styles={cs}
            children={(checked) =>
                <Block css={cs.check({ size, disabled })}>
                    <div css={cs.radio({ size, disabled, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Radio)