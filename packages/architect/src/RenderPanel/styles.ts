import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: {
        },
        scrollView: css({ 
            height: 'calc(100vh - 4rem)',
        }),
        scrollContainer: css({ 
            padding: '2rem 4rem 20rem 4rem',
        }),
        mask: (color: string) => css({
            opacity: 0,
            pointerEvents: 'none',
            position: 'fixed',
            border: '3px solid',
            borderRadius: theme.radius.default,
            transform: 'translateX(-3px) translateY(-3px)',
            borderColor: color,
        }),
        maskName: (color: string) => css({
            position:'absolute',
            right:0,
            top: '-1rem',
            color: color
        }),
        deleteArea: css({
            opacity: 0.75,
            textAlign: 'center',
            padding: '0.5rem 1rem',
            fontSize: '0.75rem',
            color: theme.color.accent.red.hex(),
            marginLeft: '0.25rem',
        })
    }
}