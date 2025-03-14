import { keyframes } from '@emotion/react'
import type { SpinnerColor, SpinnerProps } from './spinner.types'
import { spinnerSize, spinnerStyle } from './spinner.variants'

const PATH_LENGTH = 50 as const

export const Spinner = ({ size, color = 'default' }: SpinnerProps) => {
  const { width, height, strokeWidth } = spinnerSize[size]
  const { stroke, opacity } = spinnerStyle[color]

  const viewBox = `-${width / 2} -${height / 2} ${width} ${height}`
  const circleRadius = width / 2 - strokeWidth / 2

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
      className='spinner-animation'
    >
      <circle
        r={circleRadius}
        strokeWidth={strokeWidth}
        fill='none'
        pathLength={PATH_LENGTH}
        stroke={stroke}
        strokeOpacity={opacity}
      />
    </svg>
  )
}

// const spinnerAnimation = keyframes`
//   0% {
//     stroke-dashoffset: ${PATH_LENGTH};
//   }
//   50% {
//     stroke-dashoffset: 0;
//   }
//   100% {
//     stroke-dashoffset: -${PATH_LENGTH};
//   }
// `

// const StyledSvg = styled.svg`
//   stroke-dasharray: ${PATH_LENGTH};
//   stroke-dashoffset: ${PATH_LENGTH};
//   rotate: -90deg;
//   animation: ${spinnerAnimation} 1.6s ease-in-out infinite;
// `

// const StyledCircle = styled.circle<{ color: SpinnerColor }>`
//   ${({ color }) => ({ ...spinnerStyle[color] })}
// `
