import { cx } from '../../../../../utils/src/func/cv'
import { Align, ColorType, TypographyType } from './text.types'

export const alignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

export const colorClass = {
  primary: 'text-primary hover:text-primary-hover active:text-primary-active',
  secondary: 'text-secondary hover:text-secondary-hover active:text-secondary-active',
  tertiary: 'text-tertiary hover:text-tertiary-hover active:text-tertiary-active',
  interactive: 'text-interactive hover:text-interactive-hover active:text-interactive-active',
  accent: 'text-accent hover:text-accent-hover active:text-accent-active',
  disabled: 'text-disabled',
  negative: 'text-negative hover:text-negative-hover active:text-negative-active',
  onColor: 'text-on-color hover:text-on-color-hover active:text-on-color-active',
  onWhite: 'text-on-white hover:text-on-white-hover active:text-on-white-active',
}

export const getTextClasses = (align: Align, color: ColorType, typography: TypographyType) => {
  return cx(alignClass[align], typography)
}
