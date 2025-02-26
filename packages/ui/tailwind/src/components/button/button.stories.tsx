import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import type { ButtonProps } from './button.types'

const baseArgs: ButtonProps = {
  variant: 'primary',
  size: 'sm',
  children: '더보기',
  onClick: action('onclick'),
}

export default {
  title: 'ui/Button',
  component: Button,
  args: baseArgs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {}
