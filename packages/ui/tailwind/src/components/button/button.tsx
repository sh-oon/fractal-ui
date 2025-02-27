import { getButtonClasses } from './button.variants'
import { ButtonProps } from './button.types'
import { cx } from '@fractal/utils'
export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  children,
}: ButtonProps) => {
  const buttonClasses = getButtonClasses(variant, size)

  return (
    <button className={cx(buttonClasses, className)} disabled={disabled}>
      {children}
    </button>
  )
}
