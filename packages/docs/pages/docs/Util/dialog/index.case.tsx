import custom from './custom.raw'
import basic from './basic.raw'
import panel from './panel.raw'

export const title = 'Dialog'
export const subtitle = `creates Modal dialog with user message or custom content. Could be used without JSX in scope.`
export const ns = 'DialogTypes'
export const cases = [
  { label: 'Basic', code: basic },
  { label: 'Panel', code: panel },
  { label: 'Custom', code: custom },
]
