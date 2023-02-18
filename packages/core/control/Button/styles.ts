import { CSSInterpolation } from '@emotion/serialize'
import { colorProp } from '@stage-ui/system'

import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const {
    size = 'm',
    decoration = 'filled',
    shape = 'rounded',
    disabled,
    uppercase,
  } = props
  const color = colorProp(props.color, theme) || theme.color.primary
  const isDark = color.contrast(theme.color.onPrimary) > 2.5

  const applyDecoration = (
    decorations: Record<
      Types.Decoration,
      {
        idle: CSSInterpolation
        hover: CSSInterpolation
        active: CSSInterpolation
        disabled: CSSInterpolation
      }
    >,
  ) => {
    const style = decorations[decoration]
    if (disabled) {
      return Object.assign(style.idle, style.disabled)
    }
    return Object.assign(style.idle, {
      '&:hover': style.hover,
      '&:active': style.active,
    })
  }

  return {
    container: [
      {
        fontFamily: 'inherit',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        outline: 'none',
        boxShadow: 'unset',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: theme.radius.m,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        padding: `0 ${theme.assets.field[size].indent}`,
        height: theme.assets.field[size].height,
        transition: 'all 0.25s',
        transitionTimingFunction: 'ease',
        '&::-moz-focus-inner': {
          border: 0,
        },
      },
      theme.assets.typography.text[size],
      applyDecoration({
        filled: {
          idle: {
            background: color.rgb().string(),
            color: isDark
              ? theme.color.onPrimary.rgb().string()
              : theme.color.onSurface.rgb().string(),
          },
          hover: {
            background: color.whiten(0.4).hex(),
          },
          active: {
            background: color.blacken(0.4).hex(),
          },
          disabled: {
            color: theme.color.gray[500].hex(),
            background: theme.color.gray[200].hex(),
          },
        },
        text: {
          idle: {
            borderWidth: 0,
            color: color.rgb().string(),
          },
          hover: {
            transition: 'all 0.15s',
            background: color.alpha(0.05).rgb().string(),
          },
          active: {
            background: color.alpha(0.1).rgb().string(),
          },
          disabled: {
            color: theme.color.gray[400].hex(),
            borderColor: theme.color.gray[300].hex(),
          },
        },
        outline: {
          idle: {
            borderWidth: '0.0625rem',
            borderColor: color.alpha(0.5).rgb().string(),
            color: color.rgb().string(),
          },
          hover: {
            transition: 'all 0.15s',
            background: color.alpha(0.05).rgb().string(),
          },
          active: {
            background: color.alpha(0.05).rgb().string(),
          },
          disabled: {
            color: theme.color.gray[400].hex(),
            borderColor: theme.color.gray[300].hex(),
          },
        },
        plain: {
          idle: {
            borderWidth: '0.0625rem',
            borderColor: theme.color.gray[500].rgb().string(),
            background: theme.color.surface.rgb().string(),
            color: theme.color.onSurface.rgb().string(),
          },
          hover: {
            transition: 'all 0.15s',
            background: theme.color.surface.alpha(0.8).string(),
          },
          active: {
            background: theme.color.gray[100].rgb().string(),
          },
          disabled: {
            color: theme.color.gray[400].hex(),
            background: theme.color.gray[100].hex(),
            borderColor: theme.color.gray[200].hex(),
          },
        },
      }),
      shape === 'square' && {
        borderRadius: 0,
      },
      shape === 'round' && {
        borderRadius: '100rem',
      },
      uppercase && {
        textTransform: 'uppercase',
      },
      disabled && {
        cursor: 'not-allowed !important',
      },
    ],
    child: (state) => [
      {
        flexGrow: 0,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
        ' > span': {
          height: 'auto',
          '> svg': {
            height: theme.assets.typography.text[size].lineHeight,
            width: theme.assets.typography.text[size].lineHeight,
          },
        },
      },
      state.align === 'left' && {
        marginRight: theme.assets.field[size].indent,
      },
      state.align === 'right' && {
        marginLeft: theme.assets.field[size].indent,
      },
    ],
  }
}

export default styles
