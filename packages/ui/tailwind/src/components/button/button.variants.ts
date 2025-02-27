import { ButtonPadding, ButtonSize, ButtonState, ButtonVariant } from './button.types'
// import type { SpinnerSize, SpinnerColor } from '../spinner/spinner.types'

// 버튼 사이즈 설정
export const buttonSizes: Record<
  ButtonSize,
  {
    typography: string
    padding: ButtonPadding
    minWidth: string
    height: string
    // spinnerSize: SpinnerSize
  }
> = {
  large: {
    // spinnerSize: 'medium',
    typography: 'typo-text-l-bold',
    minWidth: 'min-w-[88px]',
    height: 'h-[52px]',
    padding: {
      default: 'px-dimension-250',
    },
  },
  medium: {
    // spinnerSize: 'medium',
    typography: 'typo-text-l-bold',
    minWidth: 'min-w-[84px]',
    height: 'h-[44px]',
    padding: {
      default: 'px-dimension-225',
    },
  },
  small: {
    // spinnerSize: 'small',
    typography: 'typo-text-xs-medium',
    minWidth: 'min-w-[66px]',
    height: 'h-[36px]',
    padding: {
      default: 'px-dimension-150',
    },
  },
  xSmall: {
    // spinnerSize: 'small',
    typography: 'typo-text-xs',
    minWidth: 'min-w-[60px]',
    height: 'h-[28px]',
    padding: {
      default: 'px-dimension-125',
    },
  },
}

// 버튼 상태 및 변형별 클래스 정의
export const buttonVariant: Record<
  ButtonVariant,
  {
    typography: string
    background: string
    border: string
    icon: string
    // spinnerColor: SpinnerColor
  }
> = {
  primary: {
    typography: 'text-on-color disabled:text-disabled',
    background: 'bg-fill-primary disabled:bg-fill-disabled',
    border: 'border border-transparent',
    icon: 'text-on-color',
    // spinnerColor: 'white',
  },
  secondary: {
    typography: 'text-secondary disabled:text-disabled',
    background: 'bg-fill-silent disabled:bg-fill-disabled',
    border: 'border border-line',
    icon: 'text-primary',
    // spinnerColor: 'default',
  },
  tertiary: {
    typography: 'text-primary disabled:text-disabled',
    background: 'bg-fill-surface-contents disabled:bg-fill-disabled',
    border: 'border border-line',
    icon: 'text-primary',
    // spinnerColor: 'default',
  },
}

// 사이즈별 클래스 조합
export const sizeClasses: Record<ButtonSize, string> = {
  large: `${buttonSizes.large.typography} ${buttonSizes.large.height} ${buttonSizes.large.minWidth} ${buttonSizes.large.padding.default}`,
  medium: `${buttonSizes.medium.typography} ${buttonSizes.medium.height} ${buttonSizes.medium.minWidth} ${buttonSizes.medium.padding.default}`,
  small: `${buttonSizes.small.typography} ${buttonSizes.small.height} ${buttonSizes.small.minWidth} ${buttonSizes.small.padding.default}`,
  xSmall: `${buttonSizes.xSmall.typography} ${buttonSizes.xSmall.height} ${buttonSizes.xSmall.minWidth} ${buttonSizes.xSmall.padding.default}`,
}

export function getButtonClasses(variant: ButtonVariant, size: ButtonSize, disabled: boolean = false): string {
  const variantClass = `${buttonVariant[variant].typography} ${buttonVariant[variant].background} ${buttonVariant[variant].border} ${buttonVariant[variant].icon}`

  return `${sizeClasses[size]} ${variantClass} rounded rounded-xs transition-colors duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed`
}
