'use client'

import ROUTES from '@/lib/routes'
import { SPACING, THEME } from '@/lib/theme'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import Hamburger from '../_sharedComponents/Hamburger'

const THERE = [
  {
    title: 'Resume',
    path: '/travis_bumgarner_resume.pdf',
    target: '_blank'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/travisbumgarner/',
    target: '_blank'
  },
  {
    title: 'Github',
    path: 'https://github.com/travisBumgarner/',
    target: '_blank'
  },
  {
    title: 'Photography',
    path: 'https://travisbumgarner.photography',
    target: '_blank'
  }
]

type ItemProps = {
  title: string
  path: string
  target: string
  onClick: () => void
}

const Item = ({ title, path, target, onClick }: ItemProps) => {
  return (
    <Link style={{ textDecoration: 'none' }} target={target} href={path}>
      <Box onClick={onClick}>{title}</Box>
    </Link>
  )
}

const SidebarClient = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Positioner>
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <>
          {[...Object.values(ROUTES), ...THERE].map(r => (
            <Item
              onClick={() => setIsOpen(false)}
              key={r.path}
              title={r.title}
              path={r.path}
              target={r.target}
            />
          ))}
        </>
      )}
    </Positioner>
  )
}

const Box = styled.div`
  width: 120px;
  height: 40px;
  margin: ${SPACING.XXSMALL} 0;
  background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
  color: ${THEME.FOREGROUND_COLOR};

  text-align: left;
  padding-left: 17px;
  padding-right: 17px;
  align-content: center;

  &:hover {
    color: ${THEME.PRIMARY_COLOR};
  }

  a {
    text-decoration: none;
    color: ${THEME.FOREGROUND_COLOR};
  }
`

const Positioner = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
`

export default SidebarClient
