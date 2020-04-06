import Types from './types'
import SystemTypes from '@stage-ui/system/types'
import fieldStyles from '@stage-ui/core/misc/hocs/Field/styles'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const minHeight =
        theme.assets.field[props.size || 'm']?.minHeight ||
        theme.assets.field.m.minHeight ||
        '2.5rem'

    return {
        ...fieldStyles(props, theme, {}),
        input: (variant) => [
            {
                outline: 0,
                padding: 0,
                margin: 0,
                border: 'none',
                backgroundImage: 'none',
                backgroundColor: 'transparent',
                resize: 'vertical',
                boxShadow: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'inherit',
                textOverflow: 'ellipsis',
                '&::placeholder': {
                    color: theme.color.light.rgb().string()
                },
            },
            variant({
                multiline: {
                    margin: `calc(${minHeight} / 4.5) 0`,
                    minHeight: `calc(${minHeight} * 2)`
                },
                disabled: {
                    color: theme.color.hardest.rgb().string()
                }
            })
        ],
    }
}

export default styles