import React from 'react'
import { Header } from '../../../../payload/payload-types'
import Link from 'next/link'
import { Gutter } from '../../Gutter'
import classes from './index.module.scss'
import MobileNav from '../MobileNav'

const HeaderComponent = ({header}: {header: Header}) => {
  return (
    <nav className={classes.header}>
        <Gutter className={classes.wrap}>
            <Link href='/'>
                <img src='/logo-black.svg' alt='logo' className={classes.logo} width={170} height={50}/>
            </Link>
        </Gutter>
        <HeaderNav header={header} />
        <MobileNav header={header} />
    </nav>
  )
}

export default HeaderComponent