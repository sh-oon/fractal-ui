'use client'

import { Button } from '@fractal/ui-tailwind'

export const Test = () => {
  return (
    <div className='flex w-auto gap-4'>
      <Button variant='primary' size='large' stretch onClick={() => alert('clicked')}>
        Primary
      </Button>
      <Button variant='secondary' size='large' stretch onClick={() => alert('clicked')}>
        Secondaryasdasdasddas
      </Button>
      <Button variant='tertiary' size='large' stretch onClick={() => alert('clicked')}>
        Tertiary
      </Button>
      <Button variant='primary' pending size='large' stretch onClick={() => alert('clicked')}>
        Primary
      </Button>
      <Button variant='secondary' size='large' disabled stretch onClick={() => alert('clicked')}>
        Tertiary
      </Button>
    </div>
  )
}
