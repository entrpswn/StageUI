import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    return {
        container: (variant) => [
            styleProps.all,
            {
                display: 'flex',
                width: '100%',
                height: '100%',
                flex: 1,
                flexDirection: 'row',
            },
            variant({
                vertical: {
                    flexDirection: 'column'
                }
            })
        ],
    }
}

export default styles