import Color from 'color'

export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color | Stage.ColorNames)
  | Color
  | Stage.ColorNames

function colorProp<V extends ColorProp | undefined>(
  value: V,
  theme: Stage.Theme,
): V extends undefined ? undefined : Stage.Color {
  let resolvedColor

  switch (typeof value) {
    case 'string': {
      if (Object.hasOwnProperty.call(theme.color, value)) {
        resolvedColor = theme.color[value as keyof Stage.Colors]
        break
      }
      if (Object.hasOwnProperty.call(theme.color.palette, value)) {
        resolvedColor = theme.color.palette[value]
        break
      }
      const [color, shade] = value.split(/(\d+)/) as [
        keyof Stage.Colors,
        keyof Stage.ColorShades,
      ]
      if (Object.hasOwnProperty.call(theme.color, color)) {
        if (shade && Object.hasOwnProperty.call(theme.color[color], shade)) {
          resolvedColor = (theme.color[color] as Stage.ColorShades)[shade]
          break
        }
        resolvedColor = theme.color[color]
        break
      }
      resolvedColor = Color(value)
      break
    }
    case 'function': {
      resolvedColor = colorProp(value(theme.color), theme)
      break
    }
    case 'undefined': {
      resolvedColor = value
      break
    }
    default: {
      resolvedColor = Color(value)
    }
  }

  return resolvedColor as V extends undefined ? undefined : Stage.Color
}

export default colorProp
