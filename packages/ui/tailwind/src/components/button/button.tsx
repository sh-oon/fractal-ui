import { getButtonClasses } from './button.variants'
import { ButtonProps } from './button.types'
import { cx } from '@fractal/utils'

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  stretch = false,
  children,
  onClick,
}: ButtonProps) => {
  const buttonClasses = getButtonClasses(variant, size, stretch)

  return (
    <button className={cx(buttonClasses, className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
