import React, { forwardRef } from 'react';
import Types from './types'
import Typography from './Typography'
import useFlow from '../../misc/hooks/useFlow';

/**
 * ANCHOR
 */

export const A = forwardRef(function A(props: Types.AnchorProps, ref) {
    const { theme } = useFlow();

    return (
        <Typography
            tag='a'
            defaultStyles={{
                ...theme.typography.text[1],
                color: theme.color.primary.css(),
                '&:hover': {
                    textDecoration: 'underline'
                },
                cursor: 'pointer'
            }}
            theme={theme}
            ref={ref}
            {...props}
        />
    )
})