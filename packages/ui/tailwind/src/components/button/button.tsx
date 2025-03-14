import { buttonSizes, buttonVariant, getButtonClasses } from './button.variants'
import { ButtonProps } from './button.types'
import { cx } from '@fractal/utils'
import { Spinner } from '../spinner'
import { Text } from '../text'
import { useMemo } from 'react'

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  stretch = false,
  children,
  pending = false,
  onClick,
}: ButtonProps) => {
  const buttonClasses = getButtonClasses(variant, size, stretch)
  const { spinnerSize } = buttonSizes[size]

  const { spinnerColor } = buttonVariant[variant]

  const label = useMemo(() => {
    if (pending) {
      return <Spinner color={spinnerColor} size={spinnerSize} />
    }

    if (typeof children === 'string') {
      return (
        <Text typography='typo-text-l-bold' color={variant}>
          {children}
        </Text>
      )
    }

    return children
  }, [children, pending, spinnerColor, spinnerSize])

  return (
    <button className={cx(buttonClasses, className)} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}
