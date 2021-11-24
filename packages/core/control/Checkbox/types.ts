declare namespace CheckboxTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    label?: string
    labelColor?: Stage.ColorProp
    checked?: boolean
    disabled?: boolean
    defaultValue?: boolean
    uppercase?: boolean
    size?: Stage.Sizes
    onChange?: (state: boolean) => void
  }

  type ClassState = {
    checked: Props['checked']
  }

  type Classes = {
    container: void
    label: void
    check: ClassState
    icon: ClassState
  }
}

export default CheckboxTypes
