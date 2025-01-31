'use client'

import { THEME } from '@/lib/theme'
import styled from 'styled-components'

const Bar = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${THEME.FOREGROUND_COLOR};
  box-sizing: border-box;
`

const Wrapper = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  /* background-color: ${THEME.SECONDARY_BACKGROUND_COLOR}; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 5px solid ${THEME.SECONDARY_BACKGROUND_COLOR}; */
`

const Hamburger = ({ onClick }: { onClick: () => void }) => {
  return (
    <Wrapper onClick={onClick}>
      <Bar />
      <Bar />
      <Bar />
    </Wrapper>
  )
}

export default Hamburger
