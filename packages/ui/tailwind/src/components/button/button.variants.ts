import { ButtonSize, ButtonVariant } from './button.types'

export const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-blue-800',
  tertiary: 'bg-transparent hover:bg-gray-100 text-gray-800',
}

export const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs py-1 px-2',
  md: 'text-sm py-2 px-4',
  lg: 'text-base py-3 px-6',
}
