import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'
import { vars } from '@fractal/ui-tokens'

function MainLayout({ children }: PropsWithChildren<{}>) {
  return <StyledMain>{children}</StyledMain>
}

const StyledMain = styled.main`
  min-height: 100dvh;
  position: relative;
  background-color: ${vars.$semantic.color.background.default};
`

export default MainLayout
