/**
 * Content
 */
import '@stage-ui/system'

import DividerTypes from '../content/Divider/types'
import SpinnerTypes from '../content/Spinner/types'
import HeaderTypes from '../content/Header/types'
import ParagraphTypes from '../content/Paragraph/types'
import TextTypes from '../content/Text/types'
import LinkTypes from '../content/Link/types'
/**
 * Control
 */
import ButtonTypes from '../control/Button/types'
import Calendar from '../control/Calendar/types'
import CheckboxTypes from '../control/Checkbox/types'
import DatePickerTypes from '../control/DatePicker/types'
import MenuTypes from '../control/Menu/types'
import RadioTypes from '../control/Radio/types'
import RangeTypes from '../control/Range/types'
import SelectTypes from '../control/Select/types'
import StepperTypes from '../control/Stepper/types'
import SwitchTypes from '../control/Switch/types'
import TextFieldTypes from '../control/TextField/types'
import ToggleTypes from '../control/Toggle/types'
/**
 * Data
 */
import MeterTypes from '../data/Meter/types'
import TableTypes from '../data/Table/types'
/**
 * Layout
 */
import BadgeTypes from '../layout/Badge/types'
import BlockTypes from '../layout/Block/types'
import DropTypes from '../layout/Drop/types'
import FlexboxTypes from '../layout/Flexbox/types'
import GridTypes from '../layout/Grid/types'
import ModalTypes from '../layout/Modal/types'
import NotificationTypes from '../layout/Notification/types'
import PopoverTypes from '../layout/Popover/types'
import TreeTypes from '../layout/Tree/types'
import ScrollView from '../layout/ScrollView/types'

import { darkTheme } from './dark'
import { lightTheme } from './light'

declare global {
  namespace Stage {
    interface ThemeOverrides {
      Divider?: Stage.ThemeComponentOverrides<DividerTypes.Props, DividerTypes.Classes>
      Spinner?: Stage.ThemeComponentOverrides<SpinnerTypes.Props, SpinnerTypes.Classes>
      Header?: Stage.ThemeComponentOverrides<HeaderTypes.Props, HeaderTypes.Classes>
      Paragraph?: Stage.ThemeComponentOverrides<
        ParagraphTypes.Props,
        ParagraphTypes.Classes
      >
      Text?: Stage.ThemeComponentOverrides<TextTypes.Props, TextTypes.Classes>
      Link?: Stage.ThemeComponentOverrides<LinkTypes.Props, LinkTypes.Classes>
      Button?: Stage.ThemeComponentOverrides<ButtonTypes.Props, ButtonTypes.Classes>
      Calendar?: Stage.ThemeComponentOverrides<Calendar.Props, Calendar.Classes>
      Checkbox?: Stage.ThemeComponentOverrides<CheckboxTypes.Props, CheckboxTypes.Classes>
      DatePicker?: Stage.ThemeComponentOverrides<
        DatePickerTypes.Props,
        DatePickerTypes.Classes
      >
      Menu?: Stage.ThemeComponentOverrides<MenuTypes.Props, MenuTypes.Classes>
      Radio?: Stage.ThemeComponentOverrides<RadioTypes.Props, RadioTypes.Classes>
      Range?: Stage.ThemeComponentOverrides<RangeTypes.Props, RangeTypes.Classes>
      Select?: Stage.ThemeComponentOverrides<SelectTypes.Props, SelectTypes.Classes>
      Stepper?: Stage.ThemeComponentOverrides<StepperTypes.Props, StepperTypes.Classes>
      Switch?: Stage.ThemeComponentOverrides<SwitchTypes.Props, SwitchTypes.Classes>
      TextField?: Stage.ThemeComponentOverrides<
        TextFieldTypes.Props,
        TextFieldTypes.Classes
      >
      Meter?: Stage.ThemeComponentOverrides<MeterTypes.Props, MeterTypes.Classes>
      Table?: Stage.ThemeComponentOverrides<TableTypes.Props<any>, TableTypes.Classes>
      Badge?: Stage.ThemeComponentOverrides<BadgeTypes.Props, BadgeTypes.Classes>
      Block?: Stage.ThemeComponentOverrides<BlockTypes.Props, BlockTypes.Classes>
      Drop?: Stage.ThemeComponentOverrides<DropTypes.Props, DropTypes.Classes>
      Flexbox?: Stage.ThemeComponentOverrides<FlexboxTypes.Props, FlexboxTypes.Classes>
      Grid?: Stage.ThemeComponentOverrides<GridTypes.Props, GridTypes.Classes>
      Modal?: Stage.ThemeComponentOverrides<ModalTypes.Props, ModalTypes.Classes>
      Notification?: Stage.ThemeComponentOverrides<
        NotificationTypes.Props,
        NotificationTypes.Classes
      >
      Popover?: Stage.ThemeComponentOverrides<PopoverTypes.Props, PopoverTypes.Classes>
      Tree?: Stage.ThemeComponentOverrides<TreeTypes.Props, TreeTypes.Classes>
      ScrollView?: Stage.ThemeComponentOverrides<ScrollView.Props, ScrollView.Classes>
      Toggle?: Stage.ThemeComponentOverrides<ToggleTypes.Props, ToggleTypes.Classes>
    }
  }
}

declare module '@emotion/react' {
  export interface Theme extends Stage.Theme {}
}

export const light = lightTheme
export const dark = darkTheme
