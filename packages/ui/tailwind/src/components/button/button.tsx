import { getButtonClasses } from './button.variants'
import { ButtonProps } from './button.types'

export const Button = ({ variant = 'primary', size = 'medium', disabled = false, children }: ButtonProps) => {
  const buttonClasses = getButtonClasses(variant, size)

  return (
    <button className={`${buttonClasses} text-fill-primary`} disabled={disabled}>
      {children}
    </button>
  )
}
