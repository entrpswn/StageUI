import Types from './types'
import WhaleTypes from '@flow-ui/whale/types'
import checkStyles from '@flow-ui/core/misc/hocs/Check/styles'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    
    return {
        ...checkStyles(props, theme, styleProps),
        
        check: (variant) => [
            {
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.color.primary.css(),
                borderColor: theme.color.lightest.css(),
                backgroundColor: theme.color.surface.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderRadius: theme.radius.narrow,
            },
            variant({
                focus: [{
                    borderColor: theme.color.primary.alpha(0.5).css()
                }]
            }),
            variant({
                size: {
                    xs: [{
                        width: '0.75rem',
                        height: '0.75rem'
                    }],
                    s: [{
                        width: '1rem',
                        height: '1rem'
                    }],
                    m: [{
                        width: '1.25rem',
                        height: '1.25rem'
                    }],
                    l: [{
                        width: '1.5rem',
                        height: '1.5rem'
                    }],
                    xl: [{
                        width: '2rem',
                        height: '2rem'
                    }],
                },
                animated: [{
                    transition: 'all .15s'
                }],
                disabled: [{
                    color: theme.color.hardest.css(),
                    borderColor: theme.color.lightest.css(),
                    backgroundColor: theme.color.lightest.css(),
                }],
            }),
        ],
        icon: (variant) => [
            {
                transition: 'all 0.2s',
                opacity: 0,
                transform: `scale(0.5)`,
            },
            variant({
                size: {
                    xs: [{
                        fontSize: '0.5rem'
                    }],
                    s: [{
                        fontSize: '0.75rem'
                    }],
                    m: [{
                        fontSize: '1rem'
                    }],
                    l: [{
                        fontSize: '1.45rem'
                    }],
                    xl: [{
                        fontSize: '1.9rem'
                    }],
                },
                animated: [{
                    transition: 'all .15s'
                }],
                checked: [{
                    opacity: 1,
                    transform: `scale(1)`,
                }]
            }),
        ]
    }
}

export default styles